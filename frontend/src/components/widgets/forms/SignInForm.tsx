import React, { useContext } from 'react';
import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, FormGroup, Paper } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { toast } from 'react-toastify';

import { AuthContext } from '../../../context';
import SocialButton from '../buttons/SocialButton';
import CheckBoxInput from './inputs/CheckBoxInput';
import TextInput from './inputs/TextInput';
import axios from '../../../libs/axios';
import { loginAction } from '../../../reducers/auth/auth.actions';
import { isEmpty } from '../../../libs/is-emtpy';

interface SignInFormState {
  email: string;
  password: string;
  remember?: boolean;
}

// eslint-disable-next-line no-useless-escape
const passwordValidPattern =
  // eslint-disable-next-line no-useless-escape
  /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!?@#$%^&*()\-+\\\/.,:;"'{}\[\]<>~])[A-Za-z0-9!?@#$%^&*()\-+\\\/.,:;"'{}\[\]<>~]{8,}/;

const schema = object({
  email: string().required('Please enter your email address').email('Please insert a valid mail'),
  password: string()
    .required('Please enter a password')
    .matches(passwordValidPattern, 'Please insert a valid password'),
}).required();

const SignInForm: React.FC = () => {
  const form = useForm<SignInFormState>({
    defaultValues: { email: '', password: '', remember: false },
    resolver: yupResolver(schema),
  });
  const { dispatchAuth } = useContext(AuthContext);
  const history = useHistory();
  const { control, handleSubmit } = form;

  const onSubmit = async (data: SignInFormState) => {
    const result = await axios.post('login', data);

    if (!isEmpty(result.data.authToken)) {
      toast.success('Login Success!');
      dispatchAuth(
        loginAction({
          isAuthenticated: true,
          authToken: result.data.authToken,
          user: result.data.user,
        })
      );
      history.push('/dashboard');
    } else {
      // toast.error(result.respones.data.message ? result.respones.data.message : "Login Failed!");
    }
  };

  return (
    <Paper elevation={0}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput name="email" control={control} label="Email" />
        <TextInput name="password" type="password" control={control} label="Password" />
        <FormGroup row sx={{ alignItems: 'center' }}>
          <CheckBoxInput name="remember" control={control} label="Remember Me" />
          <Button
            sx={{
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: '14px',
              lineHeight: '20px',
              textTransform: 'none',
              letterSpacing: '0.25px',
              padding: '0px',
            }}
            variant="text"
          >
            Forgot Password?
          </Button>
        </FormGroup>
        <SocialButton customcolor="#4285F4" variant="contained" type="submit" sx={{ marginTop: '24px' }} fullWidth>
          SIGN IN
        </SocialButton>
      </form>
      <DevTool control={control} />
    </Paper>
  );
};

export default SignInForm;

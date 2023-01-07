import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, FormGroup, Paper } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { object, string } from "yup";

import SocialButton from "../buttons/SocialButton";
import { CheckBoxInput } from "./inputs/CheckBoxInput";
import TextInput from "./inputs/TextInput";

interface SignInFormState {
  email: string;
  password: string;
  remember?: boolean;
}

const passwordValidPattern =
  /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!?@#$%^&*()\-+\\\/.,:;"'{}\[\]<>~])[A-Za-z0-9!?@#$%^&*()\-+\\\/.,:;"'{}\[\]<>~]{8,}/;

const schema = object({
  email: string()
    .required("Please enter your email address")
    .email("Please insert a valid mail"),
  password: string()
    .required("Please enter a password")
    .matches(passwordValidPattern, "Please insert a valid password"),
}).required();

const SignInForm: React.FC = () => {
  const form = useForm<SignInFormState>({
    defaultValues: { email: "", password: "", remember: false },
    resolver: yupResolver(schema),
  });
  const { control, handleSubmit } = form;

  const onSubmit = (data: SignInFormState) => console.log(data);

  return (
    <Paper elevation={0}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput name="email" control={control} label="Email" required />
        <TextInput
          name="password"
          type="password"
          control={control}
          label="Password"
          required
        />
        <FormGroup row sx={{ alignItems: "center" }}>
          <CheckBoxInput
            name="remember"
            control={control}
            label="Remember Me"
          />
          <Button
            sx={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "14px",
              lineHeight: "20px",
              textTransform: "none",

              /* identical to box height, or 150% */
              letterSpacing: "0.25px",
              padding: "0px",
            }}
            variant="text"
          >
            Forgot Password?
          </Button>
        </FormGroup>
        <SocialButton
          customColor="#4285F4"
          variant="contained"
          type="submit"
          sx={{ marginTop: "24px" }}
          fullWidth
        >
          SIGN IN
        </SocialButton>
      </form>
      <DevTool control={control} />
    </Paper>
  );
};

export default SignInForm;

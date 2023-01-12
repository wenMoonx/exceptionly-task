import React from "react";
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import { Paper } from "@mui/material";
import { useForm } from "react-hook-form";
import { object, ref, string } from "yup";
import SocialButton from "../buttons/SocialButton";

import TextInput from "./inputs/TextInput";

interface SignUpFormState {
  firstName: string;
  lastName: string;
  email: string;
  retypeEmail: string;
  password: string;
  retypePassword: string;
}

const passwordValidPattern = /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!?@#$%^&*()\-+\\\/.,:;"'{}\[\]<>~])[A-Za-z0-9!?@#$%^&*()\-+\\\/.,:;"'{}\[\]<>~]{8,}/;

const schema = object({
  firstName: string().required("Please enter your first name"),
  lastName: string().required("Please enter your last name"),
  email: string().required("Please enter your email address").email("Please insert a valid mail"),
  retypeEmail: string()
    .required("Please enter your email address")
    .email("Please insert a valid mail")
    .oneOf([ref("email")], "Email does not match"),
  password: string().required("Please enter a password").matches(passwordValidPattern, "Please insert a valid password"),
  retypePassword: string()
    .required("Please enter a password")
    .matches(passwordValidPattern, "Please insert a valid password")
    .oneOf([ref("password")], "Passwords does not match"),
}).required();

const SignUpForm: React.FC = () => {
  const form = useForm<SignUpFormState>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      retypeEmail: "",
      password: "",
      retypePassword: "",
    },
    resolver: yupResolver(schema),
  });
  const { control, handleSubmit } = form;

  const onSubmit = (data: SignUpFormState) => console.log(data);

  return (
    <Paper elevation={0}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput name="firstName" control={control} label="First Name" required />
        <TextInput name="lastName" control={control} label="Last Name" required />
        <TextInput name="email" control={control} label="Email" required />
        <TextInput name="retypeEmail" control={control} label="Retype Email" required />
        <TextInput name="password" type="password" control={control} label="Password" required />
        <TextInput name="retypePassword" type="password" control={control} label="Retype Password" required />
        <SocialButton customColor="#4285F4" variant="contained" type="submit" sx={{ marginTop: "24px" }} fullWidth>
          SIGN UP
        </SocialButton>
      </form>
      <DevTool control={control} />
    </Paper>
  );
};

export default SignUpForm;

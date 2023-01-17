import React from "react";
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import { Paper } from "@mui/material";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { toast } from "react-toastify";

import SocialButton from "../buttons/SocialButton";
import axios from "../../../libs/axios";
import TextInput from "./inputs/TextInput";

interface SignUpFormState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const passwordValidPattern = /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!?@#$%^&*()\-+\\\/.,:;"'{}\[\]<>~])[A-Za-z0-9!?@#$%^&*()\-+\\\/.,:;"'{}\[\]<>~]{8,}/;

const schema = object({
  firstName: string().required("Please enter your first name"),
  lastName: string().required("Please enter your last name"),
  email: string().required("Please enter your email address").email("Please insert a valid mail"),
  password: string().required("Please enter a password").matches(passwordValidPattern, "Please insert a valid password"),
}).required();

type IProps = {
  toggleIsCreateMode: () => void;
};

const SignUpForm: React.FC<IProps> = ({ toggleIsCreateMode }: IProps) => {
  const form = useForm<SignUpFormState>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const { control, handleSubmit } = form;

  const onSubmit = async (data: SignUpFormState) => {
    const result = await axios.post("users", data);

    if (result.data.user) {
      toast.success(result.data.message);
      toggleIsCreateMode();
    } else {
      toast.error("An error occurred while signing up.");
    }
  };

  return (
    <Paper elevation={0}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput name="firstName" control={control} label="First Name" required />
        <TextInput name="lastName" control={control} label="Last Name" required />
        <TextInput name="email" control={control} label="Email" required />
        <TextInput name="password" type="password" control={control} label="Password" required />
        <SocialButton customColor="#4285F4" variant="contained" type="submit" sx={{ marginTop: "24px" }} fullWidth>
          SIGN UP
        </SocialButton>
      </form>
      <DevTool control={control} />
    </Paper>
  );
};

export default SignUpForm;

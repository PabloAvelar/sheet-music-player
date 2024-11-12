import React from "react";
import PasswordInput from "../../components/passswordinput";
import AppForm from "../../components/appform";
import MainContainer from "../../components/maincontainer";
import { Input, Button } from "@nextui-org/react";

function Login() {
  return (
    <MainContainer>
      <h1>Welcome back!</h1>
      <AppForm>
        <Input label="Email" variant="flat" type="email" placeholder="" />
        <PasswordInput
          label="Password"
          variant="flat"
          placeholder=""/>
          <Button> Sign in </Button>
      </AppForm>
    </MainContainer>
  );
}

export default Login;

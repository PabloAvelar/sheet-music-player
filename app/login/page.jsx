'use client'

import React, { useState } from "react";
import PasswordInput from "../../components/passswordinput";
import AppForm from "../../components/appform";
import MainContainer from "../../components/maincontainer";
import { Input, Button } from "@nextui-org/react";
import registerService from "../../services/registerService";
import { saveSession } from "../../lib/authSession";
import PreventAuthUser from "../../components/preventauthuser";
import { useRouter } from 'next/navigation';


function Login() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const sendData = async () => {
    try {
      const data = {
        password: password,
        email: email,
      }

      const response = await registerService.login(data);
      console.log(response);

      saveSession(response);

      router.push("/");

    } catch(e) {
      console.error("Couldn't login!", e);
    }
  }

  return (
    <MainContainer>
      <PreventAuthUser>
        <h1>Welcome back!</h1>
        <AppForm>
          <Input
            label="Email"
            variant="flat"
            type="email"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)} />

          <PasswordInput
            label="Password"
            variant="flat"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onPress={sendData}> Sign in </Button>
        </AppForm>
      </PreventAuthUser>
    </MainContainer>

  );
}

export default Login;

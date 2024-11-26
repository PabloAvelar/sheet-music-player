'use client';

import React from 'react'
import MainContainer from '../../components/maincontainer'
import AppForm from '../../components/appform'
import { Input, Button } from "@nextui-org/react";
import registerService from '../../services/registerService';
import PasswordInput from "../../components/passswordinput";
import { useRouter } from 'next/navigation';
import { saveSession } from '../../lib/authSession';

function Register() {
  const router = useRouter();
  const [valueUsername, setValueUsername] = React.useState("");
  const [valueEmail, setValueEmail] = React.useState("");
  const [valuePassword, setValuePassword] = React.useState("");
  const [valuePasswordConfirmation, setValuePasswordConfirmation] = React.useState("");

  const sendData = async () => {
    try {

      const data = {
        username: valueUsername,
        password: valuePassword,
        email: valueEmail,
      }

      console.log(data);
      const response = await registerService.register(data);
      console.log(response);
      saveSession(response);

      router.push("/");

    } catch(e) {
      console.error("Couldn't sign up!", e);
    }
  }

  return (
    <main className="h-screen w-full bg-nord-6 ">
      <MainContainer>
        <div>
          <h1>Create a new account</h1>
        </div>

        <AppForm>
          <Input label="Username" variant="flat" type="text" placeholder="" value={valueUsername} onValueChange={setValueUsername} />
          <Input label="Email" variant="flat" type="email" placeholder="" value={valueEmail} onValueChange={setValueEmail} />
          <PasswordInput
            label="Password"
            variant="flat"
            placeholder=""
            value={valuePassword}
            onChange={(e) => setValuePassword(e.target.value)}
          />
          <PasswordInput
            label="Confirm password"
            variant="flat"
            placeholder=""
            value={valuePasswordConfirmation}
            onChange={(e) => setValuePasswordConfirmation(e.target.value)}
          />
          <Button onPress={sendData}> Register </Button>
        </AppForm>
      </MainContainer>
    </main>
  )
}

export default Register

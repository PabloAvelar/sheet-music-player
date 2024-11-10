'use client';

import React from 'react'
import MainContainer from '../../components/maincontainer'
import AppForm from '../../components/appform'
import { Input, Button } from "@nextui-org/react";
import registerService from '../../services/registerService';

function Register() {
  const [valueUsername, setValueUsername] = React.useState("");
  const [valueEmail, setValueEmail] = React.useState("");
  const [valuePassword, setValuePassword] = React.useState("");

  const sendData = async () => {
    try {
      const data = {
        username: valueUsername,
        password: valuePassword,
        email: valueEmail,
      }

      const response = await registerService.register(data);
      console.log(response);
    } catch {
      console.error("no se pudo bro");
    }
  }
  
  return (
    <main className="h-screen w-full bg-nord-6 ">
      <MainContainer>
        <div>
          <h1>Register</h1>
        </div>

        <AppForm>
          <Input size={'sm'} variant="flat" type="text" placeholder="Username" value={valueUsername} onValueChange={setValueUsername} />
          <Input size={'sm'} variant="flat" type="email" placeholder="Email" value={valueEmail} onValueChange={setValueEmail} />
          <Input size={'sm'} variant="flat" type="password" placeholder="Password" value={valuePassword} onValueChange={setValuePassword} />

          <Button onPress={sendData}> Register </Button>
        </AppForm>

      </MainContainer>
    </main>
  )
}

export default Register

import React from 'react'
import {Buttons, Inputs} from "./../Generic"
import { Checkbox } from 'antd';
import { Container, Forgot, Input, RemFor, Sign, Wrapper } from './style';
const SignIn = () => {
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
      };
  return (
    <>
    <Container>
        <Wrapper>
        <Sign>Sign in</Sign>
        <Input>
            {/* <div>Login</div> */}
            <Inputs border={"none"} placeholder={"Login"}/>
        </Input>
        <div>
            <div>
            <Inputs border={"none"} placeholder={"Password"}/>
            </div>
            <RemFor>
                <Checkbox onChange={onChange}>Remember me</Checkbox>
                <Forgot href="!#">
                    Forgot password
                </Forgot>
            </RemFor>
        </div>
        <Buttons txt={"Login"} width={520} background={"#0061DF"} color={"white"}/>
        </Wrapper>
    </Container>
    </>
  )
}

export default SignIn
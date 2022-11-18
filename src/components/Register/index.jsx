import React from 'react'
import {Buttons, Inputs} from "./../Generic"
// import { Checkbox } from 'antd';
import { Container, Input, Sign, Wrapper } from './style';
const Register = () => {
  return (
    <>
    <Container>
        <Wrapper>
        <Sign>Registration</Sign>
        <Input>
            <Inputs border={"none"} placeholder={"Login"}/>
        </Input>
        <Input>
            <Inputs border={"none"} placeholder={"First name"}/>
        </Input>
        <Input>
            <Inputs border={"none"} placeholder={"Last name"}/>
        </Input>
        <Input>
            <Inputs border={"none"} placeholder={"Email"}/>
        </Input>
        <Input>
            <Inputs border={"none"} placeholder={"User role"}/>
        </Input>
        <Input>
            <Inputs border={"none"} placeholder={"Password"}/>
        </Input>
        <Input>
            <Inputs border={"none"} placeholder={"Re-enter password"}/>
        </Input>
        <div>
            
            {/* <RemFor>
                <Checkbox onChange={onChange}>Remember me</Checkbox>
                <Forgot href="!#">
                    Forgot password
                </Forgot>
            </RemFor> */}
        </div>
        <Buttons txt={"Register"} width={520} background={"#0061DF"} color={"white"}/>
        </Wrapper>
    </Container>
    </>
  )
}

export default Register
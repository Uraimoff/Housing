import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Forgot } from './style';
import {Buttons, Inputs} from "./../Generic"
// import { Checkbox } from 'antd';
import { Container, Input, Sign, Wrapper } from './style';
const Register = () => {
    const navigate = useNavigate()
  return (
    <>
    <Container>
        <Wrapper>
        <Sign>Registration</Sign>
        <Input>
            <Inputs border placeholder={"Login"}/>
        </Input>
        <Input>
            <Inputs border placeholder={"First name"}/>
        </Input>
        <Input>
            <Inputs border placeholder={"Last name"}/>
        </Input>
        <Input>
            <Inputs border placeholder={"Email"}/>
        </Input>
        <Input>
            <Inputs border  placeholder={"User role"}/>
        </Input>
        <Input>
            <Inputs border password={"password"} placeholder={"Password"}/>
        </Input>
        <Input>
            <Inputs border password={"password"} placeholder={"Re-enter password"}/>
        </Input>
        <div>
        <Forgot onClick={()=>navigate('/signin')}>
                    Already have account
                </Forgot>
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
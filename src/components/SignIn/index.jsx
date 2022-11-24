import React, { useState } from "react";
import { Buttons, Inputs } from "./../Generic";
import { Checkbox, message } from "antd";
import { Container, Forgot, Input, RemFor, Sign, Wrapper } from "./style";
import { useRequest } from "./../../hooks/useRequest";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const navigate = useNavigate();
  const [body, setBody] = useState({});
  const [error, setError] = useState(false);
  const request = useRequest();
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const onChanges = ({ target: { value, name }}) => {
    setBody({
      ...body,
      [name]: value,
    });
    setError(false)
  };
  const info=()=>{
    message.info("Success")
  }
  const warning=()=>{
    message.warning("Success")
  }
  const onSubmit = async() => {
    // request({ url: `/public/auth/login`, method: 'POST', body });
    try{

        let res= await fetch('https://houzing-app.herokuapp.com/api/public/auth/login',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }).then((res)=>res.json())
            if(res?.authenticationToken) navigate(`/my-property`);
                info()
                localStorage.setItem('token', res?.authenticationToken)
        } catch (error){
            warning()
        }
        
            
        
    // console.log(body);
  };
  return (
    <>
      <Container>
        <Wrapper>
          <Sign>Sign in</Sign>
          <Input>
            {/* <div>Login</div> */}
            <Inputs
              border={"none"}
              onChange={onChanges}
              name={"email"}
              placeholder={"Login"}
            />
          </Input>
          <div>
            <div>
              <Inputs
                border={"none"}
                onChange={onChanges}
                name={"password"}
                password="password"
                placeholder={"Password"}
              />
            </div>
            <RemFor>
              <Checkbox onChange={onChange}>Remember me</Checkbox>
              <Forgot onClick={() => navigate("/register")}>
                Forgot password
              </Forgot>
            </RemFor>
          </div>
          <Buttons
            txt={"Login"}
            width={520}
            onClick={onSubmit}
            background={"#0061DF"}
            color={"white"}
          />
        </Wrapper>
      </Container>
    </>
  );
};

export default SignIn;

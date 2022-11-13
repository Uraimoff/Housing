import styled from "styled-components";
// import setting from "./../../../assets/icons/svg/Settings.svg"

const Inpt = styled.input`
border-radius: 2px;
background: url('src/assets/icons/svg/Settings.svg') no-repeat scroll 7px 7px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
:focus{
    outline: none;
}
`
const Wrapper=styled.div`
display: flex;
position: relative;
`
const Icon=styled.img`
position: absolute;
top: 14px;
left: 5px;
`

export {Inpt, Wrapper, Icon}
import styled from "styled-components";

const Container =styled.div`
width: 100%;
max-width: 380px;
min-width: 300px;
margin: auto;
background-color: white;
border: #E6E9EC solid 1px;
border-radius: 3px;
overflow: hidden;
transition: 0.9s;
:hover{
    box-shadow: 00px 00px 30px 3px #888888;
    z-index: 999;
}
`

export {Container}
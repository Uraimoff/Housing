import styled from "styled-components";

const Container = styled.div`
display: grid;
grid-template-columns: auto auto auto;
gap: 20px;
width: 100%;
max-width: 1440px;
min-width: 300px;
@media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: auto ;
        padding: 0 !important;
        margin: auto  !important;;
    }
`;
const Wrapper = styled.div`
max-width: 1440px;
min-width: 300px;
    width: 100%;
    padding: var(--padding);
    margin: auto;
    `
const PAgina=styled.div`
margin-top: 50px;
`

export {Container, PAgina, Wrapper}
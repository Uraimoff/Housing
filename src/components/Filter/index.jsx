import React from 'react'
import { Buttons, Inputs } from '../Generic'
import { Filtr } from './style'
import loupe from "./../../assets/icons/svg/loupeWhite.svg"
import setting from "./../../assets/icons/svg/Settings.svg"

function Filter() {
  return (
    <>
    <Filtr>
        <Inputs placeholder={"Enter an address, neighborhood, city, or ZIP code"}/>
        <Buttons img={setting} width={140} background={""} txt={"Advanced"}/> 
        <Buttons img={loupe} background="#0061df" width={180} color="white" txt={"Search"}/> 
    </Filtr>
    </>
  )
}

export default Filter
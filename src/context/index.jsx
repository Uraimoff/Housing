import {createContext} from 'react'
import PropertiesProvider from './Properties';

const Root = createContext()

const RootContext = ({children})=>{
    return <PropertiesProvider>{children}</PropertiesProvider>;
}

export default RootContext;
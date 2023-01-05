import React,{useState,createContext} from 'react';

export const SideDrawerContext = createContext();

export const SideDrawerProvider = (props) =>{
    const [isShowNav,setIsShowNav] = useState(true);
    
    return(
        <SideDrawerContext.Provider value={[isShowNav,setIsShowNav]}>
            {props.children}
        </SideDrawerContext.Provider>
    )

}
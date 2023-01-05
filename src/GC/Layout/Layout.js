import React,{useContext} from 'react';
import Header from '../Header/Header';
import SideDrawer from '../UI/SideDrawer/SideDrawer';
import {SideDrawerContext} from '../UI/SideDrawer/SideDrawerContext';
import classes from './Layout.module.css'
const Layout = (props) =>{
    const [isNavShow] = useContext(SideDrawerContext);
    // console.log(isNavShow);
    return(
        <React.Fragment>
            <Header />
            
            <SideDrawer />
            <main className={[isNavShow ? [classes.mainContentShrink] : classes.mainContentExpand, classes.mainContent].join(' ')} >
                {props.children}
            </main>
            
        </React.Fragment>
    )
}
export default Layout;
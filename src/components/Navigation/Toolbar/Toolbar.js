import React from "react";
import classes from './Toolbar.module.scss';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../../Navigation/SideDrawer/DrawerToggle/DrawerToggle';
import NavigationItems from '../NavigationItems/NavigationItems';


const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>
            <Logo height={"80px"}/>
        </div>
        <nav>
            <NavigationItems/>
        </nav>
        <DrawerToggle clicked={props.open}/>
    </header>
);

export default toolbar;
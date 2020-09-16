import React from "react";
import classes from './Toolbar.module.scss';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../../Navigation/SideDrawer/DrawerToggle/DrawerToggle';
import NavigationItems from '../NavigationItems/NavigationItems';


const toolbar = () => (
    <header className={classes.Toolbar}>
        <div>
            <Logo/>
        </div>
        <nav>
            <NavigationItems/>
        </nav>
        <DrawerToggle/>
    </header>
);

export default toolbar;
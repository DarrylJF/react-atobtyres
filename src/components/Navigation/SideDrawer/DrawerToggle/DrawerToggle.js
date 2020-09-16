import React from "react";
import {FaBars} from "react-icons/fa";
import classes from './DrawerToggle.module.scss';

const drawerToggle = () => (
    <div className={classes.DrawerToggle}>
        <FaBars/>
    </div>
);

export default drawerToggle;
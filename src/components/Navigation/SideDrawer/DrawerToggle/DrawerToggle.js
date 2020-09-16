import React from "react";
import {FaBars} from "react-icons/fa";
import classes from './DrawerToggle.module.scss';

const drawerToggle = (props) => (
    <div className={classes.DrawerToggle}>
        <FaBars onClick={props.clicked}/>
    </div>
);

export default drawerToggle;
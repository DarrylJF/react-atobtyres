import React from "react";
import atobLogo from '../../assets/images/logo.png';
import classes from './Logo.module.scss';

const logo = () => (
    <div className={classes.Logo}>
        <img src={atobLogo} alt="Company Logo"/>
    </div>
);

export default logo;
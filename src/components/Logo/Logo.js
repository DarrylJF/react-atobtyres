import React from "react";
import atobLogo from '../../assets/images/logo.png';
import classes from './Logo.module.scss';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={atobLogo} alt="Company Logo" style={{height: props.height}}/>
    </div>
);

export default logo;
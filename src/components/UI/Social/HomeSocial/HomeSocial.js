import React from "react";
import Facebook from '../Facebook/Facebook';
import Instagram from '../Instagram/Instagram';
import Google from '../Google/Google';
import classes from './HomeSocial.module.scss';

const homeSocial = () => (
    <div className={classes.HomeSocial}>
        <Instagram/>
        <Facebook/>
        <Google/>
    </div>
);

export default homeSocial;
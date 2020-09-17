import React from "react";
import classes from './HomeHero.module.scss';
import Chevron from '../Chevron/Chevron';
import HomeSocial from '../Social/HomeSocial/HomeSocial';
import HomePhone from '../Phone/Phone';

const homeHero = (props) => (
    <div className={classes.Hero}>
        <div className={classes.HeroContainer}>
            <div className={classes.HeroContent}>
                <h1>
                    <span className={classes.Marks}>//</span>
                    ipswich car fitting service
                </h1>
                <div className={classes.Arrows}>
                    <Chevron />
                </div>
            </div>
        </div>
        <div className={classes.Social}>
            <HomeSocial/>
        </div>
        <div className={classes.Phone}>
            <HomePhone/>
        </div>
    </div>

);

export default homeHero;
import React from "react";
import classes from './NavigationItems.module.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Home</NavigationItem>
        <NavigationItem link="/">About</NavigationItem>
        <NavigationItem link="/">Offers</NavigationItem>
        <NavigationItem link="/">Mobile Fitting</NavigationItem>
        <NavigationItem link="/">Order Mobile Tyres</NavigationItem>
        <NavigationItem link="/">Contact Us</NavigationItem>
    </ul>
);

export default navigationItems;
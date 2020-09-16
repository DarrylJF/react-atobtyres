import React, {Fragment} from "react";
import classes from './SideDrawer.module.scss';
import NavigationItems from '../NavigationItems/NavigationItems';
import Close from '../../UI/Button/Close';

const sideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.show) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Fragment>
            <div className={attachedClasses.join(' ')}>
                <nav>
                    <NavigationItems/>
                    <Close clicked={props.closed}/>
                </nav>
            </div>
        </Fragment>

    );
};

export default sideDrawer;
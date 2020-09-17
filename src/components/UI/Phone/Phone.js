import React from "react";
import {FaPhone} from "react-icons/fa";
import classes from './Phone.module.scss';


const phone = () => (
    <div className={classes.Phone}>
        <a href="/">
            <FaPhone/>
            01473 269030
        </a>
    </div>

);

export default phone;
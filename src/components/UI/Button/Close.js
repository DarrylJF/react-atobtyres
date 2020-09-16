import React from "react";
import classes from './Close.module.scss';

import {FaTimes} from "react-icons/fa";

const close = (props) => (
    <button className={classes.Close}>
        <FaTimes onClick={props.clicked}/>
    </button>
);

export default close;
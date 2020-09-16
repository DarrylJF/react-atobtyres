import React, {Fragment} from "react";
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => {

    return (
        <Fragment>
            <Toolbar/>
            {/*<SideDrawer/>*/}
            {/*<Hero/>*/}
            <main>
                {props.children}
            </main>
            {/*<Footer/>*/}
        </Fragment>
    )
};

export default layout;
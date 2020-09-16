import React, {Fragment, useState} from "react";
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout = (props) => {

    const [showSideDrawer, setShowSideDrawer] = useState(false);

   function sideDrawerCloseHandler() {
       setShowSideDrawer(false);
   }

   function sideDrawerOpenHandler() {
       setShowSideDrawer(true);
   }

    return (
        <Fragment>
            <Toolbar open={sideDrawerOpenHandler}/>
            <SideDrawer
                show={showSideDrawer}
                closed={sideDrawerCloseHandler}/>
            {/*<Hero/>*/}
            <main>
                {props.children}
            </main>
            {/*<Footer/>*/}
        </Fragment>
    )
};

export default Layout;
import React, {Fragment, useState} from "react";
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Hero from '../UI/Hero/HomeHero';


const Layout = (props) => {

    const [showSideDrawer, setShowSideDrawer] = useState(false);

   const sideDrawerCloseHandler = () => {
       setShowSideDrawer(false);
   };

   const sideDrawerOpenHandler =() => {
       setShowSideDrawer(true);
   };

    return (
        <Fragment>
            <Toolbar open={sideDrawerOpenHandler}/>
            <SideDrawer
                show={showSideDrawer}
                closed={sideDrawerCloseHandler}/>
            <main>
                <Hero/>
            </main>
            {/*<Footer/>*/}
        </Fragment>
    )
};

export default Layout;
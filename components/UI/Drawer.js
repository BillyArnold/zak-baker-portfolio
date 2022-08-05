import { useState } from "react"
import DrawerContent from "./DrawerContent";

const Drawer = ( props ) => {
    const [showDrawer, setShowDrawer] = useState(false);
    const classes = " mb-10 transition-all " + props.className;

    return (
        <>
            <div className={classes}>
                <div onClick={() => setShowDrawer(prevState => !prevState)} className="drawer-heading text-3xl  md:text-4xl mb-10 text-shapeshift cursor-pointer">
                    {props.heading} { showDrawer ? '-' : '+' }
                </div>

                { showDrawer ? <DrawerContent content={props.children}/> : null }
                
                <div className="w-full h-1 bg-white transition-all"></div>
            </div>
        </>
    )
}


export default Drawer
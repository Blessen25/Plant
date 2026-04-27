import { useState } from "react";
import "./header.css";

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="header">
                <div className="logoimg">
                    <img src="/Assets/logo/plantyxlogo.jpg" alt="Logo_Image" loading='lazy'/>
                </div>

                <div className="headerdetails">
                    <a className="text-normal">Plants</a>
                    <a className="text-normal">For offices</a>
                    <a className="text-normal">Plants core</a>
                    <a className="text-normal">About</a>
                </div>

                <div className="headericons">
                    <a><i className="fa-solid fa-magnifying-glass icon-md"></i></a>
                    <a><i className="fa-solid fa-circle-user icon-md"></i></a>
                    <a><i className="fa-solid fa-shopping-cart icon-md"></i></a>

                    {/* Only visible at ≤ 991px */}
                    <a className="menu-toggle" onClick={() => setOpen(true)}>
                        <i className="fa-solid fa-bars icon-md"></i>
                    </a>
                </div>
            </div>

            {/* Overlay */}
            <div 
                className={`overlay ${open ? "show" : ""}`} 
                onClick={() => setOpen(false)}
            ></div>

            {/* Sidebar */}
            <div className={`sidebar ${open ? "open" : ""}`}>
                <div className="sidebar-header">
                    <h3 className="fw-600">Menu</h3>

                    {/* X Close Button */}
                    <i 
                        className="fa-solid fa-xmark close-btn icon-md"
                        onClick={() => setOpen(false)}
                    ></i>
                </div>

                <div className="sidebar-links">
                    <a className="text-normal">Plants</a>
                    <a className="text-normal">For offices</a>
                    <a className="text-normal">Plants core</a>
                    <a className="text-normal">About</a>
                </div>
            </div>

        </>
    );
};

export default Header;

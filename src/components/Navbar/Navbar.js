import React, { useState } from "react";
import "./navbar.scss";
import logo from "../../images/logo.svg";
import ButtonNav from "../ButtonNav/ButtonNav";
import Button1 from "../Button1";
import Button2 from "../Button2";
const Navbar = () => {

  const [hover, setHover] = useState(false);
  const [hover_item, setHover_item] = useState();

    const nav_btns = [
        <ButtonNav text="Learning" />,
        <ButtonNav text="Business Solutions" />,
        <ButtonNav text="Resources" />,
    ];

    return (
        <div style={{position: "absolute"}}>
            <header className="navbar">
                <img src={logo} width="120px" alt="" />
                <p>Why INE?</p>
                {nav_btns.map((Btn, i) => (
                    <span 
                      onMouseEnter={()=>setHover(true)}
                      onMouseLeave={()=>setHover(false)}
                    key={i}>{Btn}</span>
                ))}
                {/* <span>
                    <ButtonNav text="Learning" />
                </span>
                <span>
                    <ButtonNav text="Business Solutions" />
                </span>
                <span>
                    <ButtonNav text="Resources" />
                </span> */}
                <p>Pricing and Plans</p>

                <p className="signin">Signin</p>

                <div>
                    <Button1 text="Request Information" />
                    <Button2 text="Get Started Now" />
                </div>
            </header>

            <nav className="dropdown" 
            style={{ transform: !hover&& "translateY(-120%)"

            }}
            >

            </nav>
        </div>
    );
};

export default Navbar;

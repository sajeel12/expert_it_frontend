import React, {useState} from "react";
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

    const dropdown_items = [
        {id: 1, items: [<li className="dropdown_items">Areas</li>,
        <li className="dropdown_items">Areas</li>,]},
    ];

    return (
        <div style={{position: "absolute"}}>
            <header className="navbar  container2 ">
                <div className="">
                    <img src={logo} width="120px" alt="" />
                    <p>Why INE?</p>
                    {nav_btns.map((Btn, i) => (
                        <span
                            onMouseEnter={() => {
                                setHover(true);
                                setHover_item(i);
                            }}
                            onMouseLeave={() => setHover(false)}
                            key={i}
                        >
                            {Btn}
                        </span>
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
                </div>
            </header>

            <nav
                className="dropdown"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{transform: !hover && "translateY(-120%)"}}
            >
                <div className="container2 nav_grid">
                    <li className="dropdown_items">Areas</li>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

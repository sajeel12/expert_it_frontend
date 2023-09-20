import "./data.scss";

import booz_allen_logo from "../images/booz-allen_logo.png";
import cigna_logo from "../images/cigna_logo.png";
import dell_logo from "../images/dell_logo.png";
import germalto_logo from "../images/gemalto_logo.png";
import hp_logo from "../images/hp_logo.png";
import intel_logo from "../images/intel_logo.png";
import microsoft_logo from "../images/microsoft_logo.png";
import paypal_logo from "../images/paypal_logo.png";
import publix_logo from "../images/publix_logo.png";
import sage_logo from "../images/sage_logo.png";
import us_air_force_logo from "../images/us-air-force_logo.png";
import us_army_logo from "../images/us-army_logo.png";
import verizon_logo from "../images/verizon_logo.png";

export const dropdown_items = [
    {
        id: 1,
        items: [
            <li className="dropdown_items">Areas</li>,
            <li className="dropdown_items">Courses</li>,
            <li className="dropdown_items">Instructors</li>,
            <li className="dropdown_items">Learning Paths</li>,
            <li className="dropdown_items">Certificaions</li>,
        ],
    },
    {
        id: 2,
        items: [
            <li className="dropdown_items">Training for Teams</li>,
            <li className="dropdown_items">Assessments for Teams</li>,
            <li className="dropdown_items">schedule a Demo</li>,
        ],
    },
    {
        id: 3,
        items: [
            <li className="dropdown_items">INE Live</li>,
            <li className="dropdown_items">user Community</li>,
            <li className="dropdown_items">News Room</li>,
            <li className="dropdown_items">Blog</li>,
            <li className="dropdown_items">Referral Program</li>,
            <li className="dropdown_items">Help Center</li>,
        ],
    },
];

const handleDragStart = (e) => e.preventDefault();

export const carousel_data1 = [
    <div className="carousel_data1">
        <img src={booz_allen_logo} />
    </div>,
    <div className="carousel_data1">
        <img src={cigna_logo} />
    </div>,
    <div className="carousel_data1">
        <img src={dell_logo} />
    </div>,
    <div className="carousel_data1">
        <img src={germalto_logo} />
    </div>,
    <div className="carousel_data1">
        <img src={hp_logo} />
    </div>,
    <div className="carousel_data1">
        <img src={intel_logo} />
    </div>,
    <div className="carousel_data1">
        <img src={microsoft_logo} />
    </div>,
    <div className="carousel_data1">
        <img src={paypal_logo} />
    </div>,
    <div className="carousel_data1">
        <img src={publix_logo} />
    </div>,
    <div className="carousel_data1">
        <img src={sage_logo} />
    </div>,
    <div className="carousel_data1">
        <img src={us_air_force_logo} />
    </div>,
    <div className="carousel_data1">
        <img src={us_army_logo} />
    </div>,
    <div className="carousel_data1">
        <img src={verizon_logo} />
    </div>,
];

import React, { useState } from "react";
import "./css/Navbar.css";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { orange } from "@mui/material/colors";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div className="Header">
      <div className="Header__info">
        <div className="logo">
          <img src="./images/logo.jpg" alt="logo" />
          <button
            className="mobile-menu-icon"
            onClick={() => setIsMobile(!isMobile)}
          >
            {isMobile ? <CloseIcon /> : <MenuIcon sx={{ fontSize: 50 }} />}
          </button>
        </div>
        <div className="info_container">
          <div className="info">
            <PhoneEnabledIcon
              sx={{
                color: orange[700],
                borderRadius: "50%",
                border: "2px solid orange",
                padding: "8px",
                fontSize: 30,
              }}
            />
            <div className="flex">
              <h4 style={{ color: "rgba(0,0,0,0.6)" }}>Call us</h4>
              <p>+977-987654321</p>
            </div>
          </div>
          <div className="info">
            <LocationOnOutlinedIcon
              sx={{
                color: orange[700],
                borderRadius: "50%",
                border: "2px solid orange",
                padding: "8px",
                fontSize: 30,
              }}
            />
            <div className="flex">
              <h4 style={{ color: "rgba(0,0,0,0.6)" }}>Address</h4>
              <p>Lazimpat, Kathmandu</p>
            </div>
          </div>
          <div className="info">
            <AccessTimeFilledIcon
              sx={{
                color: orange[700],
                borderRadius: "50%",
                border: "2px solid orange",
                padding: "8px",
                fontSize: 30,
              }}
            />
            <div className="flex">
              <h4 style={{ color: "rgba(0,0,0,0.6)" }}>Opening Hours</h4>
              <p>9AM - 5PM Mon-Fri</p>
            </div>
          </div>
        </div>
      </div>
      <nav className="Navbar">
        <ul
          className={isMobile ? "navItem_mobile" : "navItem"}
          onClick={() => setIsMobile(false)}
        >
          <li>
            <Link to="/about" className="link">
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link">
              CONTACT
            </Link>
          </li>
          <li>SHOP</li>
          <li>
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
        </ul>
        <div className={isMobile ? "login__mobile" : "login"}>
          <button
            className="button"
            aria-describedby={id}
            variant="contained"
            onClick={handleClick}
          >
            LOGIN
          </button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Typography sx={{ p: 1 }}>
              <button className="google">
                <img src="/images/google.svg" alt="" />
                Sign in with Google
              </button>
            </Typography>
          </Popover>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

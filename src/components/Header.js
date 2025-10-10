import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  console.log("Header component rendered");
  return (
    <div className="header">
      <div className="logo">
        <img className="logoImage" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              buttonName == "Login"
                ? setButtonName("Logout")
                : setButtonName("Login");
              console.log(buttonName, "button name");
            }}
          >
            {buttonName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

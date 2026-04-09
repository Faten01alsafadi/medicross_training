import  { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { ROUTES } from "../../constants/router";
import logo from "../../assets/images/logo-d.png"
import { FaLongArrowAltRight } from "react-icons/fa";
function NavBar() {
     const [isMenuOpen, setIsMenuOpen] = useState(false); 


  const handleMenuClick = () => {
     setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className="flex p-2  gap-x-10 bg-[var(--color-bg)] ">

        <img src={logo} alt="logo" /> 
      <ul className="hidden sm:flex  gap-30  gap-1.5 ">
        <li>
            <Link to={ROUTES.HOME}>
            home
            </Link>
        </li>
        <li >
          <Link to={ROUTES.ABOUT}>about
          <FaLongArrowAltRight /> 
          </Link>
        </li>
        <li>
          <Link to={ROUTES.DOCTORS}>doctors</Link>
        </li>
      </ul>
      <Button   to="/doctors" children="click" className="bg-amber-400 " variant="primary"/>
      <button onClick={handleMenuClick} className="block sm:hidden">Menu</button>
      {isMenuOpen && (
      <div>
        <ul className="flex flex-col gap-1.5 bg-amber-500">
          <li>
           helo
            </li>
            </ul>
      </div>
    )} 
    </div>
    
  );
}

export default NavBar;

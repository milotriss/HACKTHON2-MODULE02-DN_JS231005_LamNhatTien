import "./header.css";
import { TbSunMoon } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";
const Header = (): JSX.Element => {
  return (
    <header>
      <div className="headerTitle">
        <h1>Reviews TA Bóp Ai !!! ^^</h1>
        <TbSunMoon className="iconThemes" />
      </div>
      <div className="search">
        <IoSearch className="iconSearch"/>
        <input placeholder="Search here ..." type="text" />
      </div>
    </header>
  );
};

export default Header;

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({children}) => {
  return (
    <div className="p-3 flex justify-between items-center bg-blue-500 h-[70px]">
      <Link to={"/"}>
        <img
          src="https://res.cloudinary.com/dgbig0mad/image/upload/v1725393028/shiftly/logo.png"
          alt="shiftly"
          width={100}
        />
      </Link>

      {children}
    </div>
  );
};

Navbar.propTypes = {
  children: PropTypes.element
}

export default Navbar;

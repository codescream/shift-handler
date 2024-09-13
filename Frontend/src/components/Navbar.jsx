import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="p-3 flex justify-between items-center bg-blue-500 h-[70px]">
      <Link to={"/"}>
        <img
          src="https://res.cloudinary.com/dgbig0mad/image/upload/v1725393028/shiftly/logo.png"
          alt="shiftly"
          width={100}
        />
      </Link>

      <Link to={"/login"}>
        <Button
          variant="outlined"
          sx={{
            backgroundColor: "black",
            "&:hover": {
              color: "white",
            }
          }}
        >
          Login
        </Button>
      </Link>
    </div>
  );
};

export default Navbar;

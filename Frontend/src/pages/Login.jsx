import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="body">
      <img
        src="https://res.cloudinary.com/dgbig0mad/image/upload/v1726254707/shiftly/brand.png"
        alt="brand"
        className=" w-[450px] md:w-[550px]"
      />
      <form onSubmit={() => {}} className="flex flex-col gap-2">
        <TextField name="username" variant="outlined" label="username/email" />
        <TextField
          name="password"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          label="password"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    // onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
        <Button
          variant="outlined"
          type="submit"
          sx={{
            width: "100%",
            "&:hover": {
              color: "white",
            },
          }}
        >
          Submit
        </Button>
        <Link to={"/reset-password"} className="text-xs text-center underline">
          Forgot Password
        </Link>
      </form>
    </div>
  );
};

export default Login;

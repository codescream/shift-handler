import { Button } from "@mui/material"
import { Link } from "react-router-dom"

const LandingPage = () => {
  return (
      <div className="body !flex-col md:!flex-row">
        <img src="https://res.cloudinary.com/dgbig0mad/image/upload/v1726254707/shiftly/brand.png" alt="brand"
        className="w-[450px] md:w-[550px]"
        />
        <div className="flex flex-col gap-2">
          <p className="flex flex-col">
            Empowering Caregivers
            <span className="text-blue-500">
              Delivering Compassion <span className="text-white">with</span> Every Click
            </span>
          </p>
          <Link to={"/"}>
            <Button variant="outlined"
              sx={{
              width: "100%",
                "&:hover": {
                  color: "white",
                }
              }}
            >Get Started</Button>
          </Link>
        </div>
      </div>
  )
}

export default LandingPage
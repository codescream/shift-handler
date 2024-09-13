import { Button } from "@mui/material"
import { Footer, Navbar } from "../components"
import { Link } from "react-router-dom"

const LandingPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-1 flex flex-col md:flex-row items-center px-6 justify-center gap-10">
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
      <Footer />
    </div>
  )
}

export default LandingPage
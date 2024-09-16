import { Button, TextField } from "@mui/material"

const ResetPassword = () => {
  return (
    <div className="body">
      <img src="https://res.cloudinary.com/dgbig0mad/image/upload/v1726254707/shiftly/brand.png" alt="brand"
        className=" w-[450px] md:w-[550px]"
      />
      <form onSubmit={()=>{}}
        className="flex flex-col gap-2"  
      >
        <TextField 
          name="username"
          variant="outlined"
          label="username/email"
        />
        <Button
          variant="outlined"
          type="submit"
          sx={{
            width: "100%",
              "&:hover": {
                color: "white",
              }
            }}
        >Submit</Button>
      </form>
    </div>
  )
}

export default ResetPassword
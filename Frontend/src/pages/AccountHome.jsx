import { Outlet } from "react-router-dom"
import { AccountOptions, Navbar } from "../components"

const AccountHome = () => {
  return (
    <div className="w-full flex flex-col h-screen gap-4">
      <Navbar>
        <AccountOptions />
      </Navbar>
      <Outlet />
    </div>
  )
}

export default AccountHome
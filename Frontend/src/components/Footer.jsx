import { List, ListItem } from "@mui/material"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="bg-black h-fit p-2 flex items-center">
      <div className="flex items-start justify-between w-full text-sm">
        <div>
          <List>
            Important Links:
            <ListItem>
              <Link to={"/about-us"}>
                About Us
              </Link>
            </ListItem>
            <ListItem>
              Privacy Policy
            </ListItem>
            <ListItem>
              Terms of Service
            </ListItem>
          </List>
        </div>
        <div>
          <List>
            Socials:
            <ListItem>
              <Link to={"/about-us"}>
                Facebook
              </Link>
            </ListItem>
            <ListItem>
              Twitter
            </ListItem>
            <ListItem>
              Instagram
            </ListItem>
          </List>
        </div>
        <div>
          <List>
            Contacts:
            <ListItem>
              <Link to={"mailto:ogilom@gmail.com"}>
                support@shiftly.com
              </Link>
            </ListItem>
            <ListItem>
              <Link to={"tel:+1-514-814-1782"}>
                +1-514-814-1782
              </Link>
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  )
}

export default Footer
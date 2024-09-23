import { useLocation } from "react-router-dom";
import { GoBack } from "../components";
import { Button, Divider } from "@mui/material";
import MyTextField from "../components/MyTextField";

const AccountSettings = () => {
  const location = useLocation();
  const { currentPath } = location.state || {};

  const updatePassword = (e) => {
    e.preventDefault();

    console.log("password updated")
  }

  const logout = () => {
    console.log("logged out");
  }

  return (
    <div className="w-full flex flex-col flex-1 gap-5 items-center">
      <div className="sm:w-full md:w-10/12 flex-1 px-2 flex flex-col items-center gap-4">
        <div className="w-full">
          <GoBack path={currentPath} />
        </div>
        <div className="w-full">
          My Account
          <Divider
            sx={{
              bgcolor: "white",
            }}
          />
          <div className="my-4 flex flex-col gap-4">
            <MyTextField
              label="Username"
              defaultValue={"user1001"}
              className="w-fit"
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
            />
            <div className="flex gap-2">
              <MyTextField
                label="Full Name"
                defaultValue={"Mark Ogilo"}
                slotProps={{
                  input: {
                    readOnly: true,
                  },
                }}
              />
              <MyTextField
                label="Email"
                defaultValue={"ogilom@gmail.com"}
                slotProps={{
                  input: {
                    readOnly: true,
                  },
                }}
              />
              <MyTextField
                label="Phone"
                defaultValue={"+15148141782"}
                slotProps={{
                  input: {
                    readOnly: true,
                  },
                }}
              />
              <MyTextField
                label="Gender"
                defaultValue={"Male"}
                slotProps={{
                  input: {
                    readOnly: true,
                  },
                }}
              />
            </div>
            <div>
              <MyTextField
                label="Address"
                defaultValue={"456 Elm St, Springfield"}
                slotProps={{
                  input: {
                    readOnly: true,
                  },
                }}
              />
            </div>
          </div>
          <Divider
            sx={{
              bgcolor: "white",
            }}
          />
          <div>
            <p className="text-sm">Staff Details</p>
            <div className="my-4 flex flex-col gap-4">
              <MyTextField
                label="Role"
                defaultValue={"User"}
                className="w-fit"
                slotProps={{
                  input: {
                    readOnly: true,
                  },
                }}
              />
              <div className="flex gap-2">
                <MyTextField
                  label="Reporting Manager"
                  defaultValue={"Samson Ryder"}
                  slotProps={{
                    input: {
                      readOnly: true,
                    },
                  }}
                />
                <MyTextField
                  label="Email"
                  defaultValue={"sryder@gmail.com"}
                  slotProps={{
                    input: {
                      readOnly: true,
                    },
                  }}
                />
                <MyTextField
                  label="Phone"
                  defaultValue={"+12262288480"}
                  slotProps={{
                    input: {
                      readOnly: true,
                    },
                  }}
                />
              </div>
              <div>
                <MyTextField
                  label="Office"
                  defaultValue={"404 Birch St, Springfield"}
                  slotProps={{
                    input: {
                      readOnly: true,
                    },
                  }}
                />
              </div>
            </div>
          </div>
          <Divider
            sx={{
              bgcolor: "white",
            }}
          />
          <form onSubmit={updatePassword}>
            <p className="text-sm">Password Update</p>
            <div className="flex gap-2 my-4">
              <MyTextField
                label="Current Password"
                type="password"
                name="curPassword"
              />
              <MyTextField
                label="New Password"
                type="password"
                name="newPassword"
              />
              <MyTextField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
              />
              <Button
                variant="outlined"
                type="submit"
                sx={{
                  bgcolor: "black",
                }}
              >
                Update
              </Button>
            </div>
          </form>
          <Divider
            sx={{
              bgcolor: "white",
              marginY: "10px",
            }}
          />
          <div className="text-right">
            <Button
              variant="outlined"
              onClick={() => logout()}
              sx={{
                bgcolor: "black",
              }}
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;

import { IconButton } from "@mui/material";
import RemoveRedEyeSharpIcon from "@mui/icons-material/RemoveRedEyeSharp";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const curPath = location.pathname;

  const dataToPass = { currentPath: curPath };

  const myShifts = [
    {
      id: 1,
      date_time: "2024-09-17 14:27:26",
      address: "123 Main St, Springfield",
      time_range: "8am - 3pm",
      duration: "7 hours",
      status: "Scheduled",
    },
    {
      id: 2,
      date_time: "2024-09-18 14:27:26",
      address: "456 Elm St, Springfield",
      time_range: "9am - 4pm",
      duration: "7 hours",
      status: "Completed",
    },
    {
      id: 3,
      date_time: "2024-09-19 14:27:26",
      address: "789 Oak St, Springfield",
      time_range: "10am - 5pm",
      duration: "7 hours",
      status: "Pending",
    },
    {
      id: 4,
      date_time: "2024-09-20 14:27:26",
      address: "101 Pine St, Springfield",
      time_range: "11am - 6pm",
      duration: "7 hours",
      status: "Cancelled",
    },
  ];

  const availShifts = [
    {
      id: 5,
      date_time: "2024-09-21 14:27:26",
      address: "202 Maple St, Springfield",
      time_range: "12pm - 7pm",
      duration: "7 hours",
      status: "Open",
    },
    {
      id: 6,
      date_time: "2024-09-22 14:27:26",
      address: "303 Cedar St, Springfield",
      time_range: "1pm - 8pm",
      duration: "7 hours",
      status: "Open",
    },
    {
      id: 7,
      date_time: "2024-09-23 14:27:26",
      address: "404 Birch St, Springfield",
      time_range: "2pm - 9pm",
      duration: "7 hours",
      status: "Open",
    },
  ];

  const ShiftCard = ({ shift, type }) => {
    const color = {
      owned: "bg-red-600",
      avail: "bg-gray-700",
    };

    const owned = type === "avail" ? false : true;
    return (
      <div className="flex h-fit ">
        <div className={`w-[4px] ${color[type]} rounded-l-md`}></div>
        <div className="flex-1 bg-[#a6d5ee] flex items-center justify-between px-3 text-gray-700">
          <p className="text-center flex flex-col leading-4">
            {dayjs(shift.date_time).format("ddd")}
            <span>{dayjs(shift.date_time).format("DD")}</span>
          </p>
          <div className="text-center">
            <p>{shift.address}</p>
            <p>{shift.time_range}</p>
            <p>Duration: {shift.duration}</p>
          </div>
          <p>{shift.status}</p>
          <Link to={`shifts/${shift.id}`} state={{...dataToPass, owned}}>
            <IconButton
              aria-label="view shift"
              sx={{
                color: "#374151",
              }}
            >
              <RemoveRedEyeSharpIcon />
            </IconButton>
          </Link>
        </div>
      </div>
    );
  };

  ShiftCard.propTypes = {
    shift: PropTypes.object,
    type: PropTypes.string
  }

  return (
    <div className="w-screen flex flex-col gap-5 items-center">
      <div className="flex flex-col gap-5 w-4/5">
        <div className="flex flex-col gap-2 h-fit">
          <p>My Shifts</p>
          {myShifts.map((shift) => (
            <ShiftCard key={shift.id} shift={shift} type={"owned"} />
          ))}
        </div>

        <div className="flex flex-col gap-2 h-fit">
          <p>Biddable Shifts</p>
          {availShifts.map((shift) => (
            <ShiftCard key={shift.id} shift={shift} type={"avail"} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home
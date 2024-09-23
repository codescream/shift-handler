import { Chip } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect, useState } from "react";

const GoBack = ({ path }) => {
  const location = useLocation();

  const [url, setUrl] = useState(null);

  useEffect(() => {
    if (location.pathname != path) setUrl(path);
  }, [path, location.pathname]);

  return (
    <div className="w-full">
      <Link to={url ? url : "/"}>
        <Chip
          icon={<ArrowBackIcon />}
          label="Back"
          color="primary"
          variant="outlined"
          clickable
          sx={{
            "&: hover": {
              color: "white",
            },
          }}
        />
      </Link>
    </div>
  );
};

GoBack.propTypes = {
  path: PropTypes.string,
};

export default GoBack;

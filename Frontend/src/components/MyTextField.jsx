import { TextField } from "@mui/material";
import PropTypes from "prop-types"

const MyTextField = (props) => {
  return <TextField {...props} variant="outlined" focused size="small" />;
};

MyTextField.propTypes = {
  props: PropTypes.object
}

export default MyTextField;

import { Input } from "./Input";
import PropTypes from "prop-types";

Input.propTypes = {
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
  style: PropTypes.object,
};

Input.defaultProps = {
  error: false,
  disabled: false,
  placeholder: null,
  readOnly: false,
};

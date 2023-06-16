import { forwardRef, memo } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const InputField = forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <div className="form-group pt-3">
      <label>{label}</label>
      <input
        type="text"
        className={clsx("form-control form-control-lg", error && "is-invalid")}
        autoComplete="off"
        maxLength={50}
        ref={ref}
        {...rest}
      />
      {error && (
        <small className="form-text text-danger">{error?.message}</small>
      )}
    </div>
  );
});

InputField.propTypes = {
  label: PropTypes.string,
  error: PropTypes.any,
};

export default memo(InputField);

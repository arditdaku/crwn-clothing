import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ label, value, formHook, ...otherProps }) => (
  <div className="group">
    <input className="form-input" {...formHook} {...otherProps} />
    {label ? (
      <label className={`${value?.length ? "shrink" : ""} form-input-label`}>
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;

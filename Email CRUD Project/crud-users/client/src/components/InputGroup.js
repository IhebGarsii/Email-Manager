import classnames from "classnames";
const InputGroup = ({ label, name, type, onChangeHandler, errors, }) => {
  return (
    <div className="mb-3">
      <label htmlFor={label} className="form-label">
        Email address
      </label>
      <input
        type={type}
        className={classnames("form-control", { "is-invalid": errors })}
        name={name}
        onChange={onChangeHandler}
      />
      {errors && <div className="invalid-feedback">{errors}</div>}
    </div>
  );
};

export default InputGroup;

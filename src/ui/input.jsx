const Input = ({ label, type, state, setState }) => {
  return (
    <div className="form-floating mb-3">
      <input
        type={type}
        className="form-control"
        placeholder={label}
        value={state}
        onChange={(event) => setState(event.target.value)}
      />
      <label htmlFor="floatingInput">{label}</label>
    </div>
  );
};

export default Input;

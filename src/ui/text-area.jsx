const TextArea = ({ height = "100px", label, state, setState }) => {
  return (
    <div className="form-floating mt-3">
      <textarea
        className="form-control"
        placeholder={label}
        id="floatingTextarea2"
        style={{ height }}
        value={state}
        onChange={(event) => setState(event.target.value)}
      ></textarea>
      <label htmlFor="floatingTextarea2">{label}</label>
    </div>
  );
};

export default TextArea;

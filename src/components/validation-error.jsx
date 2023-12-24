import { useCallback } from "react";
import { useSelector } from "react-redux";

const ValidationError = () => {
  const { error } = useSelector((state) => state.auth);

  const errorMessage = useCallback(() => {
    return Object.keys(error).map((name) => {
      const msg = error[name].join(", ");
      return `${name} - ${msg}`;
    });
  }, [error]);

  return (
    error !== null &&
    errorMessage().map((error) => (
      <div
        className="alert alert-danger p-0 mb-3 text-start border-0"
        role="alert"
        key={error}
      >
        {error}
      </div>
    ))
  );
};

export default ValidationError;

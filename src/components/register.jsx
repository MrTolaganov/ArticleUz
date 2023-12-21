import { useState } from "react";
import { logo } from "../constants";
import { Input } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import { registerUserStart } from "../slice/auth";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const registerHandler = (event) => {
    event.preventDefault();
    dispatch(registerUserStart());
  };

  return (
    <div className="w-25 mx-auto text-lg-center">
      <main className="form-signin w-100 m-auto">
        <form>
          <img src={logo} alt="" width={100} height={100} />
          <h1 className="h3 mb-4 fw-normal">Please register </h1>
          <Input
            label={"Username"}
            type={"text"}
            state={name}
            setState={setName}
          />
          <Input
            label={"Email address"}
            type={"email"}
            state={email}
            setState={setEmail}
          />
          <Input
            label={"Password"}
            type={"password"}
            state={password}
            setState={setPassword}
          />
          <button
            className="btn btn-primary w-100 py-2 mt-4"
            type="submit"
            onClick={registerHandler}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Register"}
          </button>
        </form>
      </main>
    </div>
  );
};

export default Register;

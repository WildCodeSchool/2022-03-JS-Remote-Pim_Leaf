/* eslint-disable import/no-unresolved */
import { useState } from "react";

import Avatar from "@assets/avatar-login.png";
import Padlock from "@assets/padlock-login.png";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.warn(email);
  console.warn(password);
  return (
    <div>
      <form className="flex flex-col items-center">
        <label htmlFor="login">
          <div className="flex flex-row items-center">
            <div className="w-9 mb-8">
              <img src={Avatar} alt="avatar" />
            </div>
            <input
              className="bg-white bg-opacity-0 border-b border-b-white mb-8 text-white"
              id="email"
              type="text"
              name="email"
              placeholder=""
              onChange={(event) => {
                const input = event.target;
                setEmail(input.value);
              }}
            />
          </div>
          <div className="flex flex-row items-center">
            <div className="w-9">
              <img src={Padlock} alt="padlock" />
            </div>
            <input
              className="bg-white bg-opacity-0  border-b border-b-white mt-8 mb-8 text-white"
              id="password"
              type="text"
              name="password"
              placeholder=""
              onChange={(event) => {
                const input = event.target;
                setPassword(input.value);
              }}
            />
          </div>
        </label>
        <input
          type="submit"
          value="login"
          className="py-2 w-28 text-center text-white text-base bg-darkBlue hover:bg-opacity-90 rounded-full mt-12"
        />
      </form>
    </div>
  );
}

export default LoginForm;

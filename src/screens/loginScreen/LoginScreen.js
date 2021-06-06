import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../redux/actions/auth.action";

import "./loginScreen.scss";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.auth.accessToken);

  const handleLogin = () => {
    dispatch(login());
  };

  const history = useHistory();

  useEffect(() => {
    if (accessToken) {
      history.push("/");
    }
  }, [accessToken, history]);

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://www.pngjoy.com/pngl/301/5700683_youtube-circle-icon-youtube-logo-high-quality-hd.png"
          alt=""
        />
        <button onClick={handleLogin}>
          <img
            src="https://freepngimg.com/download/google/67060-play-photos-search-google-account-png-file-hd.png"
            alt=""
          />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;

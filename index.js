import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { handleAuth } from "./login/authHandler";
import LoadingPage from "./misc/LoadingPage";
import AuthContext from "./login/authContext";
import MainPage from "./main/MainPage";

import "./misc/styles.css";

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [reqDone, setReqDone] = useState(false);

  useEffect(() => {
    const userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
    if (
      typeof userInfo === "object" &&
      userInfo !== null &&
      "Token" in userInfo
    ) {
      handleAuth(userInfo.Token).then((res) => {
        if (res.status === 200) {
          // Good token
          setUserInfo(res.data);
        } else if (res.status === 401) {
          // Bad token
          window.localStorage.removeItem("userInfo");
        }
        setReqDone(true);
      });
    }
  }, [setUserInfo]);
  return (
    <AuthContext.Provider value={userInfo}>
      {reqDone && <MainPage></MainPage>}
      {!reqDone && <LoadingPage></LoadingPage>}
    </AuthContext.Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
  document.getElementById("root")
);

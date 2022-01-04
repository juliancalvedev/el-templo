import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Toast from "./components/Toast/Toast";

import i18n from "./i18n-lang-conf";
import { checkLoggedUserAction } from "./redux/auth";
import { cleanErrorAction } from "./redux/error";
import RouterApp from "./Router/RouterApp";
import "./styles/variables.scss";

function App() {
  const { isError, message } = useSelector((store) => store.error);
  //Integrates i18n to the whole App.
  i18n.options.interpolation.defaultVariables = {
    companyName: "El Templo",
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkLoggedUserAction());
  }, []);

  useEffect(() => {
    if (isError) {
      setTimeout(() => {
        dispatch(cleanErrorAction());
      }, 2500);
    }
  }, [isError]);

  return (
    <div className="App container-fluid">
      {isError && <Toast message={message} />}
      <RouterApp />
    </div>
  );
}

export default App;

import "./Login.scss";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction, saveEmailAction } from "../../redux/auth";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../constants/paths";
import MainContainer from "../../components/MainContainer/MainContainer";
import { login } from "../../services/auth";
import useFetch from "../../hooks/useFetch";
import Text from "../../components/Text/Text";
import Alert from "./Alert/Alert";

const Login = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  
  const [password, setPassword] = useState("");

  const [showAlert, setShowAlert] = useState(false);

  const [inputType, setInputType] = useState("password");

  const callback = () => {
    if (data) {
      if (data.token) {
        const callback = () => navigate(`/${PATHS.LOGIN}`);
        dispatch(loginAction({ data: { token: data?.token, email }, callback }));
      }
      else if (!data.emailIsVerified) {
        dispatch(saveEmailAction({ email }));
        navigate(`/${PATHS.ENABLED_VERIFIED}`);
      }
      else if (!data.enabled) {
        setShowAlert(true);
      }
    }
  };

  const [data, error, apiCall] = useFetch({
    service: () => login({ email, password }),
    globalLoader: true,
    callback
  });

  const toRegister = () => navigate(`/${PATHS.REGISTER}`);
  const toForgottenPassword = () => navigate(`/${PATHS.FORGOTTEN_PASSWORD}`);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onCloseAlert = () => {
    setShowAlert(false);
  }



  const onClickIcon = () => {
    if (inputType === "password") {
      setInputType("text");
    }
    if (inputType === "text") {
      setInputType("password");
    }
  };

  return (
    <MainContainer color={2} back>
      <div className="login-container col-12 h-100">
        <div className="login-container login-container__opacity d-flex justify-content-center col-12 h-100 pt-2">
          <div className="col-11 d-flex flex-column pt-5 mt-4">
            <Text justify="start" size={4} color={2} bold text={t("auth.login.title")} />
            <Text justify="start" color={2} text={t("auth.login.subtitle")} />

            <div className="col-12 mb-5 pt-4 mt-5">
              <Input
                value={email}
                onChange={handleChangeEmail}
                type="email"
                placeholder={t("auth.login.emailPlaceholder")}
                transparent
              />

              <Input
                icon="eye"
                value={password}
                onChange={handleChangePassword}
                type={inputType}
                placeholder={t("auth.login.passwordPlaceholder")}
                onClickIcon={onClickIcon}
                transparent
                feedback={t('global.errors.validPassword')}
              />

              <Button onClick={apiCall} text={t("auth.login.btnLogin")} />
              <div className="col-12 d-flex justify-content-end  ">
                <Text
                  color={3}
                  size={1}
                  underline
                  onClick={toForgottenPassword}
                  text={t("auth.login.recovery")}
                />
              </div>
            </div>
            <div className="d-flex flex-colum justify-content-center align-items-center mt-5 pt-5 h-20 ">
              <Text size={1} color={2} text={t("auth.login.register1")} />
              <Text
                size={1}
                color={3}
                underline
                onClick={toRegister}
                text={t("auth.login.register2")}
                className='p-1'
              />
            </div>
          </div>
        </div>
      </div>
      <Alert show={showAlert} onClose={onCloseAlert} />
    </MainContainer>
  );
};

export default Login;

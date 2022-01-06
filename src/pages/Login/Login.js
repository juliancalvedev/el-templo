import "./Login.scss";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../../redux/auth";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../constants/paths";
import MainContainer from "../../components/MainContainer/MainContainer";
import InputIcon from "../../components/InputIcon/InputIcon";
import { login } from "../../services/auth";
import useFetch from "../../hooks/useFetch";
import Text from "../../components/Text/Text";

const Login = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [inputType, setInputType] = useState("password");

  const [data, error, apiCall] = useFetch({
    service: () => login({ email, password }),
    globalLoader: true
  });

  const callback = () => navigate(`/${PATHS.ENABLED_VERIFIED}`);
  const toRegister = () => navigate(`/${PATHS.REGISTER}`);
  const toForgottenPassword = () => navigate(`/${PATHS.FORGOTTEN_PASSWORD}`);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (data) {
      dispatch(loginAction({ data: {token: data?.token, email}, callback }));
    }
  }, [data]);

  const onClickIcon = () => {
    if (inputType === "password") {
      setInputType("text");
    }
    if (inputType === "text") {
      setInputType("password");
    }
  };

  return (
    <MainContainer topbar color={2} back>
      <div className="login-container col-12">
        <div className="login-container__opacity d-flex justify-content-center col-12 pt-2">
          <div className="col-11 d-flex flex-column ">
            <div className="mt-5 pt-4 col-12">
              <Text size={4} color={2} bold text={t("auth.login.title")} />
            </div>
              <Text color={2} text={t("auth.login.subtitle")} />

            <div className="col-12 mb-5 pt-4 mt-5">
              <form>
                <Input
                  className="login__input col-12 mb-2 py-2 "
                  value={email}
                  handleChange={handleChangeEmail}
                  type="email"
                  placeholder={t("auth.login.emailPlaceholder")}
                />

                <InputIcon
                  iconType="eye"
                  value={password}
                  onChange={handleChangePassword}
                  type={inputType}
                  placeholder={t("auth.login.passwordPlaceholder")}
                  onClickIcon={onClickIcon}
                />

                <div className="mt-4">
                  <Button onClick={apiCall} title={t("auth.login.btnLogin")} />
                </div>
                <div className="col-12 d-flex justify-content-end  ">
                  <Text
                    color={3}
                    size={1}
                    underline
                    onClick={toForgottenPassword}
                    text={t("auth.login.recovery")}
                  />
                </div>
              </form>
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
    </MainContainer>
  );
};

export default Login;

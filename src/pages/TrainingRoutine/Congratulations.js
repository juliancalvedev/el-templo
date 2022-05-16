import { useDispatch } from "react-redux";
import DivBottom from "../../components/DivBottom/DivBottom";
import DivTop from "../../components/DivTop/DivTop";
import MainContainer from "../../components/MainContainer/MainContainer"
import { getDashboard, getUserInfo } from "../../services/user"
import Text from "../../components/Text/Text";
import Tag from "../../components/Tag/Tag";
import useFetch from "../../hooks/useFetch"
import { langUpperCased } from "../../utils/localStorage";
import { getUserInfoAction } from "../../redux/user";
import { useTranslation } from "react-i18next";
import Button from "../../components/Button/Button";

const Congratulations = () => {

    const dispatch = useDispatch();
    const { t } = useTranslation();
    const lang = langUpperCased();

    const [infoData] = useFetch({
        service: () => getUserInfo(),
        callNow: true,
        globalLoader: true,
        callback: () => dispatch(getUserInfoAction(infoData?.user))
    })

    const [data] = useFetch({
        service: () => getDashboard(),
        callNow: true,
        globalLoader: true
    });

    return (
        <MainContainer
            back
            color={2}
            bg={1}
            text={t('user.training.index')}
            navbar
            col={12}
            scroll
            calc
        >
            <DivTop>
                <Text text='Felicitaciones!' font={2} size={5} />
                <Text text='Terminaste tu entrenamiento diario' color={6} size={5} />
                <Text text='Hoy trabajaste' />
                <div className="d-flex justify-content-evenly flex-wrap">
                    {data?.muscles?.map(tag => <Tag type={2} color={1} text={tag[`title${lang}`]} />)}
                </div>
            </DivTop>
            <DivBottom>
                <Button text='Siguiente' size={2} />
            </DivBottom>

        </MainContainer>
    )
}

export default Congratulations
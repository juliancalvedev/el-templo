import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/Button/Button'
import MainContainer from '../../../components/MainContainer/MainContainer'
import Text from '../../../components/Text/Text'
import { PATHS } from '../../../constants/paths'
import useFetch from '../../../hooks/useFetch'
import { replaceRouteName } from '../../../redux/route'
import { getLevels } from '../../../services/admin'

const AdminLevels = () => {
    const navigate = useNavigate();

    const { t } = useTranslation();

    const dispatch = useDispatch();

    const [levelsResponse, levelsError, apiCallLevels] = useFetch({
        service: () => getLevels(),
        globalLoader: true,
        callNow: true,
        callback: () => { },
    });

    const navigateRoutineBLocks = (data) => {
        dispatch(replaceRouteName(`${t('admin.routines.level')}: ${data?.level}`));
        navigate(`/${PATHS.ADMIN_TRAINING_LEVEL.replace(':level', data?.level)}`);
    }

    useEffect(() => {
        dispatch(replaceRouteName(t('admin.adminLevels.index')));
    }, [])

    return (
        <MainContainer scroll>
            <div
                className='col-12 d-flex flex-column align-items-center'
            >
                <div className='mt-3'>
                    <Text
                        text={t('admin.adminLevels.selectLevel')}
                        size={4}
                    />
                </div>
                <div className='col-12 d-flex flex-column align-items-center mt-3'>
                    <Button
                        text={t('admin.nivelation.index')}
                        size={1}
                    />
                </div>
                <div className='col-12 d-flex flex-row flex-wrap justify-content-center mt-2'>
                    {levelsResponse?.response
                        .sort((a, b) => a.level - b.level)
                        .filter(e => e.level !== 0)
                        .map(element => {
                            return (
                                <div className='m-3' key={element?._id}>
                                    <Button
                                        text={element?.level}
                                        size={1}
                                        circle
                                        onClick={() => navigateRoutineBLocks(element)}
                                    />
                                </div>
                            )
                        })}
                </div>
            </div>
        </MainContainer>
    )
}

export default AdminLevels
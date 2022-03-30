import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/Button/Button'
import MainContainer from '../../../components/MainContainer/MainContainer'
import Text from '../../../components/Text/Text'
import { PATHS } from '../../../constants/paths'
import useFetch from '../../../hooks/useFetch'
import { getLevels } from '../../../services/admin'

const AdminLevels = () => {
    const navigate = useNavigate()

    const [levelsResponse, levelsError, apiCallLevels] = useFetch({
        service: () => getLevels(),
        globalLoader: true,
        callNow: true,
        callback: () => { },
    });

    const navigateToLevel = (level) => {
        navigate(`/${PATHS.ADMIN_TRAINING_LEVEL.replace(':level', level)}`)
    }

    return (
        <MainContainer back color={2} bg={1} col={12} text='Niveles' navbar scroll>
            <div
                className='col-12 d-flex flex-column align-items-center'
            // style={{ backgroundColor: 'red' }}
            >
                <div className='mt-3'>
                    <Text
                        text={'Seleccione un nivel'}
                        size={4}
                    />
                </div>
                <div className='col-12 d-flex flex-column align-items-center mt-3'>
                    <Button
                        text={'Nivelación'}
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
                                        onClick={() => navigateToLevel(element?.level)}
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
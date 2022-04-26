import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../../../../components/Button/Button'
import MainContainer from '../../../../components/MainContainer/MainContainer'
import Text from '../../../../components/Text/Text'
import { PATHS } from '../../../../constants/paths'
import useFetch from '../../../../hooks/useFetch'
import { getLevelByNumber } from '../../../../services/admin'

const AdminTrainingBlocks = () => {
    const navigate = useNavigate()
    const { level } = useParams('level')

    const [routineBlocks, setRoutineBlocks] = useState()

    const [routineBlockResponse, routineBlockError, apiCallRoutineBlock] = useFetch({
        service: () => getLevelByNumber(level),
        globalLoader: true,
        callNow: true,
        callback: () => {
            setRoutineBlocks({
                block1: routineBlockResponse?.response?.level?.routineBlock1,
                block2: routineBlockResponse?.response?.level?.routineBlock2,
                block3: routineBlockResponse?.response?.level?.routineBlock3
            })
        },
    });

    const levelsOfBlocks = (routineBlock, blockNumber) => {
        let auxArr = []
        for (let i = 1; i <= 8; i++) {
            auxArr.push((
                <div className='m-2' key={i}>
                    <Button
                        text={i}
                        type={1
                            // routineBlock === undefined ||
                            // routineBlock && routineBlock[`day${i}`] === undefined ?
                            // 5
                            // :
                            // 6
                        }
                        circle
                        onClick={() => routineBlock ?
                            onClickDayButton({
                                trainingDayId: routineBlock[`day${i}`],
                                trainingBlock: blockNumber,
                                trainingDay: i
                            })
                            :
                            console.error('ERROR: Selected day has not assigned ID.')}
                    />
                </div>
            ))
        }
        return auxArr
    }

    const onClickDayButton = ({ trainingDayId, trainingBlock, trainingDay }) => {
        navigate(`/${PATHS.ADMIN_TRAINING}`,
            {
                state: {
                    trainingDayId: trainingDayId,
                    trainingLevel: level,
                    trainingBlock: trainingBlock,
                    trainingDay: trainingDay
                }
            })
    }

    return (
        <MainContainer back color={2} bg={1} col={12} text={`Bloques de Nivel ${level}`} navbar scroll>
            <div
                className='col-12 d-flex flex-column align-items-center'
            >
                <div className='mt-3'>
                    <Text
                        text={'Seleccione un día'}
                        size={4}
                    />
                </div>
                <div
                    className='my-3 col-12 d-flex flex-row justify-content-around'
                >
                    <div className='d-flex flex-column text-center'>
                        <Text text={'Bloque 1'} size={4} />
                        {routineBlocks && levelsOfBlocks(routineBlocks?.block1, 1)}
                    </div>
                    <div className='d-flex flex-column text-center'>

                        <Text text={'Bloque 2'} size={4} />
                        {routineBlocks && levelsOfBlocks(routineBlocks?.block2, 2)}
                    </div>
                    <div className='d-flex flex-column text-center'>
                        <Text text={'Bloque 3'} size={4} />
                        {routineBlocks && levelsOfBlocks(routineBlocks?.block3, 3)}
                    </div>
                </div>
            </div>
        </MainContainer>
    )
}

export default AdminTrainingBlocks
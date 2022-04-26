import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import useFetch from '../../../../hooks/useFetch'
import { getTrainingById } from '../../../../services/admin'

const AdminTraining = () => {
    const navigate = useNavigate()
    const { trainingDayId } = useLocation().state

    const [trainingResponse, trainingError, apiCallTraining] = useFetch({
        service: () => getTrainingById({ id: trainingDayId }),
        globalLoader: true,
        callNow: true,
        callback: () => { },
    });

    console.log(trainingResponse)

    return (
        <div>Pag de Admin Trainigns</div>
    )
}

export default AdminTraining
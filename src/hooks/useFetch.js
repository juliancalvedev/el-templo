import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { cleanErrorAction, setErrorAction } from '../redux/error';


const useFetch = (service) => {

    const dispatch = useDispatch();

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const apiCall = async () => {
        const { data, error } = await service();
        setData(data);
        setError(error);
    }

    useEffect(() => {
        if(data){
            dispatch(cleanErrorAction())
        } else if(error){
            dispatch(setErrorAction(error))
        }
    }, [error, data]);

    return [data, error, apiCall]
}

export default useFetch;

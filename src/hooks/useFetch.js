import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { cleanErrorAction, setErrorAction } from '../redux/error';


const useFetch = ({service}) => {

    const dispatch = useDispatch();

    const [resp, setResp] = useState(null);
    const [error, setError] = useState(null);

    const apiCall = async () => {
        try{

            const response = await service();
            const { data, problem } = response?.data;
            console.log('problem', data);
            setResp(data);
            setError(problem);
        } catch( err ){
            

            console.log('err', err.message);
        }
    }

    useEffect(() => {
        if(resp){
            dispatch(cleanErrorAction())
        } else if(error){
            dispatch(setErrorAction(error))
        }
    }, [error, resp]);

    return [resp, error, apiCall]
}

export default useFetch;

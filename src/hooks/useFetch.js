import { useState } from 'react'

const useFetch = (service) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const apiCall = async () => {
        const { data, error } = await service();
        setData(data);
        setError(error);
    }

    return [data, error, apiCall]
}

export default useFetch;

import { useState, useEffect } from "react";

const useApi = (url) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)

    const fetchApi = () => {
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(json => {
                setTimeout(() => {
                    setLoading(false)
                    setData(json)
                }, 1000);
            })
    };

    useEffect(() => {
        fetchApi();
        return (() => { })
    }, []);

    return { loading, data };
}

export default useApi;

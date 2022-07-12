import React from "react";
import useApi from "./useApi";

const CustomHookView = () => {
    const { loading, data } = useApi('https://jsonplaceholder.typicode.com/users')

    return (<>
        {loading ? <h2>Loading data...</h2> :
            <div>
                <h1>Data fetched successfully.</h1>
                {JSON.stringify(data)}
            </div>}</>);
}

export default CustomHookView;

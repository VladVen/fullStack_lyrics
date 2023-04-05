import React from 'react';
import {Button} from "@mui/material";
import {useRouter} from "next/router";

const ErrorPath = () => {
    const navigation = useRouter()
    return (
        <div className={'error'}>
            <h3 >
                Sorry, seems like this is incorrect path
            </h3>
            <Button onClick={() => navigation.back()}>Go back</Button>
        </div>
    );
};

export default ErrorPath;
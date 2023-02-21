import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Button = () => {
    const params = useParams();
    const { id } = params;
    const [readdata, setReadata] = useState({});
    useEffect(() => {
        getDatabyId();
    });
    const getDatabyId = async (data) => {
        await axios.get('https://timenews.co.in/wp-json/wp/v2/posts/' + id, data).then((res) => {
            console.log(res.data);
            setReadata(res.data);
        });
    };
    return (
        <>
            <p className="text-center fw-bold fs-1" dangerouslySetInnerHTML={{ __html: readdata?.title?.rendered }}></p>
            <p className="text-center" dangerouslySetInnerHTML={{ __html: readdata?.content?.rendered }}></p>;
        </>
    );
};

export default Button;

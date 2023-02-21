import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// import { Carousel } from 'react-bootstrap';

export default function Beauty() {
    useEffect(() => {
        getdata();
    }, []);

    const [apiData, setApiData] = useState([]);

    const getdata = async () => {
        await axios.get('https://timenews.co.in/wp-json/wp/v2/posts?categories=14').then((response) => {
            setApiData(response.data);
            // console.log(response.data);
        });
    };

    return (
        <>
            {apiData.map((item) => (
                // <div className="row">
                <div className="container">
                    <div className=" mb-3" id="card1">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={item.yoast_head_json.og_image[0].url} className="img1" id="img11" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title mt-3 fw-bold">{item.yoast_head_json.title}</h5>
                                    <p className="card-text mt-4" dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}></p>
                                    <Link to={`/button/${item.id}`}>
                                        <button className="btn1">Read more</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

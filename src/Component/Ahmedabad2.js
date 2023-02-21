import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import "./abad.css"
// import { Carousel } from 'react-bootstrap';

export default function Ahmedabad2() {
    useEffect(() => {
        getdata();
    }, []);

    const [apiData, setApiData] = useState([]);

    const getdata = async () => {
        await axios.get('https://timenews.co.in/wp-json/wp/v2/posts?categories=3&page=2').then((response) => {
            setApiData(response.data);
            // console.log(response.data);
        });
    };

    // const firstSlider = apiData.filter(ite => ite.yoast_head_json.schema['@graph'][5].keyword.hasOwnProperty('#ahmedabad'));

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
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <Link to="/ahmedabad" className="page-link">
                            1
                        </Link>
                    </li>
                    <li class="page-item">
                        <Link to="/ahmedabad2" className="page-link">
                            2
                        </Link>
                    </li>
                    <li class="page-item">
                        <Link to="/ahmedabad3" className="page-link">
                            3
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

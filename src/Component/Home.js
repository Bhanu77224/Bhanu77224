import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
// import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './home.css'
import { Carousel } from 'react-bootstrap';
// const ahmedabadapi = 'https://timenews.co.in/wp-json/wp/v2/posts?categories?ahmedabad';
const homeapi = 'https://timenews.co.in/wp-json/wp/v2/posts';
function Home() {
    useEffect(() => {
        getdata();
    }, []);

    const [apiData, setApiData] = useState([]);

    const getdata = async () => {
        await axios.get(homeapi).then((response) => {
            setApiData(response.data);
        });
    };
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    // };

    const firstSlider = apiData.slice(0, 5);
    // console.log(firstSlider.length);
    // console.log(firstSlider);
    // const secondSlider = apiData.slice(5, 10);

    const myStyle = (item) => ({
        backgroundImage: `url('${item.yoast_head_json.og_image[0].url}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // backgroundSize: "length",
        // backgroundSize: "contain",
        color: 'white',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        fontWeight: '800',
        alignText: 'center',
    });

    return (
        <>
            <div className='mt-5' style={{display:"flex",justifyContent:"center"}}>
                <Carousel>
                    {firstSlider.map((item) => (
                        <Carousel.Item>
                            <div className="mr-2 ml-2 mb-3 ">
                                <div style={myStyle(item)} className=" text-center mx-auto img-class">
                                    {item.title.rendered}
                                </div>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
                {/* <Carousel.Item>
                        <div className="row">
                            {secondSlider.map((item) => (
                                <div className="col">
                                    <div style={myStyle(item)}>{item.title.rendered}</div>
                                </div>
                            ))}
                        </div>
                    </Carousel.Item> */}

                {/* <Slider {...settings}>
                    {apiData.map((item) => (
                        <div className="text-center">
                            <div style={myStyle(item)} className="pt-5 pl-2 pr-2"></div>
                            {/* <img className='img1' src={item.yoast_head_json.og_image[0].url} alt="" /> 
                            <h3 className="text1">{item.title.rendered}</h3>
                        </div>
                    ))}
                </Slider> */}
            </div>
        </>
    );
}
export default Home;

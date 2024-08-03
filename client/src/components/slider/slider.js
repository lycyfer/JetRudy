import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css';
import phpImg from "../../assets/php.jpg";
import allImg from "../../assets/sandpack.jpg";
import rustImg from "../../assets/rust.jpg";

const SliderComponent = () => {
    const slidesData = [
        {
            id: 1,
            title: 'Slide 1',
            content: 'This is the first slide',
            backgroundImg: phpImg
        },
        {
            id: 2,
            title: 'Slide 2',
            content: 'This is the second slide',
            backgroundImg: allImg
        },
        {
            id: 3,
            title: 'Slide 3',
            content: 'This is the third slide',
            backgroundImg: rustImg
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        centerPadding: '20px'
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {slidesData.map(slide => (
                    <div key={slide.id} className="slide" style={{ backgroundImage: `url(${slide.backgroundImg})` }}>
                        <h2>{slide.title}</h2>
                        <p>{slide.content}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SliderComponent;
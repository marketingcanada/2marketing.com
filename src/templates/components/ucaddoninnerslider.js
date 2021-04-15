import Img from "gatsby-image";
import React from 'react';
import { isMobile } from 'react-device-detect';
import Carousel from "react-multi-carousel";
import styled from 'styled-components';
import mask from "./../../images/dotted-mask.svg";

const InnerSlider = styled.div`
@media only screen and (min-width: 768px) {
    & .react-multiple-carousel__arrow, & .react-multiple-carousel__arrow:hover{
        top: unset;
        bottom: 5%;
    }
    & .react-multiple-carousel__arrow::before{
        color: #44A754;
    }
    & .react-multiple-carousel__arrow:after {
        font-size: 12px; 
        color: #44A754; 
        display: block;
        font-family: revicons;
        text-align: center;
        z-index: 2;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
    & .react-multiple-carousel__arrow--left:after {
        content: "\\E824";
        left: 22%;
    }
    & .react-multiple-carousel__arrow--right:after {
        content: "\\E825";
        right: 22%;
    }
    & .react-multiple-carousel__arrow--left{
        right: unset;
        left: calc(4% + 1px);
    }
    & .react-multiple-carousel__arrow--right{
        right: calc(4% + 1px);
    }
}
    & .react-multi-carousel-item--active .inner-slider-container{
        margin-left: calc(12%);
        margin-right: 4%;
    }
    & .inner-slider-container{
        width: 84%;
        display: grid;
        grid-template-columns: 60% 35%;
        grid-gap: 3%;
        & .slide-image{
            z-index: 1;
        }
        & .slide-content{
            & .slide-counter{
                color: #727272;
                margin-bottom: 20px;
                font-size: 15px;
                display: block;
            }
            & h2{
                font-size: 24px;
            }
        }
    }
    @media only screen and (max-width: 768px) {
        .react-multiple-carousel__arrow{
            top: 3%;
        }
        .react-multiple-carousel__arrow--right {
            right: 3%;
        }
        & .react-multi-carousel-item--active .inner-slider-container{
            margin-left: unset;
            margin-right: unset;
        }
        & .inner-slider-container{
            width: 100%;
            display: block;
            & .slide-content{
                & .slide-counter{
                    position: absolute;
                    top: -10%;
                }
            }
            & .slide-image{
                margin-bottom: 40px;
            }
        }
        & .react-multi-carousel-dot-list{
            bottom: 15px;
        }
    }
`;
const ElBox = styled.div`
	width: 200px;
	height: 200px;
	background-color: #E2F0FF;
	position: absolute;
	&.el1{
		bottom: 16%;
        left: 35%;
        transition: all 2s ease;
        z-index: -1;
	}
    &.el2{
        background-color: #44A754;
        width: 100%;
        height: 2px;
        bottom: 7.5%;
        z-index: -2;
    }
    @media only screen and (max-width: 768px) {
        display: none;
    }
`
const ImgMask = styled.img`
    width: 200px;
    height: 200px;
    position: absolute;
    &.imgMask1{
        top: 0;
        left: 90%;
        z-index: -1;
        transition: all 2s ease;
    }
    @media only screen and (max-width: 768px) {
        width: 100px;
        height: 100px;
        &.imgMask1{
            top: 15%;
            left: -10%;
        }
    }
`
const Ucaddoninnerslider = (settings) => {
    //console.log({ settings });
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <InnerSlider className={settings._css_classes ? settings._css_classes : ''}>
            <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            partialVisible={true}
            infinite={true}
            autoPlay={false}
            keyBoardControl={true} 
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            itemClass="carousel-item-padding-40-px"
            additionalTransfrom={ !isMobile ? -100 : null}
            >
            {
                settings.uc_items.map((slide, index) => {
                    return(
                        <div key={slide._id} className="inner-slider-container">
                            <div className="slide-image">
                                <Img fluid={slide.slider_image.fluid} style={{'opacity': '1', 'transition': 'opacity 2s'}} />
                            </div>
                            <div className="slide-content">
                                <span className="slide-counter">{index + 1} of {settings.uc_items.length}</span>
                                <h2>{slide.title}</h2>
                                <div className="content" dangerouslySetInnerHTML={{ __html: slide.content }} />
                            </div>
                        </div>
                    )
                })
            }
            </Carousel>
            <ElBox className={`el1`} />
            <ElBox className={`el2`} />
            <ImgMask className={`imgMask1`} src={mask} alt="dotted" />
        </InnerSlider>
    )
}

export default Ucaddoninnerslider

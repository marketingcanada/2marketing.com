import Img from "gatsby-image";
import React, { useEffect, useState } from "react";
import {
	Col, Container,
	Row
} from 'reactstrap';
import styled from 'styled-components';
import mask from "./../../images/dotted-mask.svg";
import truck from "./../../images/truck.png";

const ElBox = styled.div`
	width: 200px;
	height: 200px;
	background-color: #E2F0FF;
	position: absolute;
	&.el1{
		bottom: 50px;
		left: 30%;
        transition: all 2s ease;
		z-index: -2;
	}
	&.el1animate1{
		height: 250px;
		bottom: 50px;
		left: 7%;
        transition: all 2s ease;
		z-index: -2;
	}
	&.el1animate2{
		height: 120px;
		bottom: unset;
		top: 30%;
		left: 5%;
        transition: all 2s ease;
		z-index: -2;
	}
	&.el2{
		top: 30%;
		left: 96%;
		opacity: 0;
		z-index: -2;
        transition: all 2s ease;
	}
	&.el2animate1{
		height: 150px;
		top: 30%;
		left: 93%;
		opacity: 1;
        transition: all 2s ease;
	}
	&.el2animate2{
		height: 200px;
		background: #EFF8F1;
		top: 30%;
		left: 93%;
		opacity: 1;
        transition: all 2s ease;
	}
	&.el2animate3{
		height: 200px;
		background: #EFF8F1;
		top: 30%;
		left: 4%;
		opacity: 1;
        transition: all 2s ease;
	}
	@media only screen and (max-width: 768px) {
		&.el1,
		&.el2{
			display: none;
		}
	}
`;

const ImgMask = styled.img`
	width: 200px;
	height: 200px;
	position: absolute;
	&.truck{
		bottom: 100px;
		width: 400px;
		height: auto;
		opacity: 0;
		&.istruck{
			opacity: 1;
			-webkit-animation:linear infinite alternate;
			-webkit-animation-name: run;
			-webkit-animation-duration: 5s;
		}
	}
	&.imgMask1{
		top: 30%;
		left: 96%;
		z-index: -1;
        transition: all 2s ease;
	}
	&.imgMask1animate1{
		left: 18%;
		z-index: -1;
        transform: translate(-100%, 0);
	}
	&.imgMask1animate2{
		top: unset;
		left: 45%;
		bottom: 50px;
		z-index: -1;
        transform: translate(-100%, 0);
	}
	&.imgMask2{
		opacity: 0;
		top: 24%;
		left: 110%;
		z-index: -2;
        transition: all 2s ease;	
	}
	&.imgMask2animate1{
		opacity: 1;
        transform: translate(-100%, 0);
	}
	&.imgMask2animate2{
		opacity: 1;
		left: 24%;
        transform: translate(-100%, 0);
	}
	@media only screen and (max-width: 768px) {
		&.truck{
			bottom: unset;
			width: 300px;
			top: 230px;
			height: auto;
		}
		&.imgMask1,
		&.imgMask2{
			display: none;
		}
	}
`;
const Navigation = styled.div`
	margin-top: 50px;
	width: 100%;
	& button{
		background: #ffffff;
		position: relative;
		width: 50px;
		height: 50px;
		color: #44A754;
		border: 0;
		box-shadow: 0px 3px 6px #00000029;
		border-radius: 50%;
		cursor: pointer;
		& span{
			font-size: 26px;
			cursor: pointer;
		}
		&:before{
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			left: -15px;
			background: #ffffff;
			z-index: -1;
		}
		&:after{
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			left: 15px;
			background: #ffffff;
			z-index: -1;
		}
	}
	& .next-btn{
		float:right;
		margin-right: 100px;
		& span{
			position: relative;
			left: -3px;
    		top: 2px;
			&:after{
				content: '>';
				position: absolute;
				font-size: 20px;
				top: 3px;
				left: 10px;
			}
		}
	}
	& .prev-btn{
		margin-left: 100px;
		opacity: 0;
		transition: opacity 1s;
		& span{
			position: relative;
			right: -3px;
    		top: 2px;
			&:after{
				content: '<';
				position: absolute;
				font-size: 20px;
				top: 3px;
				right: 10px;
			}
		}
	}
	&:before{
		content: '';
		display: block;
		position: absolute;
		background: #44A754;
		bottom: 23px;
		right: 0;
		width: 100%;
		height: 2px;
		transition: width 2s;
		z-index: -1;
	}
	&.lineHalfWidth:before{
		width: 50%;
	}
`;

const Ucaddonhomeslider = (settings) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [slide, setSlide] = useState(settings.uc_items[currentSlide]);
	const [elAnimation, setelAnimation] = useState(0);

	useEffect(() => {
		setSlide(settings.uc_items[currentSlide]);
	}, [setSlide, currentSlide, settings.uc_items]);

	function ElSlide() {
		if(elAnimation > 2){
            setelAnimation(0)
		}
        else{
            setelAnimation(elAnimation + 1)
		}
	}
    function prevItem(){
        if(currentSlide === 0){
            setCurrentSlide(settings.uc_items.length - 1)
		}
        else{
            setCurrentSlide(currentSlide - 1)
		}
		ElSlide()
    }
    function nextItem(){
        if(currentSlide === settings.uc_items.length - 1){
            setCurrentSlide(0)
		}
        else{
            setCurrentSlide(currentSlide + 1)
		}
		ElSlide()
    }

	//console.log(elAnimation);
	return (
		<Container fluid={true} className="homesliderContainer px-0">
			<Row className="w-100 px-0 mx-0">
				<Col md={{ size: 5, offset: 1 }}>
					<Img fluid={slide.slider_image.fluid} style={{'opacity': '1', 'transition': 'opacity 2s'}} />
				</Col>
				<Col className="homeSliderContent" md="6" style={{'display': 'flex', 'flexWrap': 'wrap', 'alignContent': 'flexEnd', 'alignItems': 'flexEnd'}}>
					<div>
						<h3>{slide.title}</h3>
						<div className="content" dangerouslySetInnerHTML={{ __html: slide.content }} />
					</div>
				</Col>
				<ImgMask className={`truck ${elAnimation === 0 ? 'istruck' : ''}`} src={truck} />
				<ImgMask className={`imgMask1 ${elAnimation === 1 ? 'imgMask1animate1' : elAnimation > 1 ? 'imgMask1animate2' : ''}`} src={mask} alt="" />
				<ImgMask className={`imgMask2 ${elAnimation === 2 ? 'imgMask2animate1' : elAnimation === 3 ? 'imgMask2animate2' : ''}`} src={mask} alt="" />
				<ElBox className={`el1 ${elAnimation === 1 ? 'el1animate1' : elAnimation === 2 ? 'el1animate2' : ''}`} />
				<ElBox className={`el2 ${elAnimation === 1 ? 'el2animate1' : elAnimation === 2 ? 'el2animate2' : elAnimation === 3 ? 'el2animate3' : ''}`} />
				<Navigation className={currentSlide === 0 ? 'lineHalfWidth' : ''}>
					<button onClick={() => prevItem()} className="prev-btn" style={{ 'opacity' : `${currentSlide !== 0 ? '1' : '0'}` }}>
						<span>&#x3c;</span>
					</button>
					<button onClick={() => nextItem()} className="next-btn">
						<span>&#x3e;</span>
					</button>
				</Navigation>
			</Row>
		</Container>
	)
};
export default Ucaddonhomeslider;

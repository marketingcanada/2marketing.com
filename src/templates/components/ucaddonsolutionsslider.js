import useWindowSize from '@charlietango/use-window-size';
import Img from "gatsby-image";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import {
    Col, Container,
    Row
} from 'reactstrap';
import styled from 'styled-components';
import mask from "./../../images/dotted-mask.svg";

const Btn = styled.button`
    width: 100%;
    background: transparent;
    text-align: left;
    padding: 0;
    margin: 0;
    border: 0;
    border-radius: 0;
    cursor: pointer;
`;

const Ucaddonsolutionsslider = (settings) => {
	const [slide, setSlide] = useState(settings.uc_items[0]);
    const { width } = useWindowSize();

    function changeSlide(index){
        setSlide(settings.uc_items[index])
    }

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

    const MobSlider = () => {
        return(
            <Carousel
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container solutionsMobSlider"
            itemClass="carousel-item-padding-40-px"
            >
            {
                settings.uc_items.map((slide, index) => {
                    return(
                        <div key={index} className="solutions-item">
                            <div className="ourSolutionsImg">
                                <Img  fluid={slide.slider_image.fluid} />
                            </div>
                            <h3 className="serviceWarehousingH3">{slide.title}</h3>
                            <div className="serviceWarehousingContent" dangerouslySetInnerHTML={{ __html: slide.content }} />
                        </div>
                    )
                })
            }
            </Carousel>
        )
    }

    const TabItem = () => {
        return(
            <ul className="svgIconList">
                {
                    settings.uc_items.map((list, index) => {
                        return (
                        <li key={index} className={`svg-list-item ${list === slide ? 'active' : ''}`}>
                            <Btn onClick={() => changeSlide(index)}>
                                <span className="list-svg" dangerouslySetInnerHTML={{ __html: list.icon_svg ? list.icon_svg : '' }} />
                                <span className="list-text">{list.title}</span>
                            </Btn>
                        </li>
                        )
                    })
                }
            </ul>
        )
    }

    const TabContent = () => {
        return(
            <>
                <div className="ourSolutionsImg">
                    <Img  fluid={slide.slider_image.fluid} />
                </div>
                <div className="ourServiceImgMask">
                    <img src={mask} alt="dotted mask" />
                </div>
                <h3 className="serviceWarehousingH3">{slide.title}</h3>
                <div className="serviceWarehousingContent" dangerouslySetInnerHTML={{ __html: slide.content }} />
            </>
        )
    }

	//console.log(settings);
	return (
		<Container fluid={true} className="px-0">
			<Row className="w-100 px-0 mx-0">
				<Col xs={{size: 12}} sm={{size: 12}} md={{ size: 5, offset: 1 }} className="px-0">
                    <h2 className="sectionSmallHeading">{settings.small_title}</h2>
                    <h2 className="sectionHeading">{settings.section_title}</h2>
                    <div className="ourSolutionContent" dangerouslySetInnerHTML={{ __html: settings.section_content }} />
                    
                    {(width > 768 ? <TabItem /> : null)}
                    
				</Col>
				<Col xs={{size: 12}} sm={{size: 12}} md={{ size: 5, offset: 1 }} className="px-0">
                    {(width > 768 ? <TabContent /> : <MobSlider />)}
				</Col>
			</Row>
		</Container>
	)
};
export default Ucaddonsolutionsslider;

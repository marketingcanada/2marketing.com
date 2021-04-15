import React from "react";
import Carousel from "react-multi-carousel";
import styled from 'styled-components';

const Rvw = styled.div`
  position: relative;
`;

const Reviews = (settings) => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
   //console.log({ settings });
  return (
    <Rvw className={settings._css_classes ? settings._css_classes : ''}>
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
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
        >
        {
            settings.slides.map(slide => {
                let star = [];
                for (let i = 1; i <= slide.rating; i++) {
                    star.push(<i key={i} className="fas fa-star"></i>);
                } 
                return(
                    <div key={slide._id} className="review-item">
                        <div className="ratings">
                            {star}
                        </div>
                        <p>{slide.content}</p>
                        <span className="reviewer-name">{slide.name}</span>
                    </div>
                )
            })
        }
        </Carousel>
    </Rvw>
  )
};
export default Reviews;

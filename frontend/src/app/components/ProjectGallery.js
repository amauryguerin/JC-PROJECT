"use client"
import Image from "next/image";

// Import Swiper React components and modules
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/navigation';
import styled from "styled-components";

const StyledSwiperContainer = styled.div`
  .project__information {
    display: grid;
    place-items: center;
    padding-bottom: 1rem;
    
    & > * {
      text-align: center;
    }
  }

  .swiper {
    .swiper-button-prev, .swiper-button-next {
      color: var(--color--black);
      opacity: 1;
    }

    .swiper-slide {
      width: unset;
    }
  }
`;
const ProjectGallery = ({projectData}) => {
    return (
        <StyledSwiperContainer>
            <Swiper
                modules={[Autoplay, Navigation]}
                navigation
                autoplay={{delay: 5000}}
                slidesPerView={1}
                spaceBetween={64}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 32,
                    },
                    768: {
                        slidesPerView: 1.5,
                        spaceBetween: 96,
                    },
                    1024: {
                        slidesPerView: 2.5,
                        spaceBetween: 128,
                    },
                }}
                centeredSlides={true}
                loop
            >
                {projectData.attributes.photo.data.map(photo => {
                    return (
                        <SwiperSlide key={photo.id}>
                            <Image
                                key={photo.id}
                                src={photo.attributes.url}
                                alt={photo.attributes.alternativeText}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{width: '100%', height: 'auto'}}
                                priority
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </StyledSwiperContainer>
    )
}

export default ProjectGallery;
"use client"
import Image from "next/image";
import Link from "next/link";

// Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';import 'swiper/css/navigation';
import 'swiper/css/navigation';
import styled from "styled-components";

const StyledSwiperContainer = styled.div `
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

const ProjectsGallery = ({ projectsData }) => {
    return (
        <StyledSwiperContainer>
            <Swiper
                modules={[Autoplay, Navigation]}
                navigation
                autoplay={{ delay: 5000 }}
                slidesPerView={1}
                spaceBetween={64}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 32,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 96,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 128,
                    },
                }}
                centeredSlides={true}
                loop
            >
                {projectsData.map(project => {
                    return (
                        <SwiperSlide key={project.id}>
                            <Link href={'/projects/' + project.attributes.slug}>
                                <Image
                                    src={project.attributes.photo.data[0].attributes.url}
                                    alt={project.attributes.photo.data[0].attributes.alternativeText}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }}
                                    priority
                                />
                                <p>{project.attributes.name}</p>
                            </Link>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </StyledSwiperContainer>
    )
}

export default ProjectsGallery;
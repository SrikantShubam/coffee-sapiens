import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

const Featured = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCoffeeBlog(filter: { featuredOrNot: { eq: true } }) {
        nodes {
          blogName
          slug
          featuredImage {
            gatsbyImageData(width: 450, height: 400, layout: CONSTRAINED)
            description
          }
          shortdesc {
            shortdesc
          }
        }
      }
    }
  `);

  const swiperSettings = {
    modules: [Autoplay, EffectFade],
    spaceBetween: 30,
    slidesPerView: 1,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    effect: 'fade',
    loop: true,
    fadeEffect: {
      crossFade: true,
    },
  };

  return (
    <div className="container mx-auto px-8 py-8 bg-gray-50 rounded-2xl mt-8">
      <Swiper {...swiperSettings}>
        {data.allContentfulCoffeeBlog.nodes.map((node) => (
          <SwiperSlide key={node.slug}>
            <div className="flex flex-col md:flex-col lg:flex-row-reverse justify-between items-start">
              {/* Image - Full width on mobile and tablet, right-aligned and half-width on desktop */}
              <div className="w-full lg:w-1/2 mb-4 md:mb-4 lg:mb-0 md:pl-8 flex lg:justify-center lg:items-center">
                <div className="relative">
                  <GatsbyImage 
                    image={getImage(node.featuredImage)} 
                    alt={node.featuredImage.description} 
                    className="rounded-lg img-d img-movement"
                  />
                </div>
              </div>

              {/* Text - Full width on mobile and tablet, left-aligned and half-width on desktop */}
              <div className="w-full lg:w-1/2 md:pl-8">
                <p className="text-sm text-xl font-medium text-black mt-4 text-roboto">Featured Articles 
                  <FontAwesomeIcon icon={faChevronRight} className="pl-3 text-sm" />
                </p>
                <h2 className="lg:text-5xl md:text-3xl md:pr-4 leading-tight font-bold mb-2 mt-2 text-black font-inter pr-16 text-2xl">
                  {node.blogName}
                </h2>
                <p className="text-sm sm:text-red md:text-base text-black mt-4 md:my-8 text-roboto md:pr-16 sm:pr-4">
                  {node.shortdesc.shortdesc}
                </p>
                <Link to={`/blog/${node.slug}`}>
                <button className="bg-white hover:bg-gray-100 md:text-base stroke-slate-50  py-2 px-4 border border-secondary font-roboto rounded-lg shadow hover:bg-secondary hover:text-white">
                Read More
              </button>
                </Link>
             
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Featured;

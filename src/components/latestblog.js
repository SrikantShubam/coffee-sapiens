import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const LatestBlog = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulCoffeeBlog(sort: {publishedData: DESC}) {
        nodes {
          authorDetails {
            authorName
            socials
            authorImage {
              gatsbyImageData(layout: FIXED, width: 44, height: 44)
              description
            }
          }
          blogName
          slug
          publishedData
          shortdesc {
            shortdesc
          }
          featuredImage {
            description
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  `);

  const blogs = data.allContentfulCoffeeBlog.nodes;

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-GB')
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <h2 className="text-3xl font-roboto font-bold mb-8 ">Latest Articles</h2>
      <hr className="h-px rounded mb-8 h-1 w-64  border-0 dark:bg-secondary"></hr>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {blogs.map((blog, index) => {
          const featuredImage = blog.featuredImage ? getImage(blog.featuredImage) : null;
          const authorImage = blog.authorDetails?.authorImage ? getImage(blog.authorDetails.authorImage) : null;

          return (
            <div key={index} className="flex flex-col">
            <Link to={`/blog/${blog.slug}`} className="mb-4">
              {featuredImage && (
                <GatsbyImage
                  image={featuredImage}
                  alt={blog.featuredImage.description || ''}
                  className="w-full h-48 object-cover rounded-lg"
                />
              )}
            </Link>
            <div className="flex items-center mb-5">
              <Link to={blog.authorDetails.socials} target="_blank" rel="noopener noreferrer">
                {authorImage ? (
                  <GatsbyImage
                    image={authorImage}
                    alt={blog.authorDetails.authorImage.description || ''}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                ) : (
                  <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
                )}
              </Link>
              <div>
              <Link to={blog.authorDetails.socials} target="_blank" rel="noopener noreferrer">
              <p className="ml-2 text-sm font-inter font-bold mb-1 mt-5 hover:underline ">{blog.authorDetails.authorName}</p>
              </Link>
              
                <p className="ml-2 font-medium text-xs text-gray-500">{formatDate(blog.publishedData)}</p>
              </div>
            </div>
            <Link to={`/blog/${blog.slug}`}>
              <h3 className="text-xl font-roboto font-bold mb-2">{blog.blogName}</h3>
              <p className="text-gray-600 font-roboto mb-4 line-clamp-3">{blog.shortdesc.shortdesc}</p>
            </Link>
          </div>
        );
      })}
    </div>
  </div>
  );
};

export default LatestBlog;
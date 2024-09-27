import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Navbar from "../components/Navbar"
import SEO from "../components/seo"
import Footer from "../components/footer"

const BlogPage = ({ data }) => {
  const posts = data.allContentfulCoffeeBlog.edges
  const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length <= wordLimit) {
      return text;
    }
    return words.slice(0, wordLimit).join(' ') + '...'; // Append ellipsis
  };
  return (
    <>
      <Navbar />
      <SEO title="Blog" />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Latest Stories</h1>
        <div className="space-y-12">
          {posts.map(({ node }) => {
            const featuredImage = getImage(node.featuredImage)
            const authorImage = getImage(node.authorDetails.authorImage)
            return (
              <Link to={`/blog/${node.slug}`} key={node.slug} className="block">
                <article className="flex flex-col md:flex-row items-center gap-8 hover:bg-gray-100 transition-colors duration-300 p-6 rounded-lg">
                  {featuredImage && (
                    <div className="w-full md:w-1/3">
                      <GatsbyImage
                        image={featuredImage}
                        alt={node.featuredImage.description || node.blogName}
                        className="w-full h-48 md:h-full object-cover rounded-lg"
                      />
                    </div>
                  )}
                  <div className="w-full md:w-2/3">
                    <h2 className="text-2xl font-bold mb-2 text-gray-900">{node.blogName}</h2>
                    <p className="text-gray-700 mb-4">{truncateText(node.shortdesc.shortdesc, 40)}</p>
                    <div className="flex items-center">
                      {authorImage && (
                        <GatsbyImage
                          image={authorImage}
                          alt={node.authorDetails.authorName}
                          className=" rounded-full mr-2 "
                        />
                      )}
                      <div>
                      <div className="pt-6">
                      <p className="text-sm font-medium text-gray-900 m-0">{node.authorDetails.authorName}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(node.publishedData).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                        {` · ${Math.ceil(node.shortdesc.shortdesc.split(' ').length / 200)} min read`}
                      </p>
                      </div>
                       
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            )
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}

export const query = graphql`
  query {
    allContentfulCoffeeBlog(sort: { publishedData: DESC }) {
      edges {
        node {
          blogName
          publishedData
          slug
          shortdesc {
            shortdesc
          }
          featuredImage {
            description
            gatsbyImageData(layout: CONSTRAINED, width: 600)
          }
          authorDetails {
            authorName
            socials
            authorImage {
              gatsbyImageData(layout: FIXED, width: 32, height: 32)
              description
            }
          }
        }
      }
    }
  }
`

export default BlogPage
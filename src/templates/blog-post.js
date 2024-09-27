import React, { useState } from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { BLOCKS } from '@contentful/rich-text-types'
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, FacebookIcon, LinkedinIcon, TwitterIcon } from 'react-share'
import Navbar from '../components/Navbar'
import { Share2, Facebook, Twitter, Linkedin, Copy, Check } from 'lucide-react';
import Footer from '../components/footer'
import SEO from "../components/seo";

const BlogPostTemplate = ({ data, location }) => {
  const [copied, setCopied] = useState(false); // Corrected: Moved useState to the top level
  
  if (!data || !data.contentfulCoffeeBlog) {
    return <div>Error: No data available</div> // Moved the conditional rendering after useState
  }

  const post = data.contentfulCoffeeBlog
  const image = post.featuredImage ? getImage(post.featuredImage) : null
  const authorImage = post.authorDetails.authorImage ? getImage(post.authorDetails.authorImage) : null
  const shareUrl = location.href; // This assumes your environment provides the full URL in the location object

  const handleCopyClick = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }, () => setCopied(false));
  };

  return (
    <>
      <SEO
        title={post.blogName}
        description={post.shortdesc.shortdesc}
        image={post.featuredImage.gatsbyImageData.images?.fallback?.src}
        author={post.authorDetails.authorName}
        publishedDate={post.publishedData}
      />
      <Navbar />

      <div className="bg-white min-h-screen">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{post.blogName}</h1>
          <p className="text-lg md:text-xl text-gray-500 mb-12 md:mb-6">{post.shortdesc.shortdesc}</p>
          <div className="flex items-center justify-between md:mb-0 mb-12">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-10 h-10 mr-3">
                <Link to={post.authorDetails.socials} target='_blank'>
                  {authorImage ? (
                    <GatsbyImage
                      image={authorImage}
                      alt={post.authorDetails.authorName || ''}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  )}
                </Link>
              </div>
              <div className="ml-3">
                <Link to={post.authorDetails.socials} target='_blank'>
                  <p className="text-sm font-medium text-gray-900 mb-1 hover:underline">{post.authorDetails.authorName}</p>
                </Link>
                <div className="flex space-x-1 text-sm text-gray-500 items-center">
                  <time dateTime={post.publishedData}>{new Date(post.publishedData).toLocaleDateString('en-GB')}</time>
                  <span aria-hidden="true">&middot;</span>
                  <span>5 min read</span>
                </div>
              </div>
            </div>
            
            {/* Minimal Share Section */}
            <div className="flex items-center space-x-4">
              <Share2 size={20} className="text-gray-400" />
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer">
                <Facebook size={20} className="text-gray-400 hover:text-blue-600" />
              </a>
              <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${encodeURIComponent(post.blogName)}`} target="_blank" rel="noopener noreferrer">
                <Twitter size={20} className="text-gray-400 hover:text-blue-400" />
              </a>
              <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${encodeURIComponent(post.blogName)}`} target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} className="text-gray-400 hover:text-blue-700" />
              </a>
              <button onClick={handleCopyClick} className="focus:outline-none">
                {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} className="text-gray-400 hover:text-gray-600" />}
              </button>
            </div>
          </div>
        
          </header>
            {/* Share Buttons */}
        
          {image && (
            <div className="mb-8">
              <GatsbyImage image={image} alt={post.featuredImage.description || ''} className="rounded-lg shadow-lg" />
              <h2 className="text-center my-2 text-gray-400 font-roboto">
                {post.featuredImage.description && post.featuredImage.description.charAt(0).toUpperCase() + post.featuredImage.description.slice(1)}
              </h2>
            </div>
          )}

          <div className="prose prose-lg max-w-none mb-12">
            {post.content && renderRichText(post.content, {
              renderNode: {
                [BLOCKS.EMBEDDED_ASSET]: (node) => {
                  const { gatsbyImageData, description } = node.data.target
                  const image = getImage(gatsbyImageData)
                  return (
                    <div className="my-6">
                      <GatsbyImage image={image} className="rounded-lg shadow-lg" alt={description || 'Embedded Image'} />
                      {description && <p className="text-sm text-gray-500 text-center mt-2">{description}</p>}
                    </div>
                  )
                },
              },
            })}
          </div>

         
        </article>
      </div>
      <Footer />
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulCoffeeBlog(slug: { eq: $slug }) {
      blogName
      publishedData
      shortdesc {
        shortdesc
      }
      authorDetails {
        authorName
        socials
        authorImage {
          gatsbyImageData(layout: FIXED, width: 44, height: 44)
          description
        }
      }
      featuredImage {
        description
        gatsbyImageData(layout: FULL_WIDTH)
      }
      content {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            gatsbyImageData(layout: FULL_WIDTH)
            description
          }
        }
      }
    }
  }
`

export default BlogPostTemplate

import React from 'react'
import moment from 'moment'
import { RichText } from '@graphcms/rich-text-react-renderer';
import Link from 'next/link';

const PostDetail = ({ post }) => {
  const contentRenderer = {
    h1: ({ children }) => <h1 className="text-3xl font-semibold mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-semibold mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-semibold mb-4">{children}</h3>,
    h4: ({ children }) => <h4 className="text-lg font-semibold mb-4">{children}</h4>,
    h5: ({ children }) => <h5 className="text-base font-semibold mb-4">{children}</h5>,
    h6: ({ children }) => <h6 className="text-base font-medium mb-4">{children}</h6>,
    bold: ({ children }) => <b>{children}</b>,
    italic: ({ children }) => <em>{children}</em>,
    underline: ({ children }) => <u>{children}</u>,
    ul: ({ children }) => <ul className='list-disc ml-6 mb-8 -mt-8'>{children}</ul>,
    ol: ({ children }) => <ol className='list-decimal ml-6 mb-8 -mt-8'>{children}</ol>,
    li: ({ children }) => <li className='pl-1'>{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className='px-2 py-1 mb-8 bg-gray-50 border-l-4 border-gray-300'>
        <p className='text-gray-900'>
          {children}
        </p>
      </blockquote>
    ),
    code: ({ children }) => <code className="py-1 px-2 m-0 bg-gray-300 rounded-md">{children}</code>,
    code_block: ({ children }) => <p className="mb-8"> <code className="py-1 px-2 m-0 bg-gray-300">{children}</code> </p>,
    // code_block: ({ children }) => <Hightlight innerHTML={true}>{children}</Hightlight>,  TODO: customise code_block
    p: ({ children }) => <p className="mb-8">{children}</p>,
    img: ({ src, title, width, height }) => (
      <section className='flex justify-center'>
        <img src={src} alt={title} width={width} height={height} />
      </section>
    ),
    a: ({ children, openInNewTab, href, rel, ...rest }) => {
      console.log(href);
      if (href.match(/^https?:\/\/|^\/\//i)) {
        return (
          <a className='transition duration-400 cursor-pointer hover:text-pink-600'
            href={href} target={openInNewTab ? '_blank' : '_self'} rel={rel || 'noopener noreferrer'} {...rest}
          >
            {children}
          </a>
        );
      }

      return (
        <Link className='transition duration-400 cursor-pointer hover:text-pink-600' href={href} {...rest}>
          {children}
        </Link>
      );
    },
  };

  return (
    <div className='bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8'>
      {post.featuredImage && post.featuredImage.url && (
        <div className='relative overflow-hidden shadow-md mb-6'>
          <img src={post.featuredImage.url} alt={post.title} className='object-top h-full w-full rounded-t-lg' />
        </div>
      )}
      <div className='px-4 lg:px-0'>
        <h1 className='mb-8 text-3xl font-semibold'>{post.title}</h1>
        <div className='flex items-center mb-8 w-full'>
          <div className='font-medium text-gray-700'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>
                  {moment(post.createdAt).format('MMM DD, YYYY')}
              </span>
          </div>
        </div>
        <RichText 
          content={post.content.raw.children}
          renderers={contentRenderer}
        />
      </div>
    </div>
  )
}

export default PostDetail

import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import { getAuthorDetails } from '../services'

const Author = () => {
  const [ author, setAuthor ] = useState([])

  useEffect(() => {
    getAuthorDetails()
      .then((newAuthor) => {
        setAuthor(newAuthor)
      })
  }, []);

  return (
    <div className='text-center mt-0 mb-8 px-8 py-6 relative rounded-lg bg-black bg-opacity-20'>
      {/* <div className='absolute left-0 right-0 -top-14'> TODO: make the image middle
        {author && author.photo ? (
          <Image
            src={(author.photo && author.photo.url) || ''}
            unoptimized
            alt={author.name}
            height={100}
            width={100}
            className='align-middle rounded-full text-center'/>
        ) : ''}
      </div> */}
      <h3 className='text-white my-2 text-xl font-bold'>Hi, I'm {author.name}</h3>
      <p className='text-white text-lg'>{author && author.bio}</p>
    </div>
  )
}

export default Author

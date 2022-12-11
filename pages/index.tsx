// import type { NextPage } from 'next'
import Head from 'next/head'
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { PostCard, PostWidget, Author } from '../components';
import { getPosts } from '../services'

const Home = ({ posts }:any) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Ikraduya</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {
            posts.map((post: any) => <PostCard post={post.node} key={post.node.title}/>)
          }
        </div>
        
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <Author />
            <PostWidget categories={''} slug={''} />
          </div>
        </div>
      </div>


    </div>
  )
}

export const getStaticProps: GetStaticProps = async() => {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}

export default Home

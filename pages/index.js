import Head from 'next/head'
import Categories from '../components/Categories';
import PostCard from '../components/PostCard'
import PostWidget from './../components/PostWidget';


const posts = [
  {title: 'React Testing', excerpt: 'Learn React Testing'},
  {title: 'Next Testing', excerpt: 'Learn Next Testing'}
]

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-4">
      <Head>
        <title>Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post, index) => <PostCard post={post} key={index} />)}
        </div>
        <div className='col-span-1 lg:col-span-4'>
          <div className="lg:sticky relative top-8">
            <PostWidget/>
            <Categories/>
          </div>
        </div>
      </div>
    </div>
  )
}

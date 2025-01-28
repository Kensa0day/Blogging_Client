import React, { useState } from 'react'
import { CATEGORIES } from '../utils/dummyData';
import { Banner, Card, Pagination, PopularPost, PopularWriter } from '../components';
import { Link } from 'react-router-dom';
import { usePosts, usePopularPosts } from '../hooks/post-hooks';

const Home = () => {
  // const posts = posts;
  // console.log(posts)

  // const nunOfPages = 4;
  // const [page, setPage] = useState(0);


  const {posts, numOfPages, setPage} = usePosts({writerId: ""})
  const popular = usePopularPosts();
  const randomIndex = Math.floor(Math.random() * posts.length);
  const handlePageChange = (val) => {
    setPage(val);
    console.log(val);
    console.log(popular)

  };

  if (posts.length < 1) return (
    <div className='w-full h-full py-8 flex items-center justify-center'>
      <span className='text-lg text-slate-500'>No Post Found</span>
  </div>
  );


  return (
    <div className='py-10 2xl:py-5'>
      <Banner post = {posts[randomIndex]}/>

      <div className='px-0 lg:pl-20 2xl:px-20'>
        {/* category */}
        <div className='mt-6 md:mt-0 '>
          <p className='text-2xl font-semibold text-gray-600 dark:text-white '>Popular Categories</p>

          <div className='w-full flex flex-wrap py-10 gap-8'>
            {
              CATEGORIES.map((cat) => (
                <Link to={`/category?cat=${cat?.label}`} className={`flex items-center justify-center gap-3 ${cat.color} text-white font-semibold text-base px-4 py-2 rounded cursor-pointer`}>
                {cat.icon}
                <span>{cat.label}</span>
                
                </Link>
              ))
            }

          </div>

        </div>

        <div className='w-full flex flex-col md:flex-row gap-10 2xl:gap-20 '>
          {/* Blog Post */}

          {/* Sisi Kiri */}
          <div className='w-full md:w-2/3 flex flex-col gap-10 gap-y-20'>
            {
              posts.map((post, index) => (
                <Card key={post?._id} post={post} index={index}/>
              ))
            }

            <div className='w-full flex items-center justify-center'>
              <Pagination totalPages={parseInt(numOfPages)} onPageChange={handlePageChange}/>
            </div>


          </div>

          {/* Sisi Kanan */}


          <div className='w-full md:w-1/4 flex flex-col gap-y-12'>
            {/* Popular Post */}
            <PopularPost posts = {popular?.posts}/>


            {/* Popular Writer */}
            <PopularWriter data = {popular?.writers}/>


          </div>
          
        </div>

      </div>

    </div>
  )
}

export default Home
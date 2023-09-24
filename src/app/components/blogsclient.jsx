'use client'

import React from 'react'
import style from "../styles/blogclient.module.css";
import Image from 'next/image';
import Link from 'next/link';

const Blogsclient = ({posts}) => {
 
  return (
    <>

      <div className='pt-40 pb-20'>
        <h1 className={style.heads}>BLOGS</h1>
      </div>

      <div className='grid grid-cols-3 gap-10 pb-20'>


        {posts?.map((el)=>(
          <div className="card w-96 bg-base-300 shadow-xl m-auto" key={el.id}>
          <figure ><Link href={`/blogs/${el.id}`} ><Image   src={el.custom_excerpt} alt="Shoes" width={300} height={300} style={{width:"300px",height:"300px",borderRadius:"10px",marginTop:"5px"}}/></Link></figure>
          <div className="card-body">
            <h2 className="card-title">
              {el.title}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <div dangerouslySetInnerHTML={{__html:el.html}}/>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{el.feature_image_alt}</div> 
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
        ))}


      </div>

    </>
  )
}

export default Blogsclient
import Image from 'next/image';
import React, { Suspense } from 'react'
import Loading from '../loading';

const Slugpage = async({params}) => {

    let data;
    data= await fetch(`http://localhost:2370/ghost/api/content/posts/${params.slug}/?key=257399b98e446036aafa98358b`);
    data = await data.json();
    console.log(data)
  return ( 
    <div>

        <Suspense fallback={<Loading/>}>
        <div className="card lg:card-side bg-base-100 shadow-xl pt-40 w-5/6 m-auto">
        <figure><Image src={data.posts[0].excerpt} alt="Album" width={200} height={200} style={{width:"300px",height:"300px"}}/></figure>
        <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <div dangerouslySetInnerHTML={{__html:data.posts[0].html}}/>
            <div className="card-actions justify-end">
            </div>
        </div>
        </div>
        </Suspense>
    </div>
  )
}

export default Slugpage
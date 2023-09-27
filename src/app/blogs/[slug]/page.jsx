import Image from 'next/image';
import React, { Suspense } from 'react'
import Loading from '../loading';

const Slugpage = async({params}) => {

    let data;
    try {
      data= await fetch(`http://localhost:2370/ghost/api/content/posts/slug/${params.slug}?key=257399b98e446036aafa98358b`);
    data = await data.json();
    } catch (error) {
      console.log(error);
    }
    console.log(data,"data")
  return ( 
    <div>

        <Suspense fallback={<Loading/>}>
        <div className="card lg:card-side bg-base-100 shadow-xl pt-40 w-5/6 m-auto">
        <Image src={data.posts[0].excerpt} alt="Album" width={450} height={450} style={{width:"450px", height:"450px",borderRadius:"10px"}}/>
        <div className="card-body">
            <h2 className="card-title">{data.posts[0].title}</h2>
            <div dangerouslySetInnerHTML={{__html:data.posts[0].html}} className='w-9/12'/> 
            <div className="card-actions justify-end">
            <div className="badge badge-neutral">neutral</div>
            </div>
        </div>
        </div>
        </Suspense>
    </div>
  )
}

export default Slugpage
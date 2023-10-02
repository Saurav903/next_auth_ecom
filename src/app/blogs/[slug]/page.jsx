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
    <div className='pt-40'>

        <Suspense fallback={<Loading/>}>
        <div className="card lg:card-side glass shadow-xl w-5/6 m-auto">
        <Image src={data.posts[0].excerpt} alt="Album" width={450} height={450} style={{width:"450px", height:"450px",borderRadius:"10px"}}/>
        <div className="card-body">
            <h2 className="card-title text-cyan-50">{data.posts[0].title}</h2>
            <div dangerouslySetInnerHTML={{__html:data.posts[0].html}} className='w-9/12 text-cyan-50'/> 
            <div className="card-actions justify-end">
            <div className="badge badge-outline">neutral</div>
            <div className="badge badge-outline">house</div>
            <div className="badge badge-outline">flower</div>
            </div>
        </div>
        </div>
        </Suspense>
    </div>
  )
}

export default Slugpage
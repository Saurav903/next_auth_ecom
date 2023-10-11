import Image from 'next/image';
import React, { Suspense } from 'react'
import Loading from '../loading';
import { getapislug } from '@/app/services/apicall';

export const generateMetadata=({params})=>{
  return {
    title: `${params.slug} Nextjs blogs`
  }
}


const Slugpage = async({params}) => {

   let data = await getapislug(params);
   console.log(data);
  return ( 
    <div className='pt-40'>

        <Suspense fallback={<Loading/>}>
        <div className="card lg:card-side glass shadow-xl w-5/6 m-auto">
        <Image src={data.posts[0].excerpt} alt="Album" width={450} height={450} style={{width:"450px", height:"450px",borderRadius:"10px"}}/>
        <div className="card-body">
            <h2 className="card-title text-cyan-50">{data.posts[0].title}</h2>
            <div dangerouslySetInnerHTML={{__html:data.posts[0].html}} className='w-9/12 text-cyan-50'/> 
        </div>
        </div>
        </Suspense>
    </div>
  )
}

export default Slugpage
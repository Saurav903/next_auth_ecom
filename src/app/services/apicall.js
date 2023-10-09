import { key, value } from "./slugapi";

export const getapislug = async(params)=>{
    let data;
    try {
     data =  await fetch(`${value}/${params.slug}?key=${key}`);
     data = await data.json();

     return data;
    } catch (error) {
      console.log(error);
    }
    
}
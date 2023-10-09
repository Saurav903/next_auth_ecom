"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import style from "../styles/navbar.module.css";

const Navbarlistdown = ({cook}) => {
    let router=useRouter();

 
  
    const handleBlog = ()=>{
      if(cook){
        router.push("/blogs");
      }else{
        
        toast.error(' Login First!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
    }
  return (
    <div class="w-[40%] m-auto grid grid-cols-4 justify-between gap-10 items-center hidden sm:hidden md:hidden lg:flex" >
    <div className={style.textall} onClick={()=>router.push("/")}><p>Home</p></div>
    <div className={style.textall} onClick={handleBlog}><p>Blogs</p></div>
    <div className={style.textall} onClick={()=>router.push("/about")}><p>About</p></div>
    <div className={style.textall} onClick={()=>router.push("/contact")}><p>Contact</p></div>
  </div>
  )
}

export default Navbarlistdown
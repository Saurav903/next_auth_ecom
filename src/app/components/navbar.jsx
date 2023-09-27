"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import style from "../styles/navbar.module.css"
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';
import { FaBars } from "react-icons/fa";


const Navbar = ({cook}) => {
  const { user} = useUser();
  let router=useRouter();

  const handleBlog = ()=>{
    if(cook){
      router.push("/blogs");
    }else{
      alert("Login First");
    }
  }
  return (
    <div className={style.navdiv}>


      <div className={style.nav}>
        <div className='text-xl sm:block md:block lg:hidden p-10 dropdown bg-red'>
          <label tabIndex={0} className="btn m-1 bg-[rgb(235,235,235,0.1)] text-[rgb(66,66,66
            +)] border-none"><FaBars/></label>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-[rgb(235,235,235,0.9)] rounded-box w-52">
            <li><div className={style.textall} onClick={()=>router.push("/")}><p>Home</p></div></li>
            <li><div className={style.textall} onClick={handleBlog}><p>Blogs</p></div></li>
            <li><div className={style.textall}><p>About</p></div></li>
            <li><div className={style.textall}><p>Contact</p></div></li>
          </ul>
        </div>
        <div className="flex justify-between items-center sm:w-[30%] md:w-40 lg:w-20">
          <span className=" rounded-xl inline-block" style={{height:"20px",width:"20px",backgroundColor:"rgb(240,65,51)"}}></span>
          <span className=" bg-black rounded-xl inline-block" style={{height:"20px",width:"20px",backgroundColor:"rgb(255,162,15)"}}></span>
          <span className=" bg-black rounded-xl inline-block" style={{height:"20px",width:"20px",backgroundColor:"rgb(108,223,36)"}}></span>
        </div>



        <div class="w-[40%] m-auto grid grid-cols-4 justify-between gap-10 items-center hidden sm:hidden md:hidden lg:flex" >
          <div className={style.textall} onClick={()=>router.push("/")}><p>Home</p></div>
          <div className={style.textall} onClick={handleBlog}><p>Blogs</p></div>
          <div className={style.textall}><p>About</p></div>
          <div className={style.textall}><p>Contact</p></div>
        </div>



        <>
          {cook ? (<div class="flex justify-between items-center w-[25%] sm:w-[20%] md:w-[15%] lg:w-[13%]" style={{width:"24%"}}>
          <div>
            <p className={style.textalls}>{user?.name}</p>
          </div>
          <div>
            <a as={Link} href={"/api/auth/logout"} className={style.textalls}>Logout</a>
          </div>
          </div>):( <div class="flex justify-between items-center w-[25%] sm:w-[20%] md:w-[15%] lg:w-[13%]">
          <div>
            <a as={Link} href={"/api/auth/login"} className={style.textalls}>Login</a>
          </div>
          <div>
            <a as={Link} href={"https://dev-1hrb13y4n67dubxk.us.auth0.com/u/signup?state=hKFo2SBkazA4bm11NEpURVNUWWFqNVJ5X3JYamFiSGdYcWF6b6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIDMtNGxBQ3RMcFdULVAzVy10eGRNSE9zMmktd1M0aHEzo2NpZNkgdDhHazA1enhaRjZoSFdvUUZQMkwxUzBZaFI0SUR1STU"} className={style.textalls}>Signup</a>
          </div>
        </div> )}
        </>
      </div>
    </div>
  )
}

export default Navbar



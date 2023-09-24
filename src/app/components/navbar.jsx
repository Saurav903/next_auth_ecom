"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import style from "../styles/navbar.module.css"
// import { BiLogoFacebook,BiLogoInstagram,BiLogoTwitter,BiSearchAlt } from "react-icons/bi";
import Link from 'next/link';

const Navbar = () => {
  let router=useRouter();
  return (
    <div className={style.navdiv}>


      <div className={style.nav}>
        <div className={style.main} style={{width:"7%"}}>
          <span className=" rounded-xl inline-block" style={{height:"20px",width:"20px",backgroundColor:"rgb(240,65,51)"}}></span>
          <span className=" bg-black rounded-xl inline-block" style={{height:"20px",width:"20px",backgroundColor:"rgb(255,162,15)"}}></span>
          <span className=" bg-black rounded-xl inline-block" style={{height:"20px",width:"20px",backgroundColor:"rgb(108,223,36)"}}></span>
        </div>



        <div class="m-auto grid grid-cols-4 w-3/6 items-center" >
          <div className={style.textall} onClick={()=>router.push("/")}><p>Home</p></div>
          <div className={style.textall} onClick={()=>router.push("/blogs")}><p>Blogs</p></div>
          <div className={style.textall}><p>About</p></div>
          <div className={style.textall}><p>Contact</p></div>
        </div>



        <div class="flex justify-between items-center" style={{width:"14%"}}>
          <div>
            <a as={Link} href={"/api/auth/login"} className={style.textalls}>Login</a>
          </div>
          <div>
            <p as={Link} href={"/login"} className={style.textalls}>Signup</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar


{/* <div>
            <BiLogoFacebook/>
          </div>
          <div>
            <BiLogoInstagram/>
          </div>
          <div>
            <BiLogoTwitter/>
          </div> */}
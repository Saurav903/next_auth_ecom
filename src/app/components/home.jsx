import React from 'react'
import style from "../styles/home.module.css"
const HomePage = () => {
  return (
    <div>
        <div >
            <div className="hero min-h-screen bg-slate-200" >
            <div className="hero-content flex-col lg:flex-row-reverse" style={{width:"70%"}}>
                <img src="https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhbnQlMjBwb3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&q=60" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <p class={style.headings}>Trending</p>
                <p className="py-6">
                    A flowerpot, planter, planterette or plant pot, is a container in which flowers and other plants are                    cultivated and displayed. Historically, and still to a significant extent today, they are made from                 plain terracotta with no ceramic glaze, with a round shape, tapering inwards.</p>
                <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage
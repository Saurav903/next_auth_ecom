/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Footers from '../components/footers'
import style from "../styles/about.module.css"

export const generateMetadata=()=>{
  return {
    title: "About - Nextjs 13 Blog"
  }
}

const AboutPage = () => {
  return (
    <div>

<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-cyan-50">About Plant World</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-cyan-50">The Plant World page is a section of a website or an application dedicated to providing information and resources related to plants. This page typically aims to educate and engage visitors about various aspects of the plant kingdom, including plant types, growth stages, benefits, care tips, and more. Heres a description of what you might find on a Plant World.</p>
    </div>
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M8 17l4 4 4-4m-4-5v9" />
            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" />  
          </svg>
          <h2 className="title-font font-medium text-3xl text-cyan-50">2.7K</h2>
          <p className="leading-relaxed text-cyan-50">Plant Types</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
            <circle cx={9} cy={7} r={4} />
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
          </svg>
          <h2 className="title-font font-medium text-3xl text-cyan-50">1.3K</h2>
          <p className="leading-relaxed text-cyan-50">Plant Anatomy</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M3 18v-6a9 9 0 0118 0v6" />
            <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
          </svg>
          <h2 className="title-font font-medium text-3xl text-cyan-50">74</h2>
          <p className="leading-relaxed text-cyan-50">Gardening and Landscaping</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <h2 className="title-font font-medium text-3xl text-cyan-50">46</h2>
          <p className="leading-relaxed text-cyan-50">Places</p>
        </div>
      </div>
    </div>
  </div>
</section>

    <div>
        <Footers/>
    </div>
    </div>
  )
}

export default AboutPage
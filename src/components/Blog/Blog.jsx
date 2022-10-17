import React from 'react'

const Blog = () => {
  return (
    <>
     <section className="py-6 sm:py-12  dark:text-gray-100">
      <div className="container p-6 mx-auto space-y-8">
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          <article className="flex flex-col dark:bg-gray-800 transition duration-700 hover:rotate-3 rounded-2xl">
            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
              <img alt="" className="object-cover rounded-t-2xl w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?1" />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
              <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Convenire</a>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                <span>June 1, 2020</span>
                <span>2.1K views</span>
              </div>
            </div>
          </article>
          <article className="flex flex-col dark:bg-gray-800 transition duration-700 hover:rotate-3 rounded-2xl">
            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
              <img alt="" className="object-cover rounded-t-2xl w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?2" />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
              <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Convenire</a>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                <span>June 2, 2020</span>
                <span>2.2K views</span>
              </div>
            </div>
          </article>
          <article className="flex flex-col dark:bg-gray-800 transition duration-700 hover:rotate-3 rounded-2xl">
            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
              <img alt="" className="object-cover rounded-t-2xl w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?3" />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
              <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Convenire</a>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                <span>June 3, 2020</span>
                <span>2.3K views</span>
              </div>
            </div>
          </article>
          <article className="flex flex-col dark:bg-gray-800 transition duration-700 hover:rotate-3 rounded-2xl">
            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
              <img alt="" className="object-cover rounded-t-2xl w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?4" />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
              <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Convenire</a>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                <span>June 4, 2020</span>
                <span>2.4K views</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
    <div className="flex items-center justify-center lg:px-0 sm:px-6 px-4">
    
            <div className="lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200">
                <div className="flex items-center pt-3 text-gray-500 hover:text-gray-100 cursor-pointer">
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" sstrokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M1.1665 4L4.49984 7.33333" stroke="currentColor" strokeWidth="1.25" sstrokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M1.1665 4.00002L4.49984 0.666687" stroke="currentColor" strokeWidth="1.25" sstrokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <p className="text-sm ml-3 font-medium leading-none ">Previous</p>                    
                </div>
                <div className="sm:flex hidden">
                    <p className="text-sm font-medium leading-none cursor-pointer text-gray-500 hover:text-gray-100 border-t border-transparent hover:text-gray-100 pt-3 mr-4 px-2">1</p>
                    <p className="text-sm font-medium leading-none cursor-pointer text-gray-500 hover:text-gray-100 border-t border-transparent hover:text-gray-100 pt-3 mr-4 px-2">2</p>
                    <p className="text-sm font-medium leading-none cursor-pointer text-gray-500 hover:text-gray-100 border-t border-transparent hover:text-gray-100 pt-3 mr-4 px-2">3</p>
                    <p className="text-sm font-medium leading-none cursor-pointer text-gray-100 border-t text-gray-100 pt-3 mr-4 px-2">4</p>
                    <p className="text-sm font-medium leading-none cursor-pointer text-gray-500 hover:text-gray-100 border-t border-transparent hover:text-gray-100 pt-3 mr-4 px-2">5</p>
                    <p className="text-sm font-medium leading-none cursor-pointer text-gray-500 hover:text-gray-100 border-t border-transparent hover:text-gray-100 pt-3 mr-4 px-2">6</p>
                    <p className="text-sm font-medium leading-none cursor-pointer text-gray-500 hover:text-gray-100 border-t border-transparent hover:text-gray-100 pt-3 mr-4 px-2">7</p>
                    <p className="text-sm font-medium leading-none cursor-pointer text-gray-500 hover:text-gray-100 border-t border-transparent hover:text-gray-100 pt-3 mr-4 px-2">8</p>
                </div>
                <div className="flex items-center pt-3 text-gray-500 hover:text-gray-100 cursor-pointer">
                    <p className="text-sm font-medium leading-none mr-3">Next</p>
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" sstrokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9.5 7.33333L12.8333 4" stroke="currentColor" strokeWidth="1.25" sstrokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9.5 0.666687L12.8333 4.00002" stroke="currentColor" strokeWidth="1.25" sstrokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        
                </div>
            </div>
    </div>
    
    </>
  )
}

export default Blog
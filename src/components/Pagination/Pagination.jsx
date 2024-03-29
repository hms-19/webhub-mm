import React from 'react'

const Pagination = ({totalBlogs,blogPerPage,setCurrentPage,currentPage}) => {
 
    let pages = []

    for(let i = 1; i <= Math.ceil(totalBlogs / blogPerPage); i++){
        pages.push(i)
    }

    const nextPage = () => {
        if(currentPage !== pages.length){
            setCurrentPage(currentPage + 1)
        }
    }
    const prevPage = () => {
        if(currentPage !== 1){
            setCurrentPage(currentPage - 1)
        }
    }
  return (
    <div>
        <div className="flex items-center justify-center lg:px-0 sm:px-6 px-4 mb-4">
        
                <div className="lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200">
                    <div className="flex items-center pt-3 text-gray-500 hover:text-gray-100 cursor-pointer">
                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M1.1665 4L4.49984 7.33333" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M1.1665 4.00002L4.49984 0.666687" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <p className="text-sm ml-3 font-medium leading-none " onClick={prevPage}>Previous</p>                    
                    </div>
                    <div className="sm:flex hidden">
                        {
                            pages.map((page,index) =>(
                                <div  key={index}>
                                    <p className={"text-sm font-medium leading-none cursor-pointer text-gray-500 hover:text-gray-100 border-t border-transparent hover:text-gray-100 pt-3 mr-4 px-2"} onClick={() => setCurrentPage(page)}>{page}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex items-center pt-3 text-gray-500 hover:text-gray-100 cursor-pointer">
                        <p className="text-sm font-medium leading-none mr-3" onClick={nextPage}>Next</p>
                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9.5 7.33333L12.8333 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9.5 0.666687L12.8333 4.00002" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            
                    </div>
                </div>
        </div>
       
    </div>
  )
}

export default Pagination
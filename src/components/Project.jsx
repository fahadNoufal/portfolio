import React from 'react'

const Project = ({title,sub1,sub2,thumb,no,img}) => {

    let projNo=1
    if (no==="01"){
        projNo=1
    }
    else if (no==="02"){
        projNo=2
    }
    else if (no==="03"){
        projNo=3
    }

  return (
    <div className={`overflow-hidden p${projNo} h-[100svh] sm:py-8  pt-[4rem]`}>
        <h1 className={`proj-name p${projNo}-h1 uppercase tracking-widest border-y-2 border-yellow-bg border-opacity-20 font-days-one leading-[100%] md:leading-normal md:py-0
                           text-center sm:text-left px-2 sm:pl-[4rem] lg:pl-[6rem] xl:pl-[10rem] 2xl:pl-[14rem] sm:pr-[10rem] text-[10svw] sm:text-[4.5rem]  md:text-[3.5rem] lg:text-[5rem] xl:text-[6rem] 2xl:text-[8rem]
                            py-2 sm:py-5`}>
            {title}
            {/* chat circle */}
        </h1>
        <div className=" uppercase border-b-2 border-opacity-20  border-yellow-bg font-sansation-light 
                          py-[0.5rem] sm:py-[0.75rem]
                          pl-[1.25rem] sm:pl-[4rem] lg:px-[6rem] xl:px-[10rem] 2xl:px-[15rem] xl:text-[1.25rem] sm:text-[1.1rem] text-[.8rem]">
            <p>
                {sub1}
               {/* chat based */}
            </p>
            
            <p>
                {sub2}
               {/* social media application */}
            </p>
        </div>
        <div className="proj-intro flex  ">
            <div className="flex  flex-col relative
                            items-center sm:items-start ml-[1.5rem] sm:ml-0 sm:text-left px-[1.25rem] sm:pl-[4rem] lg:pl-[6rem] xl:pl-[10rem]  2xl:pl-[15rem] xl:pr-[10rem] 2xl:pr-[15rem] 
            ">
                <h2 className="proj-thumbnail text-nowrap opacity-50 mt-8 capitalize font-allison 
                                  text-[4rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.7rem] xl:text-[4.5rem] 2xl:text-[5.5rem]
                                  w-full sm:w-auto">
                    {/* find your circle */}
                    {thumb}
                </h2>
                <div className="proj-no opacity-10 top-[8rem] sm:top-[10rem] absolute  tracking-wider mt-[-12rem] font-humane-black
                                text-[38rem] sm:text-[35rem] lg:text-[42rem] xl:text-[45rem]
                                ml-[3.5rem] xl:ml-0">
                    {/* 01 */}
                    {no}
                </div>
            </div>
            <div className=" mx-[4.2rem] mt-[15rem]  sm:mr-12 md:mr-[6rem] lg:mr-[10rem] 2xl:mr-[15rem] lg:mb-[4rem] sm:ml-[4rem] lg:ml-[8rem] xl:ml-0 sm:mt-[8rem] lg:mt-0 scale-125  2xl:mt-[-4rem] 2xl:items-start flex items-center
                            absolute sm:relative">
                <img src={img} alt="" className='  object-cover xl:w-full 2xl:h-full ' />
            </div>

        </div>
        
    </div>
  )
}

export default Project
import React, { useEffect, useContext} from "react"
import Image from "../assets/sp.png"
import Newscontext from "../Context/Newscontext"


const Newsresults = () => {

    const {topnews,loading,fetchtopnews} = useContext(Newscontext)

  useEffect(() => {
    fetchtopnews()
  },[])


  if (!loading) {
    return (
      <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-8 text-black">
        {topnews.map((news,index) => (
         <div key={index} className="card w-50 bg-red-500 shadow-xl">
         <figure className="px-10 pt-10">
           <img src={news.urlToImage} alt="Shoes" className="rounded-xl" />
         </figure>
         <div className="card-body items-center text-center">
           <h2 className="card-title text-white">{news.title}</h2>
           <p>{news.description}</p>
           <div className="card-actions" >
            <a href={news.url} target="_blank"><button className="btn btn-primary bg-red-300 hover:text-red-500 hover:bg-white hover:scale-105 duration-500">Read More..</button></a>
             
           </div>
         </div>
       </div>
        ))}
      </div>
    )
  } 

  else {
    return (
      <center>
        <img src={Image} alt="spinner" />
      </center>
    );
  }
};

export default Newsresults;

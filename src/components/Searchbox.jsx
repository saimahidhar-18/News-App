import React, {useState,useContext } from "react";
import { BsSearch } from "react-icons/bs";
import Newscontext from "../Context/Newscontext"



const Searchbox = () => {

  const {text,handlechange,handlesubmit} = useContext(Newscontext)


  

  return (
    <div className="flex mb-8 mt-5 ">
      <div className="mx-auto w-80 ">
        <form onSubmit={handlesubmit}>
          <div className="relative text-white">
            <input
              type="text"
              placeholder="Search here"
              className="input input-lg input-bordered w-full bg-red-200
              "
              onChange={handlechange}
              value={text}
            />

            <button
              type="submit"
              className="absolute top-0 right-0 rounded-l-none w-30 btn btn-lg bg-red-300 hover:bg-red-600"
            >
              <BsSearch />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Searchbox;

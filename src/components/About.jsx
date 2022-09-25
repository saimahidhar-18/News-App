import React from "react";

function About() {
  return (
    <div className="h-screen mx-auto my-10">
    <div className=" bg-white text-black ">
      <h1 className="text-6xl mb-4">News App</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search Latest News and see the updated details. .
      </p>
      <p className="text-lg">
        Version <span >1.0.0</span>
      </p>
      <p className="text-lg ">
        Layout By:
        <a className="px-3" href="https://twitter.com/This_IsSrujan">
          Srujan Putta
        </a>
      </p>

      {/* repo details */}

      <p className="text-lg ">
        Wanna Contribute to the Project ? :
        <a
          className="p-3 bg-red-500 rounded-md text-white ml-2"
          href="https://github.com/srujan-here/Github_finder"
          target="_blank"
        >
          Git Repo
        </a>
      </p>
    </div>
    </div>
  );
}

export default About;

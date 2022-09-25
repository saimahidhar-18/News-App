import { createContext, useState } from "react";
import Axios from "axios";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [topnews, settopnews] = useState([]);
  const [loading, setloading] = useState(true);
  const [text, settext] = useState("");


const fetchtopnews = async () => {
    Axios.get(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=907298f5d3944575b452fdcf0426f496"
    ).then((response) => {
      settopnews(response.data.articles);
      setloading(false);
    })
  }


  const fetchsearchnews = async (data) => {
    console.log(data)
    Axios.get(
      `https://newsapi.org/v2/everything?q=${data}&from=2022-09-24&sortBy=popularity&apiKey=907298f5d3944575b452fdcf0426f496&pageSize=12`
    ).then((response) => {
      settopnews(response.data.articles);
      setloading(false);
    })
  }


  const handlechange = (e) => {
    settext(e.target.value);

  }

  const handlesubmit = async (e) => {
    e.preventDefault();
    fetchsearchnews(text)
   

  }



  return (
    <NewsContext.Provider value={{topnews,loading,fetchtopnews,text,handlechange,handlesubmit}}>
      {children}
    </NewsContext.Provider>
  )
}

export default NewsContext;

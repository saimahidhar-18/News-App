import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Searchbox from "./components/Searchbox";
import Newsresults from "./components/Newsresults";
import { NewsProvider } from "./Context/Newscontext";
import Footer from "./components/Footer";
import About from "./components/About";

const App = () => {
  return (
    <NewsProvider>
      <div className="flex flex-col h-full bg-white">
        <Navbar />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route
            path="/"
            element={
              <>
                <main className="container mx-auto px-3  pb-12 ">
                  <Searchbox />
                  <Newsresults />
                </main>
               
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </NewsProvider>
  );
};

export default App;

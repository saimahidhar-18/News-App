import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Searchbox from './components/Searchbox'
import Newsresults from './components/Newsresults'
import { NewsProvider } from './Context/Newscontext'

const App = () => {
  return (
    <NewsProvider>
    <Router>
    <div className="flex flex-col h-full bg-white">
      <Navbar />
      <main className="container mx-auto px-3  pb-12 ">
      <Searchbox />
      <Newsresults />
      </main>
    
      
      
    </div>
    </Router>
    </NewsProvider>
    
  )
}

export default App

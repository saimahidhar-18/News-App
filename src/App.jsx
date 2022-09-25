import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Searchbox from './components/Searchbox'

const App = () => {
  return (
    <Router>
    <div className="flex flex-col h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-3  pb-12 ">
      <Searchbox />
      </main>
    
      
      
    </div>
    </Router>
  )
}

export default App

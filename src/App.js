import './App.css';
import Header from "./components/Header"
import Footer from "./components/footer"
import Main from "./pages/Main";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Career from './pages/Career';


function App() {
  return (
   <div>
     <Header />
     <Main />
     <About />
     <Career />
     <Project />
     <Skill />
     <Contact />
     <Footer />
   </div>
  )
}

export default App;

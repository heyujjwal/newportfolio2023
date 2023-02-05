
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./component/Navbar";
import Banner from './component/Banner';
// import { Banner } from "./components/Banner";
import Skills from "./component/Skills";
import  Projects from "./component/Project";
// import { Contact } from "./components/Contact";
import Footer  from "./component/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
       <Skills />
       <Projects />
      {/* <Contact /> */}
      <Footer />  
    </div>
  );
}

export default App;
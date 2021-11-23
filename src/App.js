import './App.css';
import Extensions from './components/Extensions';
import Faq from './components/Faq';
import Features from './components/Features';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
         <Navbar />
         <Main />
         <Features />
         <Extensions />
         <Faq />
         <Footer />
         
    </div>
  );
}

export default App;

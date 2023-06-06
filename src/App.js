import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Nav from './components/Nav/Nav';
import Portfolio from './components/Portfolio/Portfolio';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {

  const title = "Natasha's Portfolio";

  return (
    <div className="App">
      <Header />
      <Nav data={title} />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

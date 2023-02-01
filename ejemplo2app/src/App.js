import logo from './logo.svg';
import './App.css';
import Navbar from './components/public/Navbar';
import Main from './components/public/Main';
import Footer from './components/public/Footer';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;

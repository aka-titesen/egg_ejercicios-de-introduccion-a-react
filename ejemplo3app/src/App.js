import logo from './logo.svg';
import './App.css';
import Main from './components/public/Main';

function App() {
  //* Llamo al componenete <Main/> que éste a su vez
  //* llama a dos componentes hijos y le pasamos una variable con su nombre
  //* y éstos lo imprimirán en un etiqueta <p/>
  return (
    <div className="App">
    <Main/>
    </div>
  );
}

export default App;

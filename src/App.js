import logo from './logo.svg';
import './App.css';
import { TranslatorProvider } from './Context/Store';
import Translator from './Translator';

function App() {
  return (
   <>
   <TranslatorProvider>
    <Translator/>
   </TranslatorProvider>
   </>
  );
}

export default App;

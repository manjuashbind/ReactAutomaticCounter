
import './App.css';
import Counter from './Components/Counter';
import Footer from './Components/Footer';
import Header from './Components/Header';




function App() {
  return (
    <div className="App" style={{ boxShadow:'5px 5px 10px grey'}} >
    <Header/>  
    <Counter/>
    <Footer/>
    </div>
  );
}

export default App;

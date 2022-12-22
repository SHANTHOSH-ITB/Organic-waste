import './App.css';
import Navbar from './component/navbar/Navbar';
import Home from './component/home/Home';
import Content from './component/content/Content';
import Footer from './component/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/><br></br>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;

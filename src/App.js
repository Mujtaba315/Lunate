import './styles/App.css';
import Home from './components/Home';
import Header from './components/Header';
import Intro from './components/Intro';
import Slider from './components/Slider';
import News from './components/News';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Intro />
      <Slider />
      <News />
    </>
  );
}

export default App;

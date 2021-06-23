import Header from './Components/Header';
import './App.css';
import SpecificLocation from './Components/SpecificLocation';
import Menu from './Components/Menu';
import FilterSection from './Components/FilterSection';
import DisplayTopic from './Components/DisplayTopic';
import Foods from './Components/Foods';

function App() {
  return (
    <div className="App">
      <Header/>
      <SpecificLocation/>
      <Menu/>
      <FilterSection/>
      <DisplayTopic/>
      <Foods/>
    </div>
  );
}

export default App;

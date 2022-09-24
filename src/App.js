
import './App.css';
import Countries from './Componants/Countries/Countries.js';

function App() {
  return (
    <div className="App">
      <h1>Lets See About <span>Countries</span></h1>
      <div className='countrieslist'>
          <Countries></Countries>
          
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import AllDataChart from './components/all-notes.component';
import MateDataChart from './components/mate-notes.component';


import './components/all-notes.styles.css';
import './components/mate-info-fiz-notes.styles.css';

 function App() {
  return (
    <div className="App">
      <h1 className="h_title">Catalog cu Grafice</h1>
      <h2 className="h_title">1. Note reale</h2>
      <center><div className='line-chart-all-data'>
        <h3 className="h_title">1.1. Notele studentului funcție de index student</h3>
        <AllDataChart/>
        <h3  className="h_title">1.2. Notele studentului domeniul matematica funcție de index student</h3>
        <MateDataChart/>
        <h2 id={"h_title"}><a href='https://nbviewer.jupyter.org/github/hackeRPG195/Note-Prediction-Python/blob/main/note_predicition.ipynb'>2. Predicții</a></h2>
        
      </div></center>

      
      
      
    </div>
  );
  
}

export default App;

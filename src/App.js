import './App.css';
import RUINavbar from './Navbar';
import Status from './status';
import Docker from './docker';
function App() {
  return (
    <div className="App">
      <RUINavbar />
      <div className='Body' style={{ "display": "flex", "flex-flow": "row wrap", "justify-content": "center", "align-items": "baseline" }}>
        <Status />
        <Docker />
      </div>
    </div >
  );
}

export default App;

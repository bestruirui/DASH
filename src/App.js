import './App.css';
import RUINavbar from './Navbar';
import Status from './status';
import Docker from './docker';
function App() {
  return (
    <div className="App">
      <RUINavbar />
      <div className='Body' style={{ "display": "flex", "flex-direction": "row", "flex-wrap": "wrap" }}>
        <Status />
        <Docker />
      </div>
    </div>
  );
}

export default App;

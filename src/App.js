import './App.css';
import  RUINavbar  from './Navbar';
import Status from './status';
import Docker from './docker';
function App() {
  return (
    <div className="App">
        <RUINavbar>

        </RUINavbar>

        <Status>

        </Status>
        <Docker/>
        
    </div>
  );
}

export default App;

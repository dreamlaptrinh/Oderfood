import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from "./components/home"


function App() {
  return (
    <div className="App">
      	<Routes>
          <Route path="/*" element={<Home/>}  activeClassName="active"/>
        </Routes>
    </div>
  );
}

export default App;

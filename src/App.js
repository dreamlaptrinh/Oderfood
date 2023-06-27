import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from "./components/home"
import { initialState } from './contexts/initialState';
import reducer from './contexts/reducer';
import { StateProvider } from './contexts/StateProvider';


function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
    <div className="App">
      	<Routes>
          <Route path="/*" element={<Home/>}  activeClassName="active"/>
        </Routes>
    </div>
    </StateProvider>
  );
}

export default App;

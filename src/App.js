import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import First from './components/First/First';
import Fourth from './components/Fourth/Fourth';
import Second from './components/Second/Second';
import Third from './components/Third/Third';
function App() {
  return (
    <div className="App">
<Router>
      <Routes>
        <Route path="/" element={<First />}/>
          <Route path="/second" element={<Second/>}/>
          <Route path="/third" element={<Third />}/>
          <Route path="/fourth" element={<Fourth/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;

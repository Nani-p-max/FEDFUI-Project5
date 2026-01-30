import { Routes, Route, Link } from "react-router-dom";
import Page1 from "./page1.jsx";
import Page2 from "./page2.jsx";
import StudentApp from "./StudentApp.jsx";

function App() {
  return (
    <div>
      <nav>
      
      </nav>

      <Routes>
        <Route path="/" element={<StudentApp />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<StudentApp />} />
      </Routes>
    </div>
  );
}

export default App;
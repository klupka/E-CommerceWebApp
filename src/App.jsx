// CSS Imports
import "./css/general.css";
// Library imports
import { Route, Routes } from "react-router-dom";
// Page imports
import Home from "./pages/Home";
// Component Imports
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </>
    );
}

export default App;

import { Routes, Route } from "react-router-dom";


import { ContextProvider } from "./context/AppContext";
import Login from './pages/Login'
import Home from "./pages/Home";

const App = () => {
  return (
    <ContextProvider>
      <div className="h-screen flex flex-row gap-5 py-3 px-4">
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </ContextProvider>
  );
};

export default App;

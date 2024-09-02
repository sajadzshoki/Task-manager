import { Routes, Route } from "react-router-dom";


import { ContextProvider } from "./context/AppContext";
import Login from './pages/Login'
import Home from "./pages/Home";

const App = () => {
  return (
    <ContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </ContextProvider>
  );
};

export default App;

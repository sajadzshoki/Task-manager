import { Routes, Route } from "react-router-dom";
import { ContextProvider } from "./context/NotesContext";

import Login from "./pages/Login";
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

import { Routes, Route } from "react-router-dom";
import { Feed, Sidebar } from "./components";

import { ContextProvider } from "./context/AppContext";

const App = () => {
  return (
    <ContextProvider>
      <div className="h-screen flex flex-row gap-5 py-3 px-4">
        <Sidebar
        />

        <Routes>
          <Route path="/" element={<Feed />} />
        </Routes>
      </div>
    </ContextProvider>
  );
};

export default App;

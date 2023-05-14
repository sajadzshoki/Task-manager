import { Routes, Route } from "react-router-dom";
import { Feed, Sidebar } from "./components";
// import  { useState } from 'react'


const App = () => {
  // const [selectedCategory,setSelectedCategory] = useState<string>("Dashboard");
  return (
    <div className="h-screen flex flex-row py-3 px-4 gap-5">
      <Sidebar 
      // setSelectedCategory={setSelectedCategory}
      // selectedCategory={selectedCategory}      

      />

      <Routes>
        <Route path="/" element={<Feed />} />
      </Routes>
    </div>
  );
};

export default App;

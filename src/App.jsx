import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import DevicesManager from "./pages/DevicesManager";
import History from "./pages/History";


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Home" element={<Home />}></Route>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/DevicesManager" element={<DevicesManager/>}></Route>
      <Route path="/History" element={<History/>}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App

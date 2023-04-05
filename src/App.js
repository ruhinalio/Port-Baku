import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Index";
import Dining from "./pages/Dining/Index";
import Portbaku from "./pages/PortBaku/Index";
import Footer from "./components/Footer/Index";
import Test from "./components/Test";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={<Portbaku />} />
        <Route path="/dining" element={<Dining />} />
      </Routes>
    </div>
  );
}

export default App;

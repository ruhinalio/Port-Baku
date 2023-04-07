import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Index";
import Footer from "./components/Footer/Index";

// pages
import Dining from "./pages/Dining/Index";
import Shop from "./pages/Shop/Index"
import Portbaku from "./pages/PortBaku/Index";
import Test from "./components/Test";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Portbaku />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;

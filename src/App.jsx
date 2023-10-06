import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import NotFound404 from "./components/NotFound404";
import Products from "./components/Products";
import RegisterAccount from "./components/RegisterAccount";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<NotFound404 />} />
        </Route>
        <Route>
          <Route path="/register" element={<RegisterAccount />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

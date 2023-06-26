import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCustomers from "./components/AddCustomers";
import AddVendors from "./components/AddVendors";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="addcustomers" element={<AddCustomers />} />
        <Route path="addvendors" element={<AddVendors />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

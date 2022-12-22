import "./App.css";
import AddProduct from "./components/Crud/AddProduct/AddProduct";
import Navbar from "./components/Navbar/Navbar.jsx";
import MyRoutes from "./MyRoutes/MyRoutes";

function App() {
  const AddProduct = () => {};
  return (
    <div className="App">
      <Navbar />
      <MyRoutes />
    </div>
  );
}

export default App;

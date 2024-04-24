import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./HomePage/Home.js";
import Books from "./Pages/Books";
// import Movies from "./Pages/Movies";
import Art from "./Pages/Art";
import ProductDetail from "./Product/ProductDetail.js";
import Cart from "./Pages/Cart";
import ProductContextProvider from "./ProdContext/ProductContext";

function App() {
  return (
    <ProductContextProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}>
            {/* <Route index path="/movies" element={<Movies />} /> */}
            <Route index element={<Books />} />
            <Route path="/art" element={<Art />} />
            <Route path="/productdetail" element={<ProductDetail />}>
              <Route
                path="/productdetail/:ProductId"
                element={<ProductDetail />}
              />
            </Route>
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </div>
    </ProductContextProvider>
  );
}

export default App;

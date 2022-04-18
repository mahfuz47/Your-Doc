import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home/Home";
import Services from "./Pages/Home/Services/Services";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Reviews from "./Pages/Reviews/Reviews";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/service" element={<Services></Services>}></Route>
        {/* <Route
          path="/service/:serviceId"
          element={<ServiceDetail></ServiceDetail>}
        ></Route> */}
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        {/* <Route path="/login" element={<Login></Login>}></Route> */}
        {/* <Route path="/register" element={<Register></Register>}></Route> */}
        {/* <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route> */}
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

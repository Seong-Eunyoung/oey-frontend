import { BrowserRouter, Routes, Route } from "react-router-dom";

import "src/App.css";
import Login from 'src/pages/Login';
import Menu from 'src/pages/Menu';
import People from "./pages/People";
import Wish from 'src/pages/Wish';
import Lib from 'src/pages/Lib';
import WishList from 'src/pages/WishList';
// import EditorPage from 'src/components/EditorPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/people" element={<People />}></Route>
          <Route path="/wish" element={<Wish />}></Route>
          <Route path="/lib" element={<Lib />}></Route>
          {/* <Route path="/page" element={<EditorPage />}></Route> */}
          <Route path="/wishlist" element={<WishList />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

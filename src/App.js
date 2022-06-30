import Home from "./pages/Home";
import Recipepage from "./pages/Recipepage";
import RecipeList from "./components/RecipeList";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryName" element={<RecipeList/>} />
        <Route path="/category/:categoryName/:id" element={<Recipepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

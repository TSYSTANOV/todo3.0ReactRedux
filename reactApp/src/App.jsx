import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Posts } from "./pages/Posts";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:someParam" element={<About />} />
          <Route path="about" element={<About />} />
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

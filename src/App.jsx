import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="messages">
              <Route index element={<List />} />
              <Route path=":coustmerId" element={<Single />} />
              <Route path="new-message" element={<New />} />
            </Route>
            <Route path="projects">
              <Route index element={<List />} />
              <Route path=":projectId" element={<Single />} />
              <Route path="new-project" element={<New />} />
            </Route>
            <Route path="blogs">
              <Route index element={<List />} />
              <Route path=":postId" element={<Single />} />
              <Route path="new-post" element={<New />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

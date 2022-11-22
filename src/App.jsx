import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import ListClients from "./pages/clients/list/ListClients";
import ListMessages from "./pages/messages/list/ListMessages";
import ListProjects from "./pages/projects/list/ListProjects";
import ListBolgs from "./pages/blogs/list/ListBolgs";
import ListSettings from "./pages/settings/list/ListSettings";
import SingleClient from "./pages/clients/single/SingleClient";
import SingleMessage from "./pages/messages/single/SingleMessage";
import SingleProject from "./pages/projects/single/SingleProject";
import SinglePost from "./pages/blogs/single/SinglePost";
import Profile from "./pages/profile/Profile";
import SetUp from "./pages/settings/single/SetUp";
import NewClient from "./pages/clients/new/NewClient";
import NewProject from "./pages/projects/new/NewProject";
import NewPost from "./pages/blogs/new/NewPost";
import DashboardLayout from "./components/layouts/DashboardLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Home />} />
            <Route path="clients">
              <Route index element={<ListClients />} />
              <Route path=":clientId" element={<SingleClient />} />
              <Route path="new-client" element={<NewClient />} />
            </Route>
            <Route path="messages">
              <Route index element={<ListMessages />} />
              <Route path=":coustmerId" element={<SingleMessage />} />
            </Route>
            <Route path="projects">
              <Route index element={<ListProjects />} />
              <Route path=":projectId" element={<SingleProject />} />
              <Route path="new-project" element={<NewProject />} />
            </Route>
            <Route path="blogs">
              <Route index element={<ListBolgs />} />
              <Route path=":postId" element={<SinglePost />} />
              <Route path="new-post" element={<NewPost />} />
            </Route>
            <Route path="profile" element={<Profile />} />
            <Route path="settings">
              <Route index element={<ListSettings />} />
              <Route path=":setUpId" element={<SetUp />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

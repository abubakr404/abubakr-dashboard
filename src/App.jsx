import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import ListClients from "./pages/clients/list/ListClients";
import ListMessages from "./pages/messages/list/ListMessages";
import ListProjects from "./pages/projects/list/ListProjects";
import ListBlogs from "./pages/blogs/list/ListBlogs";
import SettingsMenu from "./pages/settings/list/SettingsMenu";
import SingleClient from "./pages/clients/single/SingleClient";
import SingleMessage from "./pages/messages/single/SingleMessage";
import SingleProject from "./pages/projects/single/SingleProject";
import SinglePost from "./pages/blogs/single/SinglePost";
import Profile from "./pages/profile/Profile";
import NewClient from "./pages/clients/new/NewClient";
import NewProject from "./pages/projects/new/NewProject";
import NewPost from "./pages/blogs/new/NewPost";
import SetupHero from "./pages/settings/single/hero/SetupHero";
import SetupAbout from "./pages/settings/single/about/SetupAbout";
import SetupContact from "./pages/settings/single/contact/SetupContact";
import GeneralSetup from "./pages/settings/single/general/GeneralSetup";
import Layout from "./components/layouts/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
const App = () => {
  const { currentMode } = useContext(ThemeContext);

  return (
    <div className={currentMode ? "app toggleMode" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
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
              <Route index element={<ListBlogs />} />
              <Route path=":postId" element={<SinglePost />} />
              <Route path="new-post" element={<NewPost />} />
            </Route>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<SettingsMenu />}>
              <Route index element={<GeneralSetup />} />
              <Route path="hero" element={<SetupHero />} />
              <Route path="about" element={<SetupAbout />} />
              <Route path="contact" element={<SetupContact />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

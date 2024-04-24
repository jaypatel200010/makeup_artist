import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Website/Pages/Home";
import Aboutus from "./Website/Pages/Aboutus";
import Makeup_artist from "./Website/Pages/Makeup_artist";
import Contact from "./Website/Pages/Contact";
import Blog from "./Website/Pages/Blog";
import Dashboard from "./Admin/Pages/Dashboard";
import Manage_artist from "./Admin/Pages/Manage_artist";
import Add_blog from "./Admin/Pages/Add_blog";
import Manage_blog from "./Admin/Pages/Manage_blog";
import Manage_contact from "./Admin/Pages/Manage_contact";
import Artist_Login from "./Website/Pages/Artist_Login";
import Signup from "./Website/Pages/Signup";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                </>
              }
            ></Route>
            <Route
              path="/about"
              element={
                <>
                  <Aboutus />
                </>
              }
            ></Route>
            <Route
              path="/makup_artist"
              element={
                <>
                  <Makeup_artist />
                </>
              }
            ></Route>
            <Route
              path="/contact"
              element={
                <>
                  <Contact />
                </>
              }
            ></Route>
            <Route
              path="/blog"
              element={
                <>
                  <Blog />
                </>
              }
            ></Route>
            <Route
              path="/artist-login"
              element={
                <>
                  <Artist_Login />
                </>
              }
            ></Route>
            <Route
              path="/sign-up"
              element={
                <>
                  <Signup />
                </>
              }
            ></Route>

            {/* Admin routing */}
            <Route
              path="/dashboard"
              element={
                <>
                  <Dashboard />
                </>
              }
            ></Route>
            <Route
              path="/artists"
              element={
                <>
                  <Manage_artist />
                </>
              }
            ></Route>
            <Route
              path="/add-blog"
              element={
                <>
                  <Add_blog />
                </>
              }
            ></Route>
            <Route
              path="/manage_blog"
              element={
                <>
                  <Manage_blog />
                </>
              }
            ></Route>
            <Route
              path="/manage_contact"
              element={
                <>
                  <Manage_contact />
                </>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

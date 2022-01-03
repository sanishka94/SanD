import Layout from "./components/Layout";
import Home from "./screens/Home";
import Work from "./screens/Work";
import Education from "./screens/Education";
import Projects from "./screens/Projects";

import "./App.css";
import { useState } from "react";

function App() {
  const [curPage, setCurPage] = useState("home");

  const pageHandler = (newPage) => {
    setCurPage(newPage);
  };

  return (
    <Layout pageHandler={pageHandler}>
      {curPage === "home" && <Home pageHandler={pageHandler} />}
      {curPage === "work" && <Work pageHandler={pageHandler} />}
      {curPage === "education" && <Education pageHandler={pageHandler} />}
      {curPage === "projects" && <Projects pageHandler={pageHandler} />}
    </Layout>
  );
}

export default App;

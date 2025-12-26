import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyProjects from "./pages/MyProjects";
import View from "./pages/View";
import Community from "./pages/Community";
import Preview from "./pages/Preview";
import Projects from "./pages/Projects";
import Pricing from "./pages/Pricing";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<MyProjects />} />
        <Route path="/projects/:projectId" element={<Projects />} />
        <Route path="/view/:projectId" element={<View />} />
        <Route path="/preview/:projectId" element={<Preview />} />
        <Route path="/preview/:projectId/:versionId" element={<Preview />} />
        <Route path="/community" element={<Community />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </div>
  );
};

export default App;

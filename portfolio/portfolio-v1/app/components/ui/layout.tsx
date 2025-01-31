import Contact from "../pages/contact";
import Hero from "../pages/hero";
import Intro from "../pages/intro";
import Projects from "../pages/projects";

const Layout = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Intro />
      {/* <Projects />
      <Contact /> */}
    </div>
  );
};

export default Layout;

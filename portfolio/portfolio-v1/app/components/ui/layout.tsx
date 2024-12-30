import Contact from "../pages/contact";
import Hero from "../pages/hero";
import Intro from "../pages/intro";
import Projects from "../pages/projects";

const Layout = () => {
  return (
    <div className="flex flex-col items-center font-bebas">
      <div className="max-w-[1840px] flex flex-col">
        <Hero />
        <Intro />
        {/* <Projects />
      <Contact /> */}
      </div>
    </div>
  );
};

export default Layout;

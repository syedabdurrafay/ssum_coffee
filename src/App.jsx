import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import About from "./components/About.jsx";
import Menu from "./components/Menu.jsx";
import BusyTimes from "./components/BusyTimes.jsx";
import Reviews from "./components/Reviews.jsx";
import Visit from "./components/Visit.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Menu />
        <BusyTimes />
        <Reviews />
        <Visit />
      </main>
      <Footer />
    </>
  );
}

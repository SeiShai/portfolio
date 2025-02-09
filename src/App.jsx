import Nav from "./components/nav";
import Circle from "./components/circle";
import Hero from "./components/hero";
import Cta from "./components/cta";
import Exp from "./components/exp";

function App() {
  return (
    <>
      <div className="relative flex flex-col items-center h-full w-full bg-[#1E1D1F] overflow-y-auto">
        {/* Faded Circular Glow in Upper Left */}
        <Circle />

        {/* Navbar */}
        <Nav />

        {/* CTA */}
        <Cta />

        {/* Hero Section */}
        <Hero />

        {/* Experience Section (Now Below Hero) */}
        <Exp />
      </div>

    </>
  );
}

export default App;

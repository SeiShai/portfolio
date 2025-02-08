import { useState } from "react";
import Nav from "./components/nav";
import Circle from "./components/circle";
import Hero from "./components/hero";
import Cta from "./components/cta";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="relative h-screen w-screen bg-[#1E1D1F] p-0 m-0">
        {/* Faded Circular Glow in Upper Left */}
        <Circle />

        {/* Navbar and Content */}
        <Nav />

        {/* Hero */}
        <Hero />

        {/* CTA */}
        <div className="absolute bottom-4 right-4 transform -translate-x-1/2 flex flex-col gap-4">
          <Cta />
        </div>

      </div>
    </>
  );
}

export default App;

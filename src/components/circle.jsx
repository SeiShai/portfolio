import { useState } from "react";

function Circle() {
    const [count, setCount] = useState(0);

    return (
        <div className="absolute -top-1/2 -left-1 w-[1200px] h-[1200px] pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_0%,_rgba(30,29,31,0)_70%)]"></div>
        </div>
    );
}

export default Circle;
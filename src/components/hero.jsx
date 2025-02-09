import profile from "../assets/images/png/profile.png";

function Hero() {

    return (
        <div className="flex items-center p-24 w-full h-screen">
            {/* Text Section */}
            <div className="flex flex-col items-start justify-center space-y-6 w-full md:w-2/3">
                <h1 className="text-4xl md:text-6xl text-white">Welcome to my <span className="text-[#D8A7B1]">Portfolio!</span></h1>
                <p className="text-xl md:text-2xl text-white text-justify w-3/4">
                    Hi, I'm <span className="text-[#D8A7B1]">Shai</span>, a passionate computer engineering student with a strong interest in web development, cloud computing, and system development. I love building efficient and user-friendly websites,<span className="text-[#D8A7B1]"> through Flask, React, and SQL.</span><br /><br />
                    With experience in <span className="text-[#D8A7B1]">front-end and back-end development</span>, I enjoy tackling challenges and continuously learning new technologies to improve my skills. My projects reflect my curiosity, problem-solving mindset, and dedication to clean, functional design.<br /><br />
                    Take a look around, and feel free to connect with me!
                </p>
            </div>

            {/* Image Section */}
            <div className="flex">
                <img src={profile} alt="profile" className=" rounded-full object-cover " />
            </div>
        </div>
    );
}

export default Hero;

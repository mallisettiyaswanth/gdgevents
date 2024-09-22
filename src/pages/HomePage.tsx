import { Outlet } from "react-router-dom";
// import BgLogo from "./../assets/logo.png";

const HomePage = () => {
  return (
    <div className="relative min-h-screen w-full">
      <div
        className="absolute inset-0 bg-gradient-to-b from-blue-500 to-indigo-600 text-white"
        style={{
          // backgroundImage: `url(${BgLogo})`,
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          // opacity: 0.1,
          zIndex: 1,
        }}
      />

      <div className="relative z-10 flex  min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;

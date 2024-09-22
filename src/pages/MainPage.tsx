import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div className="relative z-10 w-full">
      <section className="flex flex-col min-h-screen items-center justify-center text-center py-20 px-4 bg-gradient-to-b from-blue-500 to-indigo-600 text-white">
        <h2 className="text-9xl font-bold mb-4">GDG Event Form</h2>
        <p className="text-lg max-w-2xl mb-8">
          Join a vibrant global community of developers, designers, and tech
          enthusiasts who are passionate about creating impactful projects,
          learning cutting-edge technologies, and collaborating with like-minded
          individuals. Powered by Google Developer Groups (GDG), we aim to build
          a collaborative space for everyone to learn and grow.
        </p>
        <Button
          className="px-8 py-3 text-lg bg-white text-blue-500 hover:bg-gray-200"
          onClick={() => navigate("/events")}
        >
          Discover Upcoming Events
        </Button>
      </section>

      <section className="py-16 px-4 bg-white text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">
          About Google Developer Groups (GDG)
        </h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-600">
          Google Developer Groups (GDG) is a global network of developer
          communities who are passionate about learning new technologies,
          sharing knowledge, and building innovative products. Whether you’re a
          beginner or an experienced developer, GDG offers a supportive
          environment to grow your skills, collaborate on projects, and make
          meaningful connections.
        </p>
      </section>

      <section className="py-16 px-4 bg-indigo-500 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          Be part of the GDG community! Whether you're looking to learn, teach,
          or collaborate on amazing projects, you'll find a place here. Get
          involved and make an impact in the world of technology.
        </p>
        <Button className="px-8 py-3 text-lg bg-white text-indigo-500 hover:bg-gray-200">
          Join Now
        </Button>
      </section>
    </div>
  );
};

export default MainPage;

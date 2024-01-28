import Hero from "@/components/Hero"
import Service from "@/components/Service";
import GetStarted from "@/components/GetStarted";
import Review from "@/components/Review";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      <GetStarted />
      <Review />
      <Projects />
      <Blog />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

import "./App.css";
import AboutUs from "./components/uiComponents/aboutUs/AboutUs";
import Clients from "./components/uiComponents/clients/Clients";
import ContactUs from "./components/uiComponents/contactUs/ContactUs";
import CustomNavBar from "./components/uiComponents/customNavBar/CustomNavBar";
import Footer from "./components/uiComponents/footer/Footer";
import HeroSection from "./components/uiComponents/heroSection/HeroSection";
import Process from "./components/uiComponents/process/Process";
import Projects from "./components/uiComponents/projects/Projects";
import Skills from "./components/uiComponents/skills/Skills";
import { Toaster } from "react-hot-toast";
function App() {
  //  const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsVisible(true);
  //   }, 500);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div style={{ backgroundColor: "black" }}>
      <CustomNavBar />
      <HeroSection />
      <AboutUs />
      <Skills />
      <Process />
      <Projects />
      <Clients />
      <ContactUs />
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />;
    </div>
  );
}

export default App;

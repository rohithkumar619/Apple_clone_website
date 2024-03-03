import "./App.css";
import Header from "../src/components/Header";
import Hero from "../src/components/Hero/Hero";
import Iphone from "../src/components/Iphone/Iphone";
import Iphone15pro from "./components/Iphone15pro/Iphone15pro";
import Gadgets from "../src/components/Gadgets/Gadgets";
import Gadgets2 from "../src/components/Gadgets2/Gadgets2";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import Footer from "./components/Footer/Footer";
import Footer2 from "../src/components/Footer/Footer2";
function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Iphone15pro />
      <Iphone />
      <Gadgets />
      <Gadgets2 />
      <ImageSlider />
      <Footer />
      <Footer2 />
    </div>
  );
}

export default App;

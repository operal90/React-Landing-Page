import Content from "./components/Content";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Main_content from "./components/Main_content";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonial";

function App() {
  return (
    <div className="App">
   <Navbar />
   <Main />
   <Content />
   <Testimonials />
   <Main_content />
   <Footer />
     
    </div>
  );
}

export default App;

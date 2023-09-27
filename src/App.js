import './App.css';
import Footer from './components/Footer/Footer';
import { Hero } from './components/Hero/Hero';
import Plan from './components/Plan/Plan';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Testimonial from './components/Testimonials/Testimonial';
import Join from './components/join/Join';


function App() {
  return (
    <div className="App">
      <Hero />
      <Programs/>
      <Reasons />
      <Plan/>
      <Testimonial />
      <Join />
      <Footer />
    </div>
  );
}

export default App;

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { About } from "./components/About";
// import { Services } from "./components/Services";
import { GlobalSupply } from "./components/GlobalSupply";
// import { WhyChooseUs } from "./components/WhyChooseUs";
import { ArenaDashboard } from "./components/ArenaDashboard";
import { Competitors } from "./components/Competitors";
import { Investors } from "./components/Investors";
import { Projects } from "./components/Projects";
import { Businesses } from "./components/Businesses";
import { Testimonials } from "./components/Testimonials";
import { CTA } from "./components/CTA";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-ink-900">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <ArenaDashboard />
        <Competitors />
        <Businesses />
        <GlobalSupply />
        {/* <Services /> */}
        {/* <WhyChooseUs /> */}
        <Projects />
        <Investors />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

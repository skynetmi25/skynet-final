import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="bg-[#0F0F0F] text-[#E0E0E0] min-h-screen font-sans">
        <header className="bg-[#1A1A1A] p-4 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-3">
  <img src="/skynet-logo.png" alt="SkyNet Logo" className="h-10 w-auto" />
</div>
          <nav>
            <ul className="flex space-x-4 text-sm font-medium">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/booking">Booking</Link></li>
            </ul>
          </nav>
        </header>

        <main className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 px-4">
      <h2 className="text-5xl font-extrabold text-white mb-4 leading-tight">Protect What Matters</h2>
      <p className="text-lg text-[#C0C0C0] max-w-xl mb-6">SkyNet provides professional security camera installations, network systems, and low-voltage solutions for homes and businesses.</p>
      <div className="flex gap-4">
        <Link to="/booking" className="bg-[#E10600] text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition">Request a Quote</Link>
        <Link to="/services" className="text-[#E10600] border border-[#E10600] px-6 py-3 rounded-lg font-semibold hover:bg-[#1A1A1A] transition">See Our Services</Link>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="space-y-4">
      <h2 className="text-3xl font-semibold mb-2">Our Services</h2>
      <ul className="list-disc ml-5 space-y-1">
        <li>Camera Installation (Residential & Commercial)</li>
        <li>Network Setup & Troubleshooting</li>
        <li>Audio & Video System Installation</li>
        <li>Low Voltage Cable Installations</li>
      </ul>
    </section>
  );
}

function About() {
  return (
    <section className="space-y-2">
      <h2 className="text-3xl font-semibold mb-2">About SkyNet</h2>
      <p>I'm Marty, the CEO of SkyNet. I bring years of hands-on experience in camera systems, networking, and audio setups. At SkyNet, we’re committed to delivering clean, professional work tailored to each client’s unique needs. Your security and satisfaction are our top priorities.</p>
    </section>
  );
}

function Projects() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Our Projects</h2>
      <p>Coming soon: photos and details of our latest installations.</p>
    </section>
  );
}

function Contact() {
  return (
    <section className="space-y-2">
      <h2 className="text-3xl font-semibold mb-2">Contact Us</h2>
      <p>Email: info@skynetservices.com</p>
      <p>Phone: (555) 123-4567</p>
      <p>Follow us on social media.</p>
    </section>
  );
}

function Booking() {
  return (
    <section className="space-y-2">
      <h2 className="text-3xl font-semibold mb-2">Book a Consultation</h2>
      <p>Schedule your service through our calendar below:</p>
      <div className="mt-4">
        <iframe
          src="https://calendly.com/your-link"
          width="100%"
          height="600"
          frameBorder="0"
          title="Booking Calendar"
        ></iframe>
      </div>
    </section>
  );
}

export default App;

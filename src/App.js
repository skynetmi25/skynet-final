import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen font-sans">
        <header className="bg-red-600 p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">SkyNet</h1>
          <nav>
            <ul className="flex space-x-4">
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
  return <h2 className="text-4xl font-bold">Welcome to SkyNet</h2>;
}
function Services() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Services</h2>
      <ul className="space-y-2">
        <li>• Camera Installations</li>
        <li>• Network Setup</li>
        <li>• Audio Systems</li>
        <li>• Low Voltage Wiring</li>
      </ul>
    </section>
  );
}
function About() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">About SkyNet</h2>
      <p>I'm Marty, the CEO of SkyNet. I bring years of hands-on experience in camera systems, networking, and audio setups. At SkyNet, we’re committed to delivering clean, professional work tailored to each client’s unique needs. Your security and satisfaction are our top priorities.</p>
    </section>
  );
}
function Projects() {
  return <p>Gallery coming soon...</p>;
}
function Contact() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>
      <p>Email: info@skynetservices.com</p>
      <p>Phone: (555) 123-4567</p>
    </section>
  );
}
function Booking() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Book a Consultation</h2>
      <iframe
        src="https://calendly.com/your-link"
        width="100%"
        height="600"
        frameBorder="0"
        title="Booking Calendar"
      ></iframe>
    </section>
  );
}
export default App;

import { useEffect } from 'react';
import photo1 from '../assets/media/photo1.jpg';
import photo2 from '../assets/media/photo2.jpg';
import photo3 from '../assets/media/photo3.jpg';
import photo4 from '../assets/media/photo4.jpg';

const Home = () => {
  // Smooth scroll function for the scroll-down button
  const scrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  };

  // Add jQuery functionality for mobile menu
  useEffect(() => {
    // This is handled by the Navbar component now using React state
  }, []);

  return (
    <>
      <section id="home">
        <h2>WELCOME TO THE AERO CLUB OF NIT-A, <span className="anima">ANIMA</span></h2>
        <p>"SINCE 2017"</p>
        <a href="#about" onClick={scrollToAbout}>
          <div className="scroll-down"></div>
        </a>
      </section>

      <section id="about">
        <h1>About Our Club</h1>
        <h3>"Design, build, soar—our passion takes flight in every creation"</h3>
        <div className="abo-box">
          <p>
            Welcome to our Aero Modeling Club, a vibrant community where aviation enthusiasts of all levels converge
            to explore the exhilarating world of miniature flight. Within our creative haven, novices and seasoned
            builders alike discover a supportive environment fostering innovation and skill development. From
            conceptualization to meticulous construction, our members find joy in translating their aeronautical
            dreams into tangible, airborne masterpieces. Through workshops, collaborative projects, and shared
            experiences, we celebrate not just the technical intricacies of aero modeling, but also the spirit of
            camaraderie that defines our club. Join us as we collectively soar beyond the clouds, crafting a
            tapestry of imagination, innovation, and endless possibilities in the vast skies of aero modeling.
          </p>
        </div>
      </section>

      <section id="about1">
        <h1>Achievements</h1>
        <div className="slider">
          <figure>
            <div className="slide">
              <img src={photo1} alt="Achievement 1" />
            </div>
            <div className="slide">
              <img src={photo2} alt="Achievement 2" />
            </div>
            <div className="slide">
              <img src={photo3} alt="Achievement 3" />
            </div>
            <div className="slide">
              <img src={photo4} alt="Achievement 4" />
            </div>
          </figure>
        </div>
      </section>
    </>
  );
};

export default Home;

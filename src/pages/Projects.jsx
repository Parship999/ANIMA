import img1 from '../assets/media/img1.jpg';
import img2 from '../assets/media/img2.jpg';
import img3 from '../assets/media/img3.png';
import img4 from '../assets/media/img4.jpg';
import img5 from '../assets/media/img5.jpg';
import img6 from '../assets/media/img6.jpg';

const Projects = () => {
  return (
    <section id="project">
      <h2>Our Projects</h2>
      <div className="project-box">
        <div className="projects">
          <img src={img1} alt="Project 1" />
        </div>
        <div className="projects">
          <img src={img2} alt="Project 2" />
        </div>
        <div className="projects">
          <img src={img3} alt="Project 3" />
        </div>
        <div className="projects">
          <img src={img4} alt="Project 4" />
        </div>
        <div className="projects">
          <img src={img5} alt="Project 5" />
        </div>
        <div className="projects">
          <img src={img6} alt="Project 6" />
        </div>
      </div>
    </section>
  );
};

export default Projects;

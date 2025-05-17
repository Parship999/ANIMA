import team1 from '../assets/media/1t.jpg';
import team2 from '../assets/media/2t.jpg';
import team3 from '../assets/media/3t.jpg';
import team4 from '../assets/media/4t.jpg';
import team5 from '../assets/media/5t.jpg';
import team6 from '../assets/media/6t.jpg';
import team7 from '../assets/media/7t.jpg';
import team8 from '../assets/media/8t.jpg';
import team9 from '../assets/media/9t.jpg';
import team10 from '../assets/media/10t.jpg';

const Team = () => {
  return (
    <section id="team">
      <h2>Our Team</h2>
      <p>"2022-2023"</p>
      <div className="team-box">
        <div className="teams">
          <img src={team1} alt="Team Member 1" />
        </div>
        <div className="teams">
          <img src={team2} alt="Team Member 2" />
        </div>
        <div className="teams">
          <img src={team3} alt="Team Member 3" />
        </div>
        <div className="teams">
          <img src={team4} alt="Team Member 4" />
        </div>
        <div className="teams">
          <img src={team5} alt="Team Member 5" />
        </div>
        <div className="teams">
          <img src={team6} alt="Team Member 6" />
        </div>
        <div className="teams">
          <img src={team7} alt="Team Member 7" />
        </div>
        <div className="teams">
          <img src={team8} alt="Team Member 8" />
        </div>
        <div className="teams">
          <img src={team9} alt="Team Member 9" />
        </div>
        <div className="teams">
          <img src={team10} alt="Team Member 10" />
        </div>
      </div>
    </section>
  );
};

export default Team;

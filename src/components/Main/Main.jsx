import "./Main.css";
import childCareImg from "../../assets/childcare-pic.jpg";
import { useNavigate } from "react-router-dom";

function Main() {


  const navigate = useNavigate();


function handleResultClick(path) {
  navigate(path);
}


  return (
    <main className="main">
      <section className="main__intro">
        <img
          src={childCareImg}
          alt="Image of children in daycare"
          className="main__intro-img"
        />
        <div className="main__intro-overlay">
          <div className="main__intro-content">
            <p className="main__intro-title">
              First Connections Coalition for Early Success
            </p>
            <h1 className="main__intro-heading">
              Promoting Quality in Early Childhood Care and Education
            </h1>
          </div>
        </div>
      </section>
      <div className="main__intro-box"></div>
      <section className="main__childcare">
        <h2 className="main__childcare-heading">
          We make finding Childcare a Cinch
        </h2>
        <div className="main__childcare-cards">
          <div className="main__childcare-card main__childcare-red">
            <img
              src="https://firstconnectionsva.yobo.dev/wp-content/uploads/2023/07/Group_171.png"
              alt="icon"
              className="main__childcare-icon"
            />
            <p className="main__childcare-title">For Parents</p>
            <p className="main__childcare-text">
              Childcare resources, food access, and workshop series information
            </p>
            <button onClick={() => handleResultClick("/parents")} className="main__childcare-btn" >Learn more</button>
          </div>
          <div className="main__childcare-card main__childcare-green">
            <img
              src="https://firstconnectionsva.yobo.dev/wp-content/uploads/2023/07/Group_191.png"
              alt="icon"
              className="main__childcare-icon"
            />
            <p className="main__childcare-title">For Providers</p>
            <p className="main__childcare-text">
              Online trainings, upcoming training opportunities, and
              certifications offered
            </p>
            <button onClick={() => handleResultClick("/partners")} className="main__childcare-btn btn-green">
              Learn more
            </button>
          </div>
        </div>
      </section>
      <section className="main__support">
        <p className="main__support-heading">We are here to help!</p>
        <p className="main__support-subtext">
          Weather you are a parent looking for childcare, a Director looking for
          trainings,<br></br> or a partner looking to connect to services we can help you
        </p>
        <div className="main__support-cards">
          <div className="main__support-card">
              <img
                src="https://firstconnectionsva.yobo.dev/wp-content/uploads/2023/07/Group_251.png"
                alt="Toddlers coloring surrounded by toys"
                className="main__support-img"
              />
            <div className="main__support-content">
            <img
              src="https://firstconnectionsva.yobo.dev/wp-content/uploads/2023/07/Group_41.png"
              alt="icons of shapes"
              className="main__support-icon"
            />
            <p className="main__support-title">Childcare Tips</p>
            <p className="main__support-text">
              <strong>Learn More</strong>
              <br></br>
              Experts provide you with the information you need to make the
              right decisions in supporting young minds.
            </p>
            </div>
          </div>
          <div className="main__support-card">
            <div className="main__support-content">
            <img
              src="https://firstconnectionsva.yobo.dev/wp-content/uploads/2023/07/Group_111.png"
              alt="icons of shapes"
              className="main__support-icon"
            />
            <p className="main__support-title">Online Training</p>
            <p className="main__support-text">
              <strong>Learn More</strong>
              <br></br>Let us connect you with tools to enrich your skillset.
            </p>
            </div>
            <img
              src="https://firstconnectionsva.yobo.dev/wp-content/uploads/2023/07/Group_261.png"
              alt="Children smiling"
              className="main__support-img"
            />
          </div>
        </div>
      </section>
      <div className="main__subscribe-box"><div className="main__subscribe-overlay"></div></div>
    </main>
  );
}

export default Main;

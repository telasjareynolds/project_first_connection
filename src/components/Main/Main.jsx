import "./Main.css";
import childCareImg from "../../assets/childcare-pic.jpg"

function Main() {
  return (
    <main className="main">
      <section className="main__intro">
        <img src={childCareImg} alt="Image of children in daycare" className="main__intro-img" />
        <div className="main__intro-overlay">
          <div className="main__intro-content">
          <p className="main__intro-title">
            First Connections Coalition for Early Success
          </p>
          <h1 className="main__intro-heading">
            Promoting Quality in Early Childhood Care and Education
          </h1>
          <button className="main__intro-btn">Read more</button>
          </div>
        </div>
      </section>
        <div className="main__intro-box"></div>
    </main>
  );
}

export default Main;

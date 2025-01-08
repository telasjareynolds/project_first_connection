import "./Contact.css";

function Contact() {
  return (
    <main className="contact">
      <section className="contact__intro">
        <img
          src="https://firstconnectionsva.yobo.dev/wp-content/uploads/2023/09/Group-29@2x.png"
          className="contact__intro-img"
        />
        <div className="contact__intro-overlay">
          <div className="contact__intro-content">
            <p className="contact__intro-title">Contact</p>
            <h1 className="contact__intro-heading">
              First Connections VA (formerly Smart Beginnings SE) is located in
              the Appomattox <br></br>
              Regional Library in Hopewell, Virginia.
            </h1>
          </div>
        </div>
      </section>
      <section className="contact__info">
        <div className="contact__info-cards">
        <div className="contact__info-card">
          <h3 className="contact__info-card-heading">Reach us here</h3>
          <p className="contact__info-card-text">804.458.6329 (ext. 2022) | 804.452.0909 <br></br>
          ksloan@arls.org</p>
          </div>
          <div className="contact__info-card">
          <h3 className="contact__info-card-heading">Address</h3>
          <p className="contact__info-card-text">First Connections VA | 209 East Cawson<br></br>
          Street | Hopewell, Virginia 23860</p>
          </div>
        </div>
      </section>
      <section className="contact__map">
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.5632272418607!2d-77.28926852346748!3d37.30548423905309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b1074cb5a68c25%3A0x49dfab4500c823da!2s209%20E%20Cawson%20St%2C%20Hopewell%2C%20VA%2023860!5e0!3m2!1sen!2sus!4v1736377045631!5m2!1sen!2sus"
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="contact__map-iframe"></iframe>
      </section>
      <div className="contact__info-box"><div className="contact_info-box-overlay"></div></div>
    </main>
  );
}

export default Contact;

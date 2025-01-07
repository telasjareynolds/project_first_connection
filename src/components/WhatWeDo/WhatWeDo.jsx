import "./WhatWeDo.css";

function WhatWeDo() {
  return (
    <main className="mission">
      <div className="mission__container">
        <h1 className="mission__heading">What we do:</h1>
        <p className="mission__subheading">
          Below, you will see some of the key areas we focus on at First
          Connections VA:
        </p>
        <div className="mission__list-container">
          <ul className="mission__list">
            <li className="mission__list-item">
              <h3 className="mission__list-title">Connecting</h3>
              <p className="mission__list-text">
                We connect families to agencies and programs which provide
                services for young children.
              </p>
            </li>
            <li className="mission__list-item">
              <h3 className="mission__list-title">Parent Workshop Series</h3>
              <p className="mission__list-text">
                We provide parent workshops online and in person in
                collaboration with community partners
              </p>
            </li>
            <li className="mission__list-item">
              <h3 className="mission__list-title">
                Child Care Specialist Certification
              </h3>
              <p className="mission__list-text">
                We certify child care teachers, family child care providers and
                child care directors in the Child Development Associate
                certification (CDA) process.
              </p>
            </li>
            <li className="mission__list-item">
              <h3 className="mission__list-title">
                Child Care Specialist Training
              </h3>
              <p className="mission__list-text">
                We train child care teachers, family child care providers and
                child care directors through workshops, seminars and individual
                coaching.
              </p>
            </li>
            <li className="mission__list-item">
              <h3 className="mission__list-title">Developmental Screenings</h3>
              <p className="mission__list-text">
                We promote Developmental Screenings for children birth to three
                through use of the Ages and Stages Questionnaire.
              </p>
            </li>
            <li className="mission__list-item">
              <h3 className="mission__list-title">Child Guidance</h3>
              <p className="mission__list-text">
                We transition children into kindergarten through collaboration
                with local school systems.
              </p>
            </li>
            <li className="mission__list-item">
              <h3 className="mission__list-title">Food Security</h3>
              <p className="mission__list-text">
                We coordinate with community partners to bring shelf stable food
                backpacks to child care programs, as well as work with farmers
                markets and grocery stores to offer VA Snap Match, educational
                materials, and vouchers for fresh food
              </p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default WhatWeDo;

import "./Partners.css";

function Partners() {
  return (
    <main className="partners">
      <section className="partners__intro">
        <img
          src="https://firstconnectionsva.yobo.dev/wp-content/uploads/2024/01/image.png"
          className="partners__intro-img"
        />
        <div className="partners__intro-overlay">
          <div className="partners__intro-content">
            <p className="partners__intro-title">Partners</p>
            <h1 className="partners__intro-heading">
              Partners Working Together <br></br>
              First Connections VA Board of Directors
            </h1>
          </div>
        </div>
      </section>
      <section className="partners__cards">
        <div className="partners__card">
          <h3 className="partners__card-heading">
            First Connections VA Board of Directors
          </h3>
          <p className="partners__card-subheading">
            The First Connections VA Board of Directors (BoD) consists of
            community leaders who provide collaborative decision making for our
            Smart Beginning Coalition.
          </p>
          <p className="partners__card-subheading">The Council includes:</p>

          <ul className="partners__card-list">
            <li className="partners__card-list-item">
              Tina Barringer–Director, Elementary Education, Hopewell Schools
            </li>
            <li className="partners__card-list-item">
              Angela Mitchell–Preschool Home/School Coordinator, Elementary
              Education Prince George
            </li>
            <li className="partners__card-list-item">
              Rufus Tyler–Executive Director, The Improvement Association,
              Crater Region
            </li>
            <li className="partners__card-list-item">
              Robert Hamlin (Vice President)–Community Member, Sussex
            </li>
            <li className="partners__card-list-item">
              Lee Mahaney (Treasurer)–Ford Agency, Hopewell
            </li>
            <li className="partners__card-list-item">
              Stacie Parham Harris–Principal, Westview Early Learning Center,
              Petersburg
            </li>
            <li className="partners__card-list-item">
              Penny Brooks (President)–Literacy Coodinator, Dinwiddie Public
              Schools
            </li>
            <li className="partners__card-list-item">
              Shewanda Edwards–Director, Greensville/Emporia Dept of Social
              Services
            </li>
            <li className="partners__card-list-item">
              Joyce Jones–Principal, Woodlawn Early Learning Center, Hopewell
            </li>
            <li className="partners__card-list-item">
              Bertha Judge–Director, Prince George Dept of Social Services
            </li>
            <li className="partners__card-list-item">
              Alison Noble–Director, Smart Beginnings Southeast, Hopewell
            </li>
          </ul>
        </div>

        <div className="partners__card">
          <h3 className="partners__card-heading">Partners Working Together</h3>
          <p className="partners__card-subheading">
            The Hopewell-Prince George First Connections VA partners with the
            following agencies and programs to promote public awareness of the
            needs, services and programs available to children prenatal through
            5 years of age and their families to promote School Readiness for
            all children before entering kindergarten:
          </p>

          <ul className="partners__card-list">
            <li className="partners__card-list-item">
              Appomattox Regional Libraries
            </li>
            <li className="partners__card-list-item">Cameron Foundation</li>
            <li className="partners__card-list-item">
              Ft. Lee Child and Youth Services
            </li>
            <li className="partners__card-list-item">
              Hopewell Department of Juvenile Justice
            </li>
            <li className="partners__card-list-item">Hopewell Head Start</li>
            <li className="partners__card-list-item">
              Hopewell Prince George Healthy Families
            </li>
            <li className="partners__card-list-item">
              Hopewell City Public Schools
            </li>
            <li className="partners__card-list-item">
              Hopewell Redevelopment and Housing Authority
            </li>
            <li className="partners__card-list-item">James House</li>
            <li className="partners__card-list-item">
              John Randolph Foundation
            </li>
            <li className="partners__card-list-item">
              Just Kids, Legal Aid and Justice
            </li>
            <li className="partners__card-list-item">
              Prince George Department of Social Services
            </li>
            <li className="partners__card-list-item">
              Prince George County Public Schools
            </li>
            <li className="partners__card-list-item">First Connections VA</li>
            <li className="partners__card-list-item">
              Virginia Association for Early Childhood Education
            </li>
            <li className="partners__card-list-item">
              Virginia Department of Social Services, Office of Early Childhood
              Development
            </li>
            <li className="partners__card-list-item">
              Virginia Early Childhood Foundation
            </li>
            <li className="partners__card-list-item">PACE</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Partners;

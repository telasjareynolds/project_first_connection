import "./Parents.css";
import checkMark from "../../assets/checkmark.png";

function Parents() {
  return (
    <main className="parents">
      <section className="parents__intro">
        <img
          src="https://firstconnectionsva.yobo.dev/wp-content/uploads/2023/09/Group-29@2x-1.png"
          alt="Image of children in daycare"
          className="parents__intro-img"
        />
        <div className="parents__intro-overlay">
          <div className="parents__intro-content">
            <p className="parents__intro-title">Parents</p>
            <h1 className="parents__intro-heading">
              First Connections VA (formerly Smart Beginnings SE) is located in
              the Appomattox Regional Library in Hopewell, Virginia.
            </h1>
          </div>
        </div>
      </section>
      <section className="parents__tips">
        <div className="parents__tips-container">
          <h4 className="parents__tips-heading">WHAT TO LOOK FOR IN</h4>
          <p className="parents__tips-subheading">
            QUALITY CHILDCARE/PRESCHOOL
          </p>
          <div className="parents__tips-questions-container">
            <img
              src={checkMark}
              alt="checkmark icon"
              className="parents__tips-checkmark"
            />
            <p className="parents__tips-question">Is The Staff Qualified?</p>
          </div>
          <p className="parents__tips-questions-text">
            Do they have training or experience in early childhood? Do they go
            to workshops to continue their training? <br></br>How do the
            teachers interact with your child?
          </p>
          <div className="parents__tips-questions-container">
            <img
              src={checkMark}
              alt="checkmark icon"
              className="parents__tips-checkmark"
            />
            <p className="parents__tips-question">
              How do the teachers interact with your child?
            </p>
          </div>
          <p className="parents__tips-questions-container">
            Do they talk with your child? Do they support your child's social
            and emotional growth? Do they guide children's behavior in a
            positive way? <br></br>
            Do they encourage your child to learn, be creative and curious?
          </p>
          <div className="parents__tips-questions-container">
            <img
              src={checkMark}
              alt="checkmark icon"
              className="parents__tips-checkmark"
            />
            <p className="parents__tips-question">
              How is the classroom furnished?
            </p>
          </div>
          <p className="parents__tips-questions-container">
            What kinds of activities are offered? Are there materials accessible
            for children to do art, read, play dress-up, or play music?{" "}
            <br></br>
            Is it clean? Do the children get to play outside daily?
          </p>
          <div className="parents__tips-questions-container">
            <img
              src={checkMark}
              alt="checkmark icon"
              className="parents__tips-checkmark"
            />
            <p className="parents__tips-question">
              How do they help get your child ready for kindergarten?
            </p>
          </div>
          <p className="parents__tips-questions-container">
            (emotionally, socially and academically).
          </p>
        </div>

        <img
          src="https://firstconnectionsva.yobo.dev/wp-content/uploads/2023/09/FA-1.png"
          alt="childcare provider and children coloring"
          className="parents__tips-img"
        />
      </section>
      <section className="parents__essentials">
        <div className="parents__essentials-cards">
          <div className="parents__essentials-card">
            <h5 className="parents__essentials-heading">
              Essentials for Parenting includes:CDC's Essentials for Parenting
              Toddlers and Preschoolers
            </h5>
            <p className="parents__essentials-text">
              CDC Launches Essentials for Parenting Toddlers and Preschoolers
              CDC’s new resource for positive parenting: Essentials for
              Parenting Toddlers and Preschoolers is a free, online resource
              developed by the Centers for Disease Control and Prevention (CDC).
              Designed for parents of 2 to 4 year olds, Essentialsfor
              Parentingaddresses common parenting challenges, like tantrums and
              whining. Positive parenting skills and techniques can reduce
              parenting stress and provide parents with ways to handle their
              child’s misbehavior. Skills focus on encouraging good behavior and
              decreasing misbehavior using proven strategies like positive
              communication, structure and rules, clear directions, and
              consistent discipline and consequences. Build the foundation of a
              positive parent-child relationship with Essentials for Parenting.
            </p>
          </div>
          <div className="parents__essentials-card">
            <ul className="parents__essentials-list">
              {" "}
              <span className="parents__essentials-title">
              Essentials for Parenting includes:
              </span>
              <li className="parents__essentials-list-item">
                Articles with a variety of skills and tips
              </li>
              <li className="parents__essentials-list-item">
                Frequently Asked Questions answered by parenting experts
              </li>
              <li className="parents__essentials-list-item">
                Fun and engaging videos featuring parents, children, and
                parenting experts who demonstrate and discuss skills
              </li>
              <li className="parents__essentials-list-item">
                Free print resources like chore charts and daily schedules
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="parents__cdc">
        <div className="parents__cdc-cards">
        <div className="parents__cdc-left">
          <div className="parents__cdc-card green-card">
            <p className="parents__cdc-text">
              Many thanks to our colleagues at CDC for sharing this important
              information. Feel free to share with interested parties.
            </p>
            <a href="http://www.cdc.gov/parents/essentials/index.html" className="parents__cdc-doc" target="_blank">
              The direct link is: <br></br>
              http://www.cdc.gov/parents/essentials/index.html
            </a>
          </div>
          <div className="parents__cdc-card blue-card">
            <p className="parents__cdc-text">
              Reading and talking are important for child development When
              Stevie Benkendorf sits down to read and visit with her grandson,
              Jack, she is continuing a tradition she first experienced at the
              side of her father. Sadly, for many children, this type of
              conversation and reading experience is not a common thing.
              Recognizing the importance of reading and talking with children,
              the American Academy of Pediatrics issued a statement in June of
              this year. It recommends that, “pediatric providers advise parents
              of young children that reading aloud and talking about pictures
              and words in age-appropriate books can strengthen language skills,
              literacy development and parent-child relationships.”
            </p>
          </div>
          </div>
          <div className="parents__cdc-container">
            <img
              src="https://firstconnectionsva.yobo.dev/wp-content/uploads/2023/07/ca_childcare_101520istock-1024x626.jpg"
              alt="children listening to care provider"
              className="parents__cdc-img"
            />
            <a
              href="https://www.cdc.gov/parents/essentials/index.html"
              className="parents__cdc-link"
              target="_blank"
            >
              CDC’s Essentials for Parenting Toddlers and Preschoolers
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Parents;

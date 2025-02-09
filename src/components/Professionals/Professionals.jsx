import "./Professionals.css";

function Professionals() {
  return (
    <main className="professionals">
      <section className="professionals__intro">
        <img
          src="https://firstconnectionsva.yobo.dev/wp-content/uploads/2023/11/WebLG-SBSE32317-97.jpg"
          alt="Image of children in daycare"
          className="professionals__intro-img"
        />
        <div className="professionals__intro-overlay">
          <h1 className="professionals__intro-heading">
            Childcare Professionals
          </h1>
        </div>
      </section>
      <section className="professionals__training">
        <div className="professionals__training-cards">
          <div className="professionals__training-left">
            <div className="professionals__training-card green-card">
              <p className="professionals__training-text">
                One of the key features of quality early childhood programs is
                the training and experience level of the staff. Effective early
                childhood professionals have a strong background in education
                and development, building specialized early childhood
                competencies. Smart Beginnings SE and Crater workshops and self
                study training options align with state early childhood
                standards. Content for our workshops is based on the expectation
                of the VA Star Quality Initiative (VSQI) pdf and Milestones of
                Child Development The intent of our training and education
                programs are to improve the quality of early childhood
                professionals, because we know that children with access to high
                quality learning experiences are more likely to acquire the
                skills they need to enter kindergarten ready to succeed and
                adapt to new learning and social environments.
              </p>
            </div>
            <div className="professionals__training-card blue-card">
              <ul className="professionals__training-list">
                {" "}
                <span className="professionals__training-title">
                  Our Educator Training sessions are specifically designed for:
                </span>
                <li className="professionals__training-list-item">
                  Infant & Toddler Teachers
                </li>
                <li className="professionals__training-list-item">
                  Pre-school & Pre-K teachers
                </li>
                <li className="professionals__training-list-item">
                  Adminstrators & Directors
                </li>
                <li className="professionals__training-list-item">
                  Home-based childcare providers
                </li>
              </ul>
            </div>
          </div>
          <div className="professionals__training-container">
            <img
              src="https://firstconnectionsva.yobo.dev/wp-content/uploads/2024/01/34608249030_51f11ee516_z.jpg"
              alt="children listening to care provider"
              className="professionals__training-img"
            />
            <a
              href="https://www.firstconnectionsva.org/wp-content/uploads/2016/03/Self-Study-Reflection-form.pdf"
              className="professionals__training-link"
              target="_blank"
            >
              Download and complete your Self Study Personal and Professional
              Reflection Form here.
            </a>
          </div>
        </div>
      </section>

      <div className="professionals__training-box">
        Select categories below to access related training materials.
      </div>

      <section className="professionals__material">
        <div className="professionals__material-section">
          <h3 className="professionals__material-heading">
            Environment and Instruction (ITERS & ECERS)
          </h3>
          <p className="professionals__material-text">
            These articles relate to topics for organizing and setting up a high
            quality early learning environment. Content in articles aligns with
            Standard 4 on the Virginia Star Quality Initiative and Environmental
            Rating Scales (ITERS & ECERS).
          </p>
          <div className="professionals__material-card">
            <ul className="professionals__material-list">
              {" "}
              <span className="professionals__material-title">
                A Quality Program:
              </span>
              <li className="professionals__material-list-item">
                Making Long Lasting Changes with Environmental Rating Scales
              </li>
              <li className="professionals__material-list-item">
                Consider the Walls
              </li>
              <li className="professionals__material-list-item">
                Block Building & Make Believe Play
              </li>
            </ul>
          </div>
        </div>
        <div className="professionals__material-section">
          <h3 className="professionals__material-heading">
            ESL: English Language Acquisition
          </h3>
          <p className="professionals__material-text">
            These articles relate to strategies for working with children who
            are not native English speakers, and include information on how to
            help children make progress in understanding and speaking English.
          </p>
          <div className="professionals__material-card">
            <ul className="professionals__material-list">
              {" "}
              <span className="professionals__material-title">
                A Quality Program:
              </span>
              <li className="professionals__material-list-item">
                Effective ESL & Diversity Classroom Strategies
              </li>
              <li className="professionals__material-list-item">
                Understanding the Impact of Language Differences
              </li>
              <li className="professionals__material-list-item">
                Storybook Reading for Young Dual Language Learners
              </li>
              <li className="professionals__material-list-item">
                ESL strategies for Infants & Toddlers
              </li>
            </ul>
          </div>
        </div>
        <div className="professionals__material-section">
          <h3 className="professionals__material-heading">
            Language and Literacy
          </h3>
          <p className="professionals__material-text">
            These articles are about how adults can help young children develop
            language and literacy skills. Topics include listening & speaking,
            phonological awareness & alphabet knowledge, print awareness &
            concepts, comprehension & vocabulary and early writing.
          </p>
          <div className="professionals__material-card">
            <ul className="professionals__material-list">
              {" "}
              <span className="professionals__material-title">
                A Quality Program:
              </span>
              <li className="professionals__material-list-item">
                Early Literacy Infants & Toddlers
              </li>
              <li className="professionals__material-list-item">
                Creating Print Rich Learning Centers
              </li>
              <li className="professionals__material-list-item">
                Shoot for the Stars : A Strategy for teaching New Words
              </li>
              <li className="professionals__material-list-item">
                N is for Nonsensical – The case for content-rich literacy
                instruction
              </li>
              <li className="professionals__material-list-item">
                Phonological Awareness is Child’s Play
              </li>
              <li className="professionals__material-list-item">
                Real reasons to Write
              </li>
              <li className="professionals__material-list-item">
                Essentials of Early Literacy Instruction
              </li>
            </ul>
          </div>
        </div>
        <div className="professionals__material-section">
          <h3 className="professionals__material-heading">Math</h3>
          <p className="professionals__material-text">
            Articles about developmentally appropriate math activities for young
            children, aligned with the VA Milestones for Development &
            Foundation Blocks
          </p>
          <div className="professionals__material-card">
            <ul className="professionals__material-list">
              {" "}
              <span className="professionals__material-title">
                A Quality Program:
              </span>
              <li className="professionals__material-list-item">
                Math Books for Young Children
              </li>
              <li className="professionals__material-list-item">
                Calendar Time for Young Children
              </li>
              <li className="professionals__material-list-item">
                Math Games for Preschoolers
              </li>
            </ul>
          </div>
        </div>
        <div className="professionals__material-section">
          <h3 className="professionals__material-heading">
            Quality Interactions (CLASS Related Articles)
          </h3>
          <p className="professionals__material-text">
            These articles relate to dimensions of the Classroom Based
            Assessment Scoring System (CLASS) that is used for Standard 2 in the
            Virginia Star Quality Initiative. Articles describe ways teachers
            can provide high levels of instructional support to encourage higher
            levels of learning in young children.
          </p>
          <div className="professionals__material-card">
            <ul className="professionals__material-list">
              {" "}
              <span className="professionals__material-title">
                A Quality Program:
              </span>
              <li className="professionals__material-list-item">
                Managing Transitions to Prevent Challenging Behavior
              </li>
              <li className="professionals__material-list-item">
                Alternatives to “Good Job”
              </li>
              <li className="professionals__material-list-item">
                Tools to Enhance Children’s Thinking
              </li>
              <li className="professionals__material-list-item">
                Powerful Interactions
              </li>
            </ul>
          </div>
        </div>
        <div className="professionals__material-section">
          <h3 className="professionals__material-heading">School Readiness</h3>
          <p className="professionals__material-text">
            Articles related to better understanding the importance of school
            readiness.
          </p>
          <div className="professionals__material-card">
            <ul className="professionals__material-list">
              {" "}
              <span className="professionals__material-title">
                A Quality Program:
              </span>
              <li className="professionals__material-list-item">
                Deep Pools of Promise
              </li>
              <li className="professionals__material-list-item">
                School Readiness Report
              </li>
            </ul>
          </div>
        </div>
        <div className="professionals__material-section">
          <h3 className="professionals__material-heading">
            Social and Emotional Development
          </h3>
          <p className="professionals__material-text">
            Articles about developmentally appropriate math activities for young
            children, aligned with the VA Milestones for Development &
            Foundation Blocks.
          </p>
          <div className="professionals__material-card">
            <ul className="professionals__material-list">
              {" "}
              <span className="professionals__material-title">
                A Quality Program:
              </span>
              <li className="professionals__material-list-item">
                Adapting the Environment to Meet Different Emotional Needs
              </li>
              <li className="professionals__material-list-item">
                A Guide For Discipline
              </li>
              <li className="professionals__material-list-item">
                Guidance Strategy “The Problem Solver Job”
              </li>
            </ul>
          </div>
        </div>
        <div className="professionals__material-section">
          <h3 className="professionals__material-heading">
            Nurturing Learning series
          </h3>
          <p className="professionals__material-text"></p>
          <div className="professionals__material-card">
            <ul className="professionals__material-list">
              {" "}
              <li className="professionals__material-list-item">
                Nurturing Learning in One-Year-Olds: Arts and Creativity
                <p className="professionals__material-list-text">
                  Can one-year-olds truly be creative? If we step away from
                  artistic expressions of creativity for a moment and just think
                  about the essence of creativity, the answer is a loud “Yes!”
                </p>
              </li>
              <li className="professionals__material-list-item">
                Nurturing Learning in Two-Year-Olds: Arts and Creativity
                <p className="professionals__material-list-text">
                  When you think about art with two-year-olds, think about how
                  to create meaningful art experiences that fit well in the busy
                  world of twos.
                </p>
              </li>
              <li className="professionals__material-list-item">
                Nurturing Learning in Three- and Four-Year-Olds: Arts and
                Creativity
                <p className="professionals__material-list-text">
                  During the preschool years, young children blossom in their
                  ability to experiment with new ideas, including new ways of
                  creating with art materials.
                </p>
              </li>
              <li className="professionals__material-list-item">
                Nurturing Learning in One-Year-Olds: Language and Literacy
                <p className="professionals__material-list-text">
                  The most obvious of all of the many remarkable changes between
                  a child’s first and second birthday is that they begin
                  talking. As exciting as those first words are, though, they
                  are only a slice of the language gains that one-year-olds
                  make.
                </p>
              </li>
              <li className="professionals__material-list-item">
                Nurturing Learning in Two-Year-Olds: Language and Literacy
                <p className="professionals__material-list-text">
                  Verbal communication between or with twos needs a lot of
                  support to succeed, especially when there is a conflict of
                  wills. But twos feel excited and powerful when they’ve
                  succeeded in using words to connect with a friend or caregiver
                  in a meaningful way.
                </p>
              </li>
              <li className="professionals__material-list-item">
                Nurturing Learning in Three- and Four-Year-Olds: Language and
                Literacy
                <p className="professionals__material-list-text">
                  The ages of three and four are busy times for language and
                  literacy learning, including developing the ability to
                  comprehend and tell narratives, becoming much more skilled at
                  conversation, and beginning to understand the mechanics of
                  written language.
                </p>
              </li>
              <li className="professionals__material-list-item">
                Nurturing Learning in One-Year-Olds: Mathematical and Scientific
                Thinking
                <p className="professionals__material-list-text">
                  By the time babies have reached their first birthday, they
                  have logged thousands of hours of watching, listening,
                  touching, tasting and smelling everything around them, as
                  their rapidly developing brains have been noticing differences
                  between things.
                </p>
              </li>
              <li className="professionals__material-list-item">
                Nurturing Learning in Two-Year-Olds: Mathematical and Scientific
                Thinking
                <p className="professionals__material-list-text">
                  The age of two in children can be trying for caregivers, but
                  it’s also an age in which children are gaining a remarkable
                  amount of knowledge about how the world works.
                </p>
              </li>
              <li className="professionals__material-list-item">
                Nurturing Learning in Three- and Four-Year-Olds: Mathematical
                and Scientific Thinking
                <p className="professionals__material-list-text">
                  Preschoolers are rapidly developing the mental abilities to
                  think in mathematical and scientific ways in order to explore
                  and understand their favorite topics.
                </p>
              </li>
              <li className="professionals__material-list-item">
                Nurturing Learning in One-Year-Olds: Play and Music
                <p className="professionals__material-list-text">
                  Play is the central activity of young children and is the main
                  way that young children explore, interact with, and enjoy the
                  world around them, whether it’s an infant playing with her
                  toes or a five-year-old playing superhero.
                </p>
              </li>
              <li className="professionals__material-list-item">
                Nurturing Learning in Two-Year-Olds: Play and Music
                <p className="professionals__material-list-text">
                  What does play look like in two-year-olds, and how can
                  caregivers support their inborn curiosity and creativity?
                </p>
              </li>
              <li className="professionals__material-list-item">
                Nurturing Learning in Three- and Four-Year-Olds: Play and Music
                <p className="professionals__material-list-text">
                  Play is self-directed, pleasurable, internally motivated
                  activity that children control. How caregivers support it
                  depends on the age of the child.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="professionals__material-section">
          <h3 className="professionals__material-heading">
            Early Childhood Consultants
          </h3>
          <p className="professionals__material-text"></p>
          <div className="professionals__material-card">
            <p className="professionals__material-list-paragraph">
              <strong>Yolanda Satchell</strong> is a contractual early childhood
              consultant, and we are happy to have her services available to
              First Connections VA as a CDA Course Instructor and trainer.{" "}
              <br></br>
              She is the founder of the early childhood organization known as
              P.A.C.E. (Professional Advising & Career Empowerment). As a CDA
              Program Specialist, she is available to assist you with your Child
              Development Associates (CDA) credential questions.
            </p>
            <p className="professionals__material-list-paragraph">
              Contact her at <strong>(804)721-8536 </strong>or{" "}
              <strong>pace2u@comcast.net </strong>for complete program
              information and CDA assistance.
            </p>
            <p className="professionals__material-list-paragraph">
              <strong>Jean McNeil</strong> has been working in the early
              childhood field for over 35 years. She can assist your program
              with any technical assistance, mentoring, or coaching needs you
              have. Jean is also a certified CLASS mentor and rater.
            </p>
            <p className="professionals__material-list-paragraph">
              Please contact her at <strong>(804) 304-4062</strong> or{" "}
              <strong>jmcneil@arls.org.</strong>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Professionals;

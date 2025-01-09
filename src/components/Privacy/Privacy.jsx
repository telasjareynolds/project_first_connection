import "./Privacy.css";

function Privacy() {
  return (
    <main className="privacy">
      <div className="privacy__container">
        <h1 className="privacy__heading">Privacy Policy</h1>
        <div className="privacy__list-container">
          <ul className="privacy__list">
            <li className="privacy__list-item">
              <h3 className="privacy__list-title">Cookies</h3>
              <p className="privacy__list-text">
                If you visit our login page, we will set a temporary cookie to
                determine if your browser accepts cookies. This cookie contains
                no personal data and is discarded when you close your browser.
              </p>
            </li>
            <li className="privacy__list-item">
              <h3 className="privacy__list-title">
                1.1- Embedded content from other websites
              </h3>
              <p className="privacy__list-text">
                Articles on this site may include embedded content (e.g. videos,
                images, articles, etc.). Embedded content from other websites
                behaves in the exact same way as if the visitor has visited the
                other website.
              </p>
            </li>
            <li className="privacy__list-item">
              <h3 className="privacy__list-title">
                1.2- Embedded content from other websites
              </h3>
              <p className="privacy__list-text">
                These websites may collect data about you, use cookies, embed
                additional third-party tracking, and monitor your interaction
                with that embedded content, including tracking your interaction
                with the embedded content if you have an account and are logged
                in to that website.
              </p>
            </li>
            <li className="privacy__list-item">
              <h3 className="privacy__list-title">
                How long we retain your data
              </h3>
              <p className="privacy__list-text">
                For users that register on our website (if any), we also store
                the personal information they provide in their user profile. All
                users can see, edit, or delete their personal information at any
                time (except they cannot change their username). Website
                administrators can also see and edit that information.
              </p>
            </li>
            <li className="privacy__list-item">
              <h3 className="privacy__list-title">
                What rights you have over your data
              </h3>
              <p className="privacy__list-text">
                If you have an account on this site, or have left comments, you
                can request to receive an exported file of the personal data we
                hold about you, including any data you have provided to us. You
                can also request that we erase any personal data we hold about
                you. This does not include any data we are obliged to keep for
                administrative, legal, or security purposes.
              </p>
            </li>
            <li className="privacy__list-item">
              <h3 className="privacy__list-title">
                Developmental Screenings Where your data is sent
              </h3>
              <p className="privacy__list-text">
                Visitor comments may be checked through an automated spam
                detection service.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Privacy;

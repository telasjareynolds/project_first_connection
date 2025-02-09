import "./Food.css";

function Food() {
  return (
    <main className="food">
      <section className="food__intro">
        <img
          src="https://firstconnectionsva.yobo.dev/wp-content/uploads/2023/11/Group-29@2x.png"
          className="food__intro-img"
        />
        <div className="food__intro-overlay">
          <div className="food__intro-content">
            <h1 className="food__intro-heading">
              Looking for ways to stretch your food budget?
            </h1>
            <div className="food__intro-container">
              <ul className="food__intro-list">
                This maps includes information on where you can...
                <li className="food__intro-list-item">
                  - Receive discounts with your EBT or P-EBT card
                </li>
                <li className="food__intro-list-item">
                  - Get free means and Groceries
                </li>
                <li className="food__intro-list-item">- Apply for benefits</li>
                <li className="food__intro-list-item">- Grow your own food</li>
                <li className="food__intro-list-item">
                  - Find Information on things like cooking Stretching your food
                  <br></br> dollars, and healthy eating on a budget.
                </li>
              </ul>
              <div className="food__intro-qr-container">
                <img
                  src="https://firstconnectionsva.yobo.dev/wp-content/uploads/2023/11/qrcode.png"
                  alt=""
                  className="food__intro-qr"
                />
                <p className="food__intro-qr-text">
                  Scan the QR Code to access <br></br>
                  the food resources map!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="food__map">
        <h3 className="food__map-heading">SCAN HERE</h3>
        <p className="food__map-text">
          TO ACCESS THE NEW SURRY & SUSSEX FOOD RESOURCES MAP!
        </p>
        <div className="food__map-suffex">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d65369183.36050215!2d0!3d0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8805ab1aa0009737%3A0x3f0127d1bc3e2d58!2sSussex%20Outreach%20Services!5e0!3m2!1sen!2sus!4v1736387965149!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="food__map-iframe"
          ></iframe>
          <img
            src="https://firstconnectionsva.yobo.dev/wp-content/uploads/2023/11/Hopewell-Petersburg-Food-Assist-Directory-2-994x1536.png"
            alt="Food assistance flyer"
            className="food__map-flyer"
          />
        </div>
        <h3 className="food__map-heading">SCAN HERE</h3>
        <p className="food__map-text">
          TO ACCESS THE NEW SURRY & SUSSEX FOOD RESOURCES MAP!
        </p>
        <div className="food__map-hopewell">
          <img
            src="https://firstconnectionsva.yobo.dev/wp-content/uploads/2023/11/Food-Assistance-PNG.png"
            alt="Food assistance flyer"
            className="food__map-flyer"
          />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.7376463990654!2d-77.2976039234675!3d37.30135123928877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b10751cb08d8ad%3A0xdfe4808416b57750!2s903%20W%20City%20Point%20Rd%2C%20Hopewell%2C%20VA%2023860!5e0!3m2!1sen!2sus!4v1736387922788!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="food__map-iframe"
          ></iframe>
        </div>
      </section>
    </main>
  );
}

export default Food;

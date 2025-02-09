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
        <div className="food__map">
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
        <div className="food__map">
          <img
            src="https://firstconnectionsva.yobo.dev/wp-content/uploads/2023/11/Food-Assistance-PNG.png"
            alt="Food assistance flyer"
            className="food__map-flyer"
          />
        </div>
      </section>
    </main>
  );
}

export default Food;

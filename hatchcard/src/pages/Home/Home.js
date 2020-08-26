import React from 'react';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Buttons/Button';
// Styles
import './home.css';

const Home = () => {
  return (
    <div className="container">
      <section>
        <div className="heroContainer">
          <div className="heroContent">
            <h1 className="heroH1">
              We are
              <br />
              <span className="hColor">Hiring</span>
            </h1>
            <p className="heroP">
              Hey, Hatch Team! Heard you were hiring and wanted to catch your attention! My name is <strong>Matthew Bedard</strong> and I am a <strong>Front-End Engineer</strong> from Lambda School.
            </p>
            <Button type="button" text="Get Started" />
            <a href=""></a> {/* Bouncing Arrow */}
          </div>
          <div>
            <img
              style={{ height: '75%' }}
              className="openImg"
              src="https://assets.website-files.com/5d89b3f25fc1b72994e90766/5db89f5e084afec3ede58274_Hatch%20hero%20image.png"
              srcset="https://assets.website-files.com/5d89b3f25fc1b72994e90766/5db89f5e084afec3ede58274_Hatch%20hero%20image-p-500.png 500w, https://assets.website-files.com/5d89b3f25fc1b72994e90766/5db89f5e084afec3ede58274_Hatch%20hero%20image-p-800.png 800w, https://assets.website-files.com/5d89b3f25fc1b72994e90766/5db89f5e084afec3ede58274_Hatch%20hero%20image.png 834w"
              sizes="(max-width: 479px) 220.921875px, (max-width: 767px) 370px, (max-width: 991px) 45vw, 46vw,"
              alt=""
              class="heroImg"
            />
          </div>
        </div>
      </section>
      <img
        src="https://assets.website-files.com/5d89b3f25fc1b72994e90766/5ea831b6de6676a3e9eea2a1_product%20wave%201%40svg.svg"
        alt=""
        class="wave top"
      ></img>
      <section className="hatchCard">
        <h3 className="introducing">Introducing...</h3>
        <div className="heroContainer">
          <div className="heroContent">
            <h2 className="hColor">Matthew Bedard</h2>
            <p className="heroP">
              Start or grow your business with an easy way to access the money
              you need. Use the Hatch Card for daily business expenses or keep
              it in your back pocket for the unexpected.
            </p>

            <div className="cardInfoCtn">
              <p className="cardInfoP1">Hatch Card Terms</p>
              <p className="cardInfoP2">
                Your Line of Credit will be available for 10 years and will
                range from $200-$5,000.
              </p>
            </div>
            <div className="cardInfoCtn">
              <p className="cardInfoP1">Hatch Card APR</p>
              <p className="cardInfoP2">Our APR is 18-24%.</p>
            </div>
            <Button type="button" text="Learn More" id="learnMore" />
          </div>
          <div>
            <img
              src="https://assets.website-files.com/5d89b3f25fc1b72994e90766/5db336cb374cc8b9f7094b39_card-horizontal_05_r3.png"
              srcset="https://assets.website-files.com/5d89b3f25fc1b72994e90766/5db336cb374cc8b9f7094b39_card-horizontal_05_r3-p-500.png 500w, https://assets.website-files.com/5d89b3f25fc1b72994e90766/5db336cb374cc8b9f7094b39_card-horizontal_05_r3-p-800.png 800w, https://assets.website-files.com/5d89b3f25fc1b72994e90766/5db336cb374cc8b9f7094b39_card-horizontal_05_r3-p-1080.png 1080w, https://assets.website-files.com/5d89b3f25fc1b72994e90766/5db336cb374cc8b9f7094b39_card-horizontal_05_r3.png 1363w"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 50vw, (max-width: 991px) 46vw, 37vw"
              alt=""
              class="productImg"
            />
          </div>
        </div>
      </section>
      <img
        src="https://assets.website-files.com/5d89b3f25fc1b72994e90766/5ed8e42e5021370394798740_alt%20Product%20wave%203%202%40svg.svg"
        alt="blue"
        class="wave bottom"
      ></img>
      <section>
        <div className="heroContainer">
          <div className="heroContent">
            <h2 className="hColor">What makes Hatch different?</h2>
            <div>
              <h3 className="hDifferent">
                <span className="number">1. </span>Our quick and easy
                application.
              </h3>
              <h3 className="hDifferent">
                <span className="number">2. </span>No previous history needed.
              </h3>
              <h3 className="hDifferent">
                <span className="number">3. </span>Access your funds when you
                need it.
              </h3>
              <Button type="button" text="Learn More" id="learnMoreDifferent" />
            </div>
          </div>
          <div>
            <img className="wave"
              src="https://assets.website-files.com/5d89b3f25fc1b72994e90766/5db3396a374cc805280ac11b_Difference%202x.png"
              srcset="https://assets.website-files.com/5d89b3f25fc1b72994e90766/5db3396a374cc805280ac11b_Difference%202x-p-500.png 500w, https://assets.website-files.com/5d89b3f25fc1b72994e90766/5db3396a374cc805280ac11b_Difference%202x-p-800.png 800w, https://assets.website-files.com/5d89b3f25fc1b72994e90766/5db3396a374cc805280ac11b_Difference%202x.png 968w"
              sizes="(max-width: 479px) 88vw, (max-width: 767px) 420px, (max-width: 991px) 48vw, 40vw"
              alt=""
              class="product-image nostick right-bg-image"
            />
          </div>
        </div>
      </section>
      <section className="works">
        <div id="work" className="heroContainer">
          <div className="heroContent">
            <h2 className="hColor">How It Works</h2>
            <div className="heroCardContainer">
              <div className="heroCard">
                <p className="number">1.</p>
                <img
                  className="heroCardImage"
                  src="https://assets.website-files.com/5d89b3f25fc1b72994e90766/5eb16c56bcf8447be6ebfbc8_Pencil%20tool%40svg.svg"
                  alt="Pencil"
                />
                <p className="heroCardP">
                  Apply for your Hatch Card in less than 10 minutes
                </p>
              </div>
              <div className="heroCard">
                <p className="number">2.</p>
                <img
                  className="heroCardImage"
                  src="https://assets.website-files.com/5d89b3f25fc1b72994e90766/5eb16c557cd72d4f53be3a6b_24%20by%207%40svg.svg"
                  alt="Pencil"
                />
                <p className="heroCardP">
                  Receive a credit decision within 3-5 business days
                </p>
              </div>
              <div className="heroCard">
                <p className="number">3.</p>
                <img
                  className="heroCardImage"
                  src="https://assets.website-files.com/5d89b3f25fc1b72994e90766/5eb16c5366df16793cdbe135_Wallet%40svg.svg"
                  alt="Pencil"
                />
                <p className="heroCardP">
                  Use your card for business expenses at any time
                </p>
              </div>
              <div className="heroCard">
                <p className="number">4.</p>
                <img
                  className="heroCardImage"
                  src="https://assets.website-files.com/5d89b3f25fc1b72994e90766/5eda4e8bbca2fa3e7a8862bc_Credit%20Card.svg"
                  alt="Pencil"
                />
                <p className="heroCardP">
                  Repay like you would any other credit card
                </p>
              </div>
            </div>
            <div className="startedButton">
              <Button type="button" text="Get Started" id="Started" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h2 className="hColor" id="testimonial">
            What Hatch <br />
            Customers Are Saying
          </h2>
          <div className="testimonialContainer">
            <div className="testimonial">
              <p className="testimonialBox">
                With Hatch's support, I feel valued as an individual. I love
                talking to a person.
              </p>
              <div className="testimonialCharacter">
                <img
                  className="testimonialImage"
                  src="https://assets.website-files.com/5d89b3f25fc1b77367e9076c/5f2850ffd10e5b1bd08defcb_Change%20Website%20-%20Maryanne%20Satterfield-p-500.jpeg"
                  alt="Headshot of person"
                />
                <div className="testimonialInfo">
                  <p>Maryanne Satterfield </p>
                  <p>SWEETFRILL SHOP </p>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <p className="testimonialBox">
                I have a new business so I was pleasantly surprised when Hatch
                approved me!
              </p>
              <div className="testimonialCharacter">
                <img
                  className="testimonialImage"
                  alt="Michael Gurk" src="https://assets.website-files.com/5d89b3f25fc1b77367e9076c/5f2852548d27aaa77c590022_Pending%20-%20Ryan%20Hemenway%20(1).jpg"  
                 />
                <div className="testimonialInfo">
                  <p>Ryan Hemenway </p>
                  <p>TEXAS POOL CLUB </p>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <p className="testimonialBox">
              Hatch has a great product, team and vision for the future of financing. Highly Recommend!
              </p>
              <div className="testimonialCharacter">
                <img
                  className="testimonialImage"
                  src="https://avatars1.githubusercontent.com/u/35118316?s=460&u=0cde4614da30d79704b3cdadf2aed924199e85f9&v=4"
                  alt="Headshot of person"
                />
                <div className="testimonialInfo">
                  <p>Matthew Bedard </p>
                  <p>Front-End Engineer </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;

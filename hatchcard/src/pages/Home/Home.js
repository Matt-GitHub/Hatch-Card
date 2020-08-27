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
              Hey,
              <br />
              <span className="hColor" id="hTeam">Hatch Team</span>
            </h1>
            <p className="heroP" id="hIntro">
              Heard you were hiring and wanted to catch your attention! My name is <strong>Matthew Bedard</strong> and I am a <strong>Front-End Engineer</strong> from Lambda School.
            </p>
            
            <a href="#Introducing_Matthew_Bedard">
            <Button type="button" text="Get Started" id="introButton" />
              </a> {/* Bouncing Arrow */}
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
      <section className="hatchCard" id="Introducing_Matthew_Bedard">
        <h3 className="introducing" >Introducing...</h3>
        <div className="heroContainer">
          <div className="heroContent">
            <h2 className="hColor">Matthew Bedard</h2>
            <p className="heroP">
              Scale and grow your business the easy way by hiring me as your Front-End Engineer. Use my skillset for daily business needs or keep me working on the future of Hatch.
            </p>

            <div className="cardInfoCtn">
              <p className="cardInfoP1">My Terms</p>
              <p className="cardInfoP2">
                Your new engineer will be available for 10 years and can start working for you today.
              </p>
            </div>
            <div className="cardInfoCtn">
              <p className="cardInfoP1">My Productivity</p>
              <p className="cardInfoP2">Improve your team's productivity by 18-24%.</p>
            </div>
            <a href="#Differentiator_Matthew_Bedard">
            <Button type="button" text="Learn More" id="learnMore" />
            </a>
          </div>
          <div>
            <img
              src="https://www.linkpicture.com/q/Group-1-6.png"
              
              alt=""
              class="productImg"
            />
          </div>
        </div>
      </section >
      <img
        src="https://assets.website-files.com/5d89b3f25fc1b72994e90766/5ed8e42e5021370394798740_alt%20Product%20wave%203%202%40svg.svg"
        alt="blue"
        class="wave bottom"
      ></img>
      <section id="Differentiator_Matthew_Bedard">
        <div className="heroContainer">
          <div className="heroContent">
            <h2 className="hColor">What makes Matthew Bedard different?</h2>
            <div>
              <h3 className="hDifferent">
                <span className="number">1. </span>Systems and Process Oriented
              </h3>
              <h3 className="hDifferent">
                <span className="number">2. </span>Loves Front-end Design and UX
              </h3>
              <h3 className="hDifferent">
                <span className="number">3. </span>Self starter and Owner
              </h3>
              <a href="#WorkFlow_Matthew_Bedard">
              <Button type="button" text="Work Flow" id="learnMoreDifferent" />
              </a>
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
      </section >
      <section className="works" id="WorkFlow_Matthew_Bedard">
        <div id="work" className="heroContainer">
          <div className="heroContent">
            <h2 className="hColor">How I Work</h2>
            <div className="heroCardContainer">
              <div className="heroCard">
                <p className="number">1.</p>
                <img
                  className="heroCardImage"
                  src="https://assets.website-files.com/5d89b3f25fc1b72994e90766/5eb16c56bcf8447be6ebfbc8_Pencil%20tool%40svg.svg"
                  alt="Pencil"
                />
                <p className="heroCardP">
                  Research and plan before committing to code
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
                  Work around the clock to meet deadlines and mvp
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
                  Ensure paying customers are happy with our product
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
                  Iterate and start the process over again
                </p>
              </div>
            </div>
            <div className="startedButton">
            <a href="#Testimonials_Matthew_Bedard">
              <Button type="button" text="See Testimonials" id="Started" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="Testimonials_Matthew_Bedard">
        <div>
          <h2 className="hColor" id="testimonial">
            What Colleagues <br />
            Are Saying
          </h2>
          <div className="testimonialContainer">
            <div className="testimonial">
              <p className="testimonialBox">
                Matthew is a self-starter and always taking initative to improve upon our process.
              </p>
              <div className="testimonialCharacter">
                <img
                  className="testimonialImage"
                  src="https://ca.slack-edge.com/ESZCHB482-W011T9P80UE-ad6996a4de5d-512"
                  alt="Headshot of person"
                />
                <div className="testimonialInfo">
                  <p>Lindsay Gilson</p>
                  <p>Hiring Solutions</p>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <p className="testimonialBox">
                Matthew was our first choice when we heard there was another opening at Hatch.
              </p>
              <div className="testimonialCharacter">
                <img
                  className="testimonialImage"
                  src="https://ca.slack-edge.com/ESZCHB482-W01207XL02F-9e646be30d0e-512"  
                 />
                <div className="testimonialInfo">
                  <p>Treydon Johnson</p>
                  <p>Account Executive</p>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <p className="testimonialBox">
              Matthew is a standout engineer. Always delivers quality results to stakeholders.
              </p>
              <div className="testimonialCharacter">
                <img
                  className="testimonialImage"
                  src="https://ca.slack-edge.com/ESZCHB482-W012PSZ3EN4-3b902f0234f0-512"
                  alt="Headshot of person"
                />
                <div className="testimonialInfo">
                  <p>Katie Spencer </p>
                  <p>Career Coach </p>
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

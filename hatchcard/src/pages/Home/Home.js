import React from 'react';

// Styles
import './home.css';

function Home() {
  <>
    <section>
      <div>
        <h1>
          We are
          <br />
          <span>Open for Business</span>
        </h1>
        <p>
          Hatch is here for you during these trying times. Get fast and easy
          access to funds to grow your business.
        </p>
        <button>Get Started</button>
        <a href=""></a> {/* Bouncing Arrow */}
      </div>
      <div>
        <img
          src="https://assets.website-files.com/5d89b3f25fc1b72994e90766/5db89f5e084afec3ede58274_Hatch%20hero%20image.png"
          srcset="https://assets.website-files.com/5d89b3f25fc1b72994e90766/5db89f5e084afec3ede58274_Hatch%20hero%20image-p-500.png 500w, https://assets.website-files.com/5d89b3f25fc1b72994e90766/5db89f5e084afec3ede58274_Hatch%20hero%20image-p-800.png 800w, https://assets.website-files.com/5d89b3f25fc1b72994e90766/5db89f5e084afec3ede58274_Hatch%20hero%20image.png 834w"
          sizes="(max-width: 479px) 220.921875px, (max-width: 767px) 370px, (max-width: 991px) 45vw, 46vw"
          alt=""
          class="hero-image home-image"
        />
      </div>
    </section>
    <section>
      <h3>Introducing...</h3>
      <div>
        <div></div>
      </div>
    </section>
  </>;
}

export default Home;

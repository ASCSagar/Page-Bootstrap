import React from "react";
import "./page.css";
import buddy from "../images/Vector.png";
import sampu from "../images/Image.png";
import star from "../images/Icon.png";
import avtar from "../images/Avatar.png";
import QR from "../images/QR.png";
import Close from "../images/Icon Button.png";

const Page = () => {
  return (
    <div>
      <header className="d-flex justify-content-between align-items-center p-4">
        <div className="d-flex align-items-center gap-2">
          <img src={buddy} alt="buddy" />
          <div>Buddy</div>
        </div>
        <div className="custom-pointer d-flex fw-medium text-white custom-background-color rounded-pill px-3 py-2">
          Sign up
        </div>
      </header>
      <main className="main d-flex justify-content-center p-4 gap-3 flex-wrap">
        <img
          src={sampu}
          alt="Water Sport Sunscreen"
          className="border border-2 rounded-3 custom-border-color"
        />
        <div className="d-flex flex-column gap-4">
          <div className="p-4 bg-white border border-2 custom-border custom-border-radius">
            <div className="py-1 fs-6 fw-medium text-secondary text-start custom-font-b">
              Stream2Sea
            </div>
            <div className="fs-4 text-dark text-start custom-font-a">
              Water Sport Sunscreen
            </div>
            <div className="py-2 fw-normal fs-5 lh-1.5 text-secondary text-start custom-font-b">
              Sunscreen SPF 30 is a high performance mineral-
              <br />
              based sunscreen which protects your body while <br /> preserving
              the ecosystems you love.
            </div>
            <div className="custom-button">Buy</div>
          </div>
          <div className="p-4 bg-white border border-2 custom-border custom-border-radius">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-2">
                <img src={star} alt="star" />
                <div>Rating</div>
              </div>
              <div>4.7</div>
            </div>
            <hr className="border border-1 my-2" />
            <div className="text-start">Review</div>
            <div className="mt-2 p-3 fs-6 lh-base text-secondary text-start custom-border custom-background-color-1">
              Absolutely love the sunscreen! It’s smooth and <br /> doesn’t feel
              sticky. Even better that it’s reef safe. It <br />
              comes in a few sizes but I like to take the travel <br />
              size with me because a little goes a long way. <br />
              Would definitely recommend :
            </div>
            <div>
              <div className="d-flex justify-content-start align-items-center gap-2 ">
                <img src={avtar} alt="Taylor H." />
                <div className="p-2">
                  <div>Taylor H.</div>
                  <div className="fs-6 text-secondary">Divemaster</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="cards">
        <div className="cookie position-fixed m-0 p-4 custom-width custom-height-1 custom-bottom custom-left custom-box-shadow custom-border custom-background-color-2">
          <div
            className="mt-2 fw-normal text-white text-start"
            style={{ fontSize: "14px", lineHeight: "20px" }}
          >
            Buddy uses cookies to personalize content and ads, provide social
            media features, and analyze our traffic. Click "Accept all" to
            accept these uses. Read more in our Cookie Policy
          </div>
          <div className="d-flex mt-2 gap-2">
            <div className="custom-button-1">Reject all</div>
            <div className="custom-button-2">Accept all</div>
          </div>
        </div>
        <div className="scan position-fixed m-0 p-4 custom-border custom-width custom-height-2 custom-bottom custom-right custom-box-shadow custom-background-color-3">
          <div className="d-flex justify-content-end">
            <img src={Close} alt="Close" />
          </div>
          <div className="fw-bold text-center my-2 custom-scan-color custom-font-a custom-font-size">
            Find more gear reviews <br />
            in the Buddy app
          </div>
          <div className="my-2 custom-scan-color custom-font-a">
            Scan the code below with your <br />
            phone to download
          </div>
          <img src={QR} alt="QR" />
        </div>
      </div>
      <footer className="footer fixed-bottom  py-3">
        <div className="container text-center">
          <ul className="list-inline mb-0">
            <li className="list-inline-item">
              <a href=" " className="text-secondary text-decoration-none">
                About Buddy
              </a>
            </li>
            <li className="list-inline-item">
              <a href=" " className="text-secondary text-decoration-none">
                Privacy Policy
              </a>
            </li>
            <li className="list-inline-item">
              <a href=" " className="text-secondary text-decoration-none">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Page;

import React, { useContext } from "react";
import "./MainPage.css";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CompCarousel from "./Carousel";
import CompSwiper from "./Swiper";

import Workingcontext from "../../../../contexts/workngalert/workingcontext";

function MainPage() {
  const notworkcontext = useContext(Workingcontext);
  const developmentstate = () => {
    notworkcontext.notworkingalert();
  };
  return (
    <div className="d1maincontent">
      <section className="mains1">
        <div className="ds1">
          <PhoneInTalkIcon className="icons" />
          <p>8755102544</p>
          <span>(Mon 9am - Fri 9pm)</span>
          <MailOutlineIcon className="icons" />
          <p>example@example.com</p>
        </div>
        <div className="S1">
          <div className="d1s1">
            <div className="d1s1d1">
              <div className="d1s1d1d1">
                <p>
                  Designing interior since 2003 <hr />
                </p>
                <h1>
                  We Design Beautiful <br /> Home Interiors
                </h1>
                <p>
                  We are an interior design company based in India.We design
                  home,
                  <br />
                  office and other corporate buildings.
                </p>
                <button onClick={developmentstate}>CONTACT US</button>
              </div>
            </div>
            <div className="d1s1d2">
              <img
                src="https://3.imimg.com/data3/CE/NF/MY-12891390/hall-interior-designing-service-500x500.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="d1s1d">
            <div className="d01">
              <h2>01</h2>
              <h6>Home Design</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                posuere nulla non turpis porttitor viverra.
              </p>
            </div>
            <div className="d02">
              <h2>02</h2>
              <h6>Office Design</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                posuere nulla non turpis porttitor viverra.
              </p>
            </div>
            <div className="d03">
              <h2>03</h2>
              <h6>Furniture Design</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                posuere nulla non turpis porttitor viverra.
              </p>
            </div>
            <div className="d04">
              <h2>04</h2>
              <h6>Paints & Lights</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                posuere nulla non turpis porttitor viverra.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="d1s2">
        <p>
          Our Portfolio
          <hr />
        </p>
        <div className="d1s2d1">
          <h2>
            We have completed more
            <br /> than 5000 projects
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div className="d1s2d2">
          <CompCarousel />
        </div>
      </section>
      <section className="d1s3">
        <div>
          <p>
            Our Features <hr />
          </p>
          <div className="d1s3d1">
            <h2>
              Design your interiors <br />
              with the style you want
            </h2>
            <button>View more styles</button>
          </div>
          <div className="d1s3d2">
            <div>
              <img
                src="https://bloximages.newyork1.vip.townnews.com/news-daily.com/content/tncms/assets/v3/editorial/3/03/303f8ca0-ebf9-58d5-90b6-f13b3cdbd9f0/617ab4f0c1f5a.preview.png?resize=200%2C200"
                alt=""
              />
              <h6>Soft & Playful</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
              <img
                src="https://tiimg.tistatic.com/fp/1/005/872/kitchen-interior-design-364-w300.jpg"
                alt=""
              />
              <h6>Minimalistic</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ8VYb_HBBScOMjaGGvabaiuIQnovwUbEtww&usqp=CAU"
                alt=""
              />
              <h6>Productive</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
              <img
                src="https://www.dreaminteriors.in/wp-content/uploads/2019/12/Hotel-Interior-Design-200x200.jpg"
                alt=""
              />
              <h6>Enjoyable</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="d1s4">
        <p>
          Contact Us
          <hr />
        </p>
        <div className="d1s4d1">
          <h2>
            Get in touch with us and give <br />
            your interiors a new look!
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div className="d1s4d2">
          <img
            src="https://www.indecortrends.com/wp-content/uploads/2019/11/Relevant-interior-design-trends-2021-6-600x400.jpg"
            alt=""
          />
          <form>
            <input type="text" placeholder="Full name" />
            <br />
            <input type="phone" placeholder="Mobile no.(with country code)" />
            <br />
            <input type="email" placeholder="E-mail" />
            <br />
            <input type="text" maxLength="200" placeholder="Message" />
            <br />
            <button type="submit">Submit</button>
            <br />
          </form>
        </div>
      </section>
      <section className="d1s5">
        <div>
          <p>
            Testimonials <hr />
          </p>
          <h2 style={{ marginBottom: "30px" }}>
            Our customers love us for <br /> the quality of our service
          </h2>
          <CompSwiper />
        </div>
      </section>
    </div>
  );
}

export default MainPage;

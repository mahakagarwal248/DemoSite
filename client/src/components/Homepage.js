import React from "react";
import "../css/Homepage.css";
import { Link } from "react-router-dom";
import BlurLinearIcon from "@mui/icons-material/BlurLinear";
import InsightsIcon from "@mui/icons-material/Insights";
import RecommendIcon from "@mui/icons-material/Recommend";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function Homepage() {
  return (
    <div className="homepage">
      <section className="s1">
        <div className="s1content">
          <p>Solution for your Website related problems.</p>
          <h1>
            We design and develop experiences that make people's lives{" "}
            <b>simple</b>.
          </h1>
          <button className="btn">Free consultation</button>
        </div>
      </section>
      <section className="techs">
        <div>
          <img
            src="https://hackr.io/tutorials/learn-html-5/logo/logo-html-5?ver=1587977020"
            alt="HTML"
          />
        </div>
        <div>
          <img
            src="https://static.javatpoint.com/csspages/images/css-tutorial.png"
            alt="CSS"
          />
        </div>
        <div>
          <img
            src="https://iwanta.tech/wp-content/uploads/2021/04/javascript-icon-200.jpg"
            alt="JavaScript"
          />
        </div>
        <div>
          <img src="https://logodix.com/logo/1625693.png" alt="Php" />
        </div>
        <div>
          <img
            src="https://4.imimg.com/data4/WK/NB/MY-8329990/sql-training-250x250.jpg"
            alt="MySQL"
          />
        </div>
        <div>
          <img
            src="data:image/png;base64,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"
            alt="ReactJs"
          />
        </div>
        <div>
          <img
            src="https://images.squarespace-cdn.com/content/v1/58d3660a6a49630cabbf9f96/1495129362104-BHGN5RGS6KPKPEBPC44H/image-asset.png"
            alt="NodeJs"
          />
        </div>
        <div>
          <img
            src="https://t1.daumcdn.net/cfile/tistory/21469844568CBB2A07"
            alt="ExpressJs"
          />
        </div>
        <div>
          <img
            src="https://www.centrify.com/sites/default/files/2021-04/mongodb-logo-200.png"
            alt="MongoDB"
          />
        </div>
      </section>
      <section className="s2" id="services">
        <h4>Our Services</h4>
        <h1>From Idea to Execution</h1>
        <div className="s2d">
          <div className="d1">
            <BlurLinearIcon className="icon1" />
            <h3>Design New Way</h3>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
          </div>
          <div className="d2">
            <InsightsIcon className="icon2" />
            <h3>Better your brand</h3>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
          </div>
          <div className="d3">
            <RecommendIcon className="icon3" />
            <h3>Make a difference</h3>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
          </div>
        </div>
      </section>
      <section className="s3" id="about">
        <div className="s3d1">
          <img
            src="https://gensolarenergy.com/wp-content/uploads/2021/06/about-us-1.png"
            alt=""
          />
        </div>
        <div className="s3d2">
          <h4>About Us</h4>
          <h2>Stuff We Do</h2>
          <p>
            We create, design and deploy your website for your business to take
            your business to next level on digital platforms.
          </p>
          <p>
            We use latest technologies in our development work. We can design
            your site as you want. You can choose design from our catalogue or
            can give your own designs as per your requirement.
          </p>
          <button className="btn">What we can do for you</button>
        </div>
      </section>
      <section className="s4" id="catalogue">
        <div className="s4d">
          <div className="s4d1">
            <h4>Catalogue</h4>
            <h2>Your digital presence should be an unstoppable force</h2>
            <h5>Choose design from our catalogue</h5>
            <Link to="demo/site1">
              {" "}
              <div className="s4d1d1">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU6nQma3Cmar0Ptz-XvagoCcHVH6IjDx6AvQ&usqp=CAU"
                  alt=""
                />
                <h5>Title1</h5>
                <p>description1</p>
              </div>
            </Link>
            <Link to="demo/site2">
              <div className="s4d1d2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU6nQma3Cmar0Ptz-XvagoCcHVH6IjDx6AvQ&usqp=CAU"
                  alt=""
                />
                <h5>Title2</h5>
                <p>description2</p>
              </div>
            </Link>
          </div>
          <div className="s4d2">
            <Link to="/demo/site3">
              {" "}
              <div className="s4d2d1">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU6nQma3Cmar0Ptz-XvagoCcHVH6IjDx6AvQ&usqp=CAU"
                  alt=""
                />
                <h5>Title3</h5>
                <p>description3</p>
              </div>
            </Link>

            <a href="https://quoraclone-c9aa3.web.app/">
              <div className="s4d2d2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU6nQma3Cmar0Ptz-XvagoCcHVH6IjDx6AvQ&usqp=CAU"
                  alt=""
                />
                <h5>Title4</h5>
                <p>description4</p>
              </div>
            </a>
          </div>
        </div>
        <button className="btn">
          See More <ArrowRightAltIcon className="arrow" />
        </button>
      </section>
      <section className="s5">
        <div className="s5d">
          <h1>Ready to Launch your next website?</h1>
          <div className="s5d1">
            <button className="btn">
              <MailOutlineIcon className="mail" />
              Get in touch now!
            </button>
            <p>
              Or, take a peek in our{" "}
              <a
                href="/"
                style={{
                  fontWeight: "bold",
                  color: "#6610f2",
                  textDecoration: "underline",
                }}
              >
                design studio
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;

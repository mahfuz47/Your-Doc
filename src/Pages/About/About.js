import React from "react";
import "./About.css";
const About = () => {
  return (
    <div>
      <h1 className="text-center text-warning fw-bold mt-5 pt-5 text-decoration-underline">
        Q & A
      </h1>
      <div className="d-flex my-5 py-5">
        <div className="answer-section mx-3 my-3 bg-dark text-white p-4">
          <h3 className="fw-bold">
            What is the Difference between authorization and authentication?
          </h3>
          <p className="mt-4">
            Ans: <b>Application programming interface is called as Api.</b> It
            makes a connection between server and application. From application,
            calling Api data and display that on UI is makes a developer's work
            much more easier. Basically Api data is used for giving a better
            performance to the client and provide the data from Api when the
            clients wants or needs them. There are some kind Api like{" "}
            <b>REST API, SOAP API, BROWSER API, IOS/ANDROID API.</b>{" "}
          </p>
          <div className="d-flex justify-content-center p-2">
            <img className="App-logo" src={require("./logo192.png")} alt="" />
          </div>
        </div>
        <div className="answer-section mx-3 my-3 bg-dark text-white p-4">
          <h3 className="fw-bold">
            Why are you using firebase? What other options do you have to
            implement authentication??
          </h3>
          <p className="mt-4">
            Ans:{" "}
            <b>
              Semantic Tag is a bunch of core elements that provides the
              information as the looks on a page.{" "}
            </b>{" "}
            For ex: "article" tag contains articles. They just belongs to there
            name kind of information. It also helps on search engine
            optimiazation programms. There are many kind of semantic tags
            exists. "nav", "footer", "main", "section" etc. is the major
            semantic tags that used much than others.
          </p>
          <div className="d-flex justify-content-center p-2">
            <img className="App-logo" src={require("./logo192.png")} alt="" />
          </div>
        </div>
        <div className="answer-section mx-3 my-3 bg-dark text-white p-4">
          <h3 className="fw-bold">
            What other services does firebase provide other than authentication?
          </h3>
          <p className="mt-4">
            Ans:{" "}
            <b>
              Semantic Tag is a bunch of core elements that provides the
              information as the looks on a page.{" "}
            </b>{" "}
            For ex: "article" tag contains articles. They just belongs to there
            name kind of information. It also helps on search engine
            optimiazation programms. There are many kind of semantic tags
            exists. "nav", "footer", "main", "section" etc. is the major
            semantic tags that used much than others.
          </p>
          <div className="d-flex justify-content-center p-2">
            <img className="App-logo" src={require("./logo192.png")} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

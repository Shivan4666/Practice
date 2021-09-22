import React from "react";
import Navigation from "./Navigation";
import "./Style.css";

const Practice = () => {
  return (
    <>
      <div>
        <h1>Web Technologies</h1>
        <Navigation />
        <br />
        <br />
        <div className=" part part1">
          <h3>HTML</h3>
          <p className="para">
            <b>HyperText Markup Language</b>, or HTML is the standard markup
            language for documents designed to be displayed in a web browser.
            ... HTML describes the structure of a web page semantically and
            originally included cues for the appearance of the document. HTML
            elements are the building blocks of HTML pages.
          </p>
          <img src="./Photos/HTML.png" alt="HTML LOGO" className="imagee" />
        </div>

        <div className=" part part2">
          <h3 className="head2">CSS</h3>
          <p className="para">
            <b>CSS</b> is the language for describing the presentation of Web
            pages, including colors, layout, and fonts. It allows one to adapt
            the presentation to different types of devices, such as large
            screens, small screens, or printers. CSS is independent of HTML and
            can be used with any XML-based markup language.
          </p>
          <img src="./Photos/CSS.png" alt="CSS LOGO" className="imagee" />
        </div>

        <div className="part part3">
          <h3>JavaScript</h3>
          <p className="para">
            <b>JavaScript</b> is commonly used for creating web pages. It allows
            us to add dynamic behavior to the webpage and add special effects to
            the webpage. On websites, it is mainly used for validation purposes.
            JavaScript helps us to execute complex actions and also enables the
            interaction of websites with visitors.
          </p>
          <img
            src="./Photos/Javascript.png"
            alt="Javascript LOGO"
            className="imagee3"
          />
        </div>

        <div className="part part4">
          <h3 className="head2">Bootstrap</h3>
          <p className="para">
            <b>Bootstrap</b> is an HTML, CSS & JS Library that focuses on
            simplifying the development of informative web pages (as opposed to
            web apps). The primary purpose of adding it to a web project is to
            apply Bootstrap's choices of color, size, font and layout to that
            project.
          </p>
          <img
            src="./Photos/Bootstrap.png"
            alt="Bootstrap LOGO"
            className="imagee3"
          />
        </div>

        <div className="part part5">
          <h3>ReactJs</h3>
          <p className="para">
            <b>React</b> is a JavaScript library created for building fast and
            interactive user interfaces for web and mobile applications. It is
            an open-source, component-based, front-end library responsible only
            for the application’s view layer. React was created by Jordan Walke,
            a software engineer at Facebook.{" "}
          </p>
          <img src="./Photos/React.png" alt="React LOGO" className="imagee5" />
        </div>

        <footer>
          <h2 className="foot">
            For More Information:-
            <br />
            <a
              href="https://www.w3schools.com/html/default.asp"
              className="footertxt1"
            >
              HTML
            </a>
            <a
              href="https://www.w3schools.com/css/default.asp"
              className="footertxt1"
            >
              CSS
            </a>
            <a
              href="https://www.w3schools.com/js/default.asp"
              className="footertxt1"
            >
              Javascript
            </a>
            <a
              href="https://www.w3schools.com/bootstrap/bootstrap_ver.asp"
              className="footertxt1"
            >
              Bootstrap
            </a>
            <a
              href="https://www.w3schools.com/react/default.asp"
              className="footertxt1"
            >
              ReactJs
            </a>
          </h2>
        </footer>
      </div>
    </>
  );
};
export default Practice;

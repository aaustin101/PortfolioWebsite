import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import BWme from "../images/BWme.jpg";

export default function App() {
  return (
    <div className="App">
      <h1 id="name">Andrew Austin</h1>
      <h2 id="name">Welcome to my website!</h2>
      <p id="name">
        <img src={BWme} width="500" height="500" alt="Me" />
      </p>
      <h3 id="about">About me:</h3>

      <p id="bio">
        Hello! Whether you stumbled upon my website by mere chance, or you found
        my work somewhere, feel free to look around. But first, let me tell you
        a bit about myself. I am currently a New Media Major and Graphic design
        Minor at Molloy College. I aim to one day find a career in the realm of
        graphic design and/or social media marketing. On this webpage you can
        see some of the work that I have created during my college career. This
        features many different Adobe Photoshop and Adobe Premiere Pro projects
        that I have created. They showcase the skills I have learned so far in
        regards to creating content for different social media platforms for
        different purposes. I hope you enjoy everything you see! If you want to
        get into contact with me, my contact info and social media pages are
        down below.
      </p>
      <h3 id="about">Pages</h3>
      <ul>
        <li>
          <a href="pages/portfolio.html">My Work</a>
        </li>
        <li>
          <a href="pages/experience.html">My Experience</a>
        </li>
      </ul>
    </div>
  );
}

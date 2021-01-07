import React, {useState} from "react"
import './App.css';
import Navbar from './Scripts/Navbar';
import Navbarblog from './Scripts/Navbarblog';
import Contact from './Scripts/Contact';
import Introduction from './Scripts/Introduction';
import About from './Scripts/About';
import Blog from './Scripts/Blog';
import Gallery from './Scripts/Gallery';
import Blogpage from './Scripts/Blogpage';
import ScrollToTop from './Scripts/ScrollToTop';

import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from "react-router-dom";

function Title({match}) {
  const { params: { title } } = match;
  var data = require("./Assets/Posts/" + title + ".json");

  return(
    <ScrollToTop>
      <Navbarblog />
      <div className="container-fluid d-flex flex-column align-items-center blogpage m-0 p-5">
        <h1 className="blog-header display-3 py-3">{data.title}</h1>
        {data.paragraphs.map((paragraph, index) => (
          <p className="blog-paragraphs" key={index}>
            {paragraph}
          </p>
        ))}
        <Link to="/Blog">
          <p className="py-4 blog-link">Go back to blog archive here</p>
        </Link>
      </div>
    </ScrollToTop>
  )
}

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/Blog">
            <ScrollToTop>
              <Navbarblog />
              <Blogpage />
            </ScrollToTop>
          </Route>
          <Route path="/Posts/:title" component={Title} />
          <Route path="/">
            <ScrollToTop>
              <Navbar />
              <Introduction />
              <Blog />
              <About />
              <Gallery />
            </ScrollToTop>
          </Route>
        </Switch>
        <Contact />
      </Router>
    </>
  );
}

export default App;

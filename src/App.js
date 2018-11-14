import React, { Component } from "react";
import "./App.css";
import Column from "./Column/Column";

class App extends Component {
  render() {
    return (
      <div>
        <section className="Section">
          <h1 className="logo">Your Logo</h1>
        </section>
        <section className="Section Section--blue">
          <h1 className="topHead">
            Find Assisted Living Costs Near undefined, undefined
          </h1>
          <Column />
        </section>
      </div>
    );
  }
}

export default App;

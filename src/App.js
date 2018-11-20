import React, { Component } from "react";
import { CSSTransitionGroup } from "react-transition-group";
import "./App.css";
import "./CssModule/normalize.css";
import "./CssModule/section.css";
import "./CssModule/Column.css";
import ColumnOne from "./Column/ColumnOne";
import ColumnTwo from "./Column/ColumnTwo";
import BottomSection from "./BottomSection/BottomSection";
import Tree from "./tree-colored.png";
import Logo from "./Assisted-Living-Logo.png";

class App extends Component {
  state = {
    formInputs: {
      careWho: "",
      lookingFor: "",
      email: "",
      clientName: "",
      phone: ""
    },
    showSecondFormFields: false
  };

  toggleFormFields = () => {
    const doesShow = this.state.showSecondFormFields;
    this.setState({ showSecondFormFields: !doesShow });
  };

  render() {
    return (
      <div>
        <section className="Section Header">
          <img src={Logo} className="Logo" />
        </section>
        <section className="Section Section--blue">
          <h1 className="topHead">Find Assisted Living Costs Near You</h1>
          <div className="column">
            <div className="maps column__sub">
              <img src={Tree} class="tree" />
            </div>
            <div className="form column__sub">
              <form>
                {this.state.showSecondFormFields === false ? (
                  <ColumnOne
                    where={this.state.formInputs.lookingFor}
                    email={this.state.formInputs.email}
                  />
                ) : (
                  <ColumnTwo />
                )}
              </form>
              <div class="column__sub_div">
                <button
                  value="Get Started"
                  className="btn"
                  onClick={this.toggleFormFields}
                >
                  {this.state.showSecondFormFields === false
                    ? "Get Started"
                    : "Request Information"}
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <BottomSection />
        </section>
      </div>
    );
  }
}
export default App;

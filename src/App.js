import React, { Component } from "react";
import { CSSTransitionGroup } from "react-transition-group";
import "./App.css";
import "./CssModule/normalize.css";
import "./CssModule/section.css";
import "./CssModule/Column.css";
import ColumnOne from "./Column/ColumnOne";
import ColumnTwo from "./Column/ColumnTwo";
import BottomSection from "./BottomSection/BottomSection";
import Logo from "./senior-living-rates.jpg";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
library.add(faDollarSign, faImages, faClipboardCheck, faStarHalfAlt);
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

  inputChangedHandler = event => {
    this.setState({
      formInputs: {
        careWho: "",
        lookingFor: event.target.value,
        email: event.target.value,
        clientName: "",
        phone: ""
      }
    });
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
          <div className="column">
            <div className="maps column__sub">
              <div className="img-holder" />
            </div>
            <div className="form column__sub">
              <div className="form-holder">
                <form>
                  <h1 className="topHead">
                    Find Assisted Living Costs Near You
                  </h1>
                  {this.state.showSecondFormFields === false ? (
                    <ColumnOne
                      patient={this.state.formInputs.careWho} //Who are you looking for?
                      where={this.state.formInputs.lookingFor}
                      email={this.state.formInputs.email}
                      changed={this.inputChangedHandler}
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

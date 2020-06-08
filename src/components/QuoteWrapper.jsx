import React, { Component } from "react";
import { wishes } from "../services/wishes";

export default class QuoteWrapper extends Component {
  state = {
    index: 0,
    fontclass: "fas fa-heart "
  };

  handleChange = () => {
    let index = this.state.index;
    index = index + 1;
    if (index === wishes.length) {
      index = 0;
    }
    this.setState({ index });

    const oldFontClass = this.state.fontclass;
    let fontclass = this.state.fontclass;

    fontclass = fontclass + "love";
    this.setState({ fontclass });

    setTimeout(() => {
      this.setState({ fontclass: oldFontClass });
    }, 3500);
  };

  render() {
    const { index, fontclass } = this.state;

    return (
      <section className="quote-wrapper">
        <div>
          <h2 className="text-styled birthday">Happy Birthday</h2>
          <h2 className="name">Monica Akpanudom</h2>
          <h5 className="swag">My Super Woman, Her Royal Majesty...</h5>
          <div className="line"></div>
          <br />
        </div>

        <div className="wish-div">
          {wishes[index].wish} <i className={fontclass}></i>
        </div>
        <button className="btn" onClick={() => this.handleChange()}>
          Click Me
        </button>
      </section>
    );
  }
}

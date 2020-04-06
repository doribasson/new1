import React, { Component } from "react";
import Switch from "react-switch";

class Toggleswitch extends Component {
  state = {
    checked: false,
    bgcolor: "#2e59a0"
  };

  componentWillMount() {
    console.log(document.querySelector("body").style.backgroundColor);
    if (
      document.querySelector("body").style.backgroundColor ===
      "rgb(46, 89, 160)"
    )
      this.setState({ checked: false });
    else this.setState({ checked: true });
  }

  //   console.log("Dffdsfsfsfd");
  //   this.setState({ checked: false });
  // } else {
  //   this.setState({ checked: true });
  //   console.log("dfsff");
  // }

  handleChange = checked => {
    // this.setState({ checked });
    // const { bgcolor } = this.state;
    // if (bgcolor === "#2e59a0") {
    //   document.querySelector("body").style.background = "#1a1919";
    //   document.querySelector(".bd-navbar").style.background = "#707a7e";
    //   this.setState({ bgcolor: "black" });
    // }

    // if (bgcolor === "black") {
    //   document.querySelector("body").style.background = "#2e59a0";
    //   document.querySelector(".bd-navbar").style.background = "#1120384f";
    //   this.setState({ bgcolor: "#2e59a0" });
    // }

    if (this.state.checked) {
      document.querySelector(".bd-navbar").style.background = "#707a7e";
      this.setState({ checked: false });
    }

    if (this.state.checked) {
      document.querySelector("body").style.backgroundColor = "rgb(46, 89, 160)";
      this.setState({ checked: false });
    }

    if (!this.state.checked) {
      document.querySelector("body").style.backgroundColor = "#1a1919";
      this.setState({ checked: true });
    }

    // if (this.state.checked) {
    //   // if(document.querySelector("body").style.backgroundColor==="rgb(26, 25, 25)")
    //   this.setState({ checked: true });
  };

  render() {
    return (
      <label htmlFor="material-switch">
        <Switch
          className="Toggle-switch"
          id="material-switch"
          onChange={this.handleChange}
          checked={this.state.checked}
          onColor="#2e59a0"
          onHandleColor="#fff"
          offHandleColor="#fff"
          offColor="#000000"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
        />
      </label>
    );
  }
}

export default Toggleswitch;

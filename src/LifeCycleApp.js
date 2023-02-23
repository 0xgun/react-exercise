import React, { Component } from "react";

class LifeCycleApp extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      count: 0,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }
  shouldComponentUpdate(nextProps, nextupdate) {
    console.log("shouldComponentUpdate", nextProps, nextupdate);
    return true;
  }
  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log("getSnapshotBeforeUpdate", prevProp, prevState);
    return null;
  }
  componentDidUpdate(prevProp, prevState, snapShot) {
    console.log("componentDidUpdate", prevProp, prevState, snapShot);
  }
  componentDidMount() {
    console.log("componentDidMount");
    this.intervalId = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 10000);
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.intervalId);
  }
  static getDerivedStateFromError(error) {
    console.log("getDerivedStateFromError", error);
    return null;
  }
  componentDidCatch(error, info) {
    console.log("ComponentDidCatch", error, info);
  }
  handleClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    console.log("render");
    if(this.state.count===3){
        throw new Error("Something went Wrong")
    }
    return (
      <div>
        <h1>LifeCycleApp</h1>
        <p>{this.state.count}</p>
        <button 
          onClick={() => {
            this.handleClick();
          }}
        >
          Increment
        </button>
      </div>
    );
  }
}
export default LifeCycleApp;

import { Component } from "react";
class Logout extends Component {
  componentDidMount() {
    window.location = "/"; //here we choose to refresh (reload) the webpage, so our App component will be mounted again and our navigation bar will be refreshed accordingly
  }
  render() {
    return null;
  }
}

export default Logout;

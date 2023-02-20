import { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "sample@example.com",
      mobile: "9876543210",
      userInfo: {},
    };
  }

  async componentDidMount() {
    // console.log("Inside componentDidMount");

    const data = await fetch("https://api.github.com/users/mharshita");
    const json = await data.json();
    console.log(json);

    this.setState({
      email: "updatedEmail@example.com",
      userInfo: json,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.company != this.props.company) {
      console.log("company changed");
    }
  }

  render() {
    const { login, company, avatar_url } = this.state.userInfo;
    return (
      <>
        <h1>Profile</h1>
        <img src={avatar_url} alt="image" />
        <h3>Name: {this.props.name}</h3>
        <h3>Username: {login}</h3>
        <h3>email: {this.state.email}</h3>
        <h3>phone: {this.state.mobile}</h3>
        <h3>company: {company}</h3>
      </>
    );
  }
}

export default Profile;

import React, { Component } from "react";
import { data } from './../reposMockData';
import Repo from "./Repo";

export default class ReposList extends Component {

  constructor() {
    super();
    this.state = {
        repos: []
    };
  }

  componentDidMount() {
    fetch('/api/github/repos')
    .then(res => res.json())
    .then(result => {
        this.setState({repos: result.repos});
    });
  }

  render() {
    return (
      <div>
          {console.log(this.state)}
          {this.state.repos.map((repo, index) =>  <Repo repo={repo} key={index} />)}
      </div>
    );
  }
}
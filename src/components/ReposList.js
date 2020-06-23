import React, { Component } from "react";
import { data } from './../reposMockData';
import CardDeck from 'react-bootstrap/CardDeck';
import Repo from "./Repo";

export default class ReposList extends Component {

  constructor() {
    super();
    this.state = data;
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
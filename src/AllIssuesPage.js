import React, { Component } from "react";
import issueData from "./Issue_data";
import IssuesList from "./IssuesList";

class AllIssuesPage extends Component {
  state = {
    issues: [],
  };

  componentDidMount() {
    this.setState({ issues: issueData.Issues });
  }
  render() {
    return (
      <>
        <h1>Issue List</h1>
        <IssuesList Issues={this.state.issues} />
      </>
    );
  }
}

export default AllIssuesPage;

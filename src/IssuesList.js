import React from 'react';
import Issue from './Issue';

const IssuesList = (props) => {

    return (
        <table >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Issue Description</th>
                    <th>Severity</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {props.Issues && props.Issues.map(issue => (<Issue key={issue.id} id={issue.id}
                    issueDescription={issue.issueDescription}
                    severity={issue.severity}
                    status={issue.status} />))}
            </tbody>
        </table>
    )
}



export default IssuesList;
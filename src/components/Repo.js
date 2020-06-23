import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Repo extends Component {

    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>
                        <FontAwesomeIcon icon={['fab', 'github']} className="repo-icon" />
                        <i className="fab fa-github"></i>
                        {this.props.repo.full_name}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{(this.props.repo.description !== null) ? this.props.repo.description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}</Card.Subtitle>
                    <Card.Text>
                        <span className="repo-detail">
                            <FontAwesomeIcon icon="code" className="repo-icon" />
                            {this.props.repo.language} 
                        </span>
                        <span className="repo-detail"> 
                            <FontAwesomeIcon icon="code-branch" className="repo-icon" />
                            <i className="fas fa-code-branch"></i> 
                            {this.props.repo.forks_count} 
                        </span>
                        <span className="repo-detail"> 
                            <FontAwesomeIcon icon="tasks" className="repo-icon" />
                            {this.props.repo.open_issues} 
                        </span>
                    </Card.Text>
                    <Card.Link href="#">Fork Repository</Card.Link>
                    <Card.Link href="#">Join as a Mentor</Card.Link>
                </Card.Body>
            </Card>
        );
    }
}
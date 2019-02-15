import React, { Component } from "react";
import { Button, Card, CardTitle, Row, Col } from 'react-materialize';
import { Link } from "react-router-dom";

export default class Cards extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Card className='small'
                    header={<CardTitle image={this.props.userAvatar}>{this.props.userName}</CardTitle>}
                    actions={[<Link to={`/details`}>Back</Link>]}>
                    Type: {this.props.userType}
                </Card>
                
            </div>
        )

    }
}
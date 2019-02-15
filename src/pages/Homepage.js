import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cards from "../components/Cards";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            githubUsers: []
        }
    };
    componentWillMount() {
        axios.get('https://api.github.com/users?since=30')
            .then(res => {
                // if(res.data.status ==200){
                const githubUsers = res.data;
                this.setState({ githubUsers: githubUsers })
                console.log(githubUsers)
                // }else{
                //     alert("error loading content")
                // }
            }).catch(error => { console.log(error) });
    }
    render() {
        return (
            <div className="">
                <h1>Github users</h1>
                {this.state.githubUsers.map((item, key) =>
                <div>
                <Cards key={item.id} userAvatar = {item.avatar_url} userType={item.type} userName={item.login}/>
                {/* <li key={item.id}>{item.login}</li> */}
                </div>
                )}
            </div>
        )
    }
}






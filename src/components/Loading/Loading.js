import React from 'react';

import { Redirect } from 'react-router-dom';

import MyLifeLogo from '../../assets/home/white-logo.png';

import baseURIs from '../../variables/baseURIs';

class Loading extends React.Component {

    constructor() {
        super();
        this.state = { loaded: false, currentUser: null }
        this.fetchClient = this.fetchClient.bind(this);
    }

    fetchClient = (currentUser) => {
        
    }

    componentDidMount() {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));

       fetch(baseURIs.restApi.baseURI + baseURIs.restApi.signup + "/" + currentUser.userInfo.email, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Token " + currentUser.token
        }
    })
        .then(response => {
            if (!response.ok) throw new Error(response.status);
            else return response.json();

        })
        .then(data => {
            localStorage.setItem('currentUser', JSON.stringify(data));
        })
        .catch(error => {
            console.log("Fetch error: " + error);
        })

        this.setState({ loaded: false, currentUser: currentUser })
        setInterval(() => {
            this.setState({ loaded: true, currentUser: this.state.currentUser })
        }, 2000);
    }

    render() {
        if (this.state.loaded) {
            if (this.state.currentUser.role === "client")
                return <Redirect to="/client/dashboard" />
            else if (this.state.currentUser.role === "doctor")
                return <Redirect to="/doctor/dashboard" />
            else if (this.state.currentUser.role === "admin")
                return <Redirect to="/admin/dashboard" />
        }

        return (
            <div class="loading-container"><img class="loader" src={MyLifeLogo} /></div>
        );
    }
}

export default Loading;
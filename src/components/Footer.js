import React, { Component } from 'react';
import '../App.css';

class Footer extends Component {

    footer() {
        return (
            <footer className="w3-container w3-display-container w3-theme-dark" id="footer">
                <div className="w3-display-left">
                    <p className="footer-left-margin">
                        Created By: Jenny Cheung, Babatunde Egbantan,
                    </p>
                    <p className="footer-left-margin w3-margin-left">
                        Mary Forde, Naveen Sehgal, and Cassandra Smith
                    </p>
                    <p className="footer-left-margin">
                        Capstone Advisor: Waleed Meleis
                    </p>
                </div>
                <div className="w3-display-right">
                    <p className="footer-right-margin w3-right-align">
                        Northeastern University
                    </p>
                    <p className="footer-right-margin w3-right-align">
                        Electrical and Computer Engineering Department
                    </p>
                    <p className="footer-right-margin w3-right-align">
                        Capstone Project Spring 2019
                    </p>
                </div>
            </footer>
        )
    }

    render() {
        return this.footer();
    }
}

export default Footer;
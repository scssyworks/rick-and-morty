import React, { Component } from 'react';

class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="center-align" style={{ marginTop: 200 }}>
                    <h3>Welcome</h3>
                    <p>Checkout these awesome features</p>
                </div>
            </React.Fragment>
        );
    }
}

export default {
    component: HomePage
};
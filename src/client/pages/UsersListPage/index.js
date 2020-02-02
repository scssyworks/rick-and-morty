import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions';

class UsersListPage extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }
    renderUsers = () => {
        const { users } = this.props;
        return users.map(({ id, name }) => (
            <li key={id}>{name}</li>
        ));
    }
    render() {
        return (
            <div>
                Here's a big list of users:
                <ul>
                    {this.renderUsers()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({ users }) {
    return { users };
}

function loadData(store) {
    return store.dispatch(fetchUsers());
}

export default {
    component: connect(mapStateToProps, { fetchUsers })(UsersListPage),
    loadData
};

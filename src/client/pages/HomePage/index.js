import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchContent } from './actions/fetchContent';
import './index.scss';
import Characters from '../../components/organisms/Characters';


class HomePage extends Component {
    static propTypes = {
        fetchContent: PropTypes.func.isRequired
    };

    render() {
        return (
            <section className="characters">
                <section className="filters">
                    <h2>Filters</h2>
                </section>
                <section className="content">
                    <section className="filter-selection">
                        <h2>Selected Filters</h2>
                    </section>
                    <section className="inline-filters"></section>
                    <section className="character-list">
                        <Characters />
                    </section>
                </section>
            </section>
        );
    }

    componentDidMount() {
        const { fetchContent } = this.props;
        fetchContent();
    }
}

function loadData(store) {
    return store.dispatch(fetchContent());
}

export default {
    component: connect(null, {
        fetchContent
    })(HomePage),
    loadData
};
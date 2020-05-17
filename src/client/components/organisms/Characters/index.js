import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListItem from '../../molecules/ListItem';
import './index.scss';

class Characters extends PureComponent {
    static propTypes = {
        list: PropTypes.array.isRequired
    };
    render() {
        const { list } = this.props;
        return <ul className="list-container">{
            list.map((listItem) => <ListItem className="list-item" key={listItem.id} listItem={listItem} />)
        }</ul>;
    }
}

function mapStateToProps({ list }) {
    return { list };
}

export default connect(mapStateToProps, {})(Characters);
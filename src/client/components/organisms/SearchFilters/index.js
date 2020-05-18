import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Search from '../../molecules/Search';
import './index.scss';
import { connect } from 'react-redux';
import { setSearch } from './actions/search';

class SearchFilters extends PureComponent {
    static propTypes = {
        setSearch: PropTypes.func.isRequired,
        search: PropTypes.string.isRequired
    }

    searchByName = (value) => {
        const { setSearch } = this.props;
        setSearch(value);
    }

    render() {
        return (
            <section className="search-filters">
                <Search onChange={this.searchByName} value={this.props.search} />
            </section>
        );
    }
}

function mapStateToProps({ search }) {
    return { search };
}

export default connect(mapStateToProps, {
    setSearch
})(SearchFilters);
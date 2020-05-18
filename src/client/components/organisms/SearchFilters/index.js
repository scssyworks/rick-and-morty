import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Search from '../../molecules/Search';
import { connect } from 'react-redux';
import { setSearch } from './actions/search';
import Sort from '../../molecules/Sort';
import './index.scss';
import { setSortBy } from './actions/sortBy';
import { setSortOrder } from './actions/sortOrder';
class SearchFilters extends PureComponent {
    static propTypes = {
        setSearch: PropTypes.func.isRequired,
        search: PropTypes.string.isRequired,
        list: PropTypes.array.isRequired,
        setSortBy: PropTypes.func.isRequired,
        setSortOrder: PropTypes.func.isRequired,
        sortBy: PropTypes.string.isRequired,
        sortOrder: PropTypes.string.isRequired
    }

    searchByName = (value) => {
        const { setSearch } = this.props;
        setSearch(value);
    }

    getSortByList() {
        const { list } = this.props;
        const firstItem = list[0];
        if (firstItem) {
            return Object.keys(firstItem)
                .filter(key => !['episode', 'hidden'].includes(key))
                .map(key => ({ key, value: key }));
        }
        return [];
    }

    sortByChange = (value) => {
        const { setSortBy } = this.props;
        setSortBy(value);
    }
    sortOrderChange = (value) => {
        console.log(value);
        const { setSortOrder } = this.props;
        setSortOrder(value);
    }

    render() {
        const { sortBy, sortOrder } = this.props;
        return (
            <section className="search-filters">
                <Search onChange={this.searchByName} value={this.props.search} />
                <div className="sorting-section">
                    <Sort
                        sortByFields={this.getSortByList()}
                        sortOrderFields={[{ key: 'asc', value: 'Ascending' }, { key: 'desc', value: 'Descending' }]}
                        sortByChange={this.sortByChange}
                        sortOrderChange={this.sortOrderChange}
                        sortBy={sortBy}
                        sortOrder={sortOrder}
                    />
                </div>
            </section>
        );
    }
}

function mapStateToProps({ list, search, sortBy, sortOrder }) {
    return { list, search, sortBy, sortOrder };
}

export default connect(mapStateToProps, {
    setSearch,
    setSortBy,
    setSortOrder
})(SearchFilters);
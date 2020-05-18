import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Search from '../../molecules/Search';
import { connect } from 'react-redux';
import { setSearch } from './actions/search';
import Sort from '../../molecules/Sort';
import './index.scss';

class SearchFilters extends PureComponent {
    static propTypes = {
        setSearch: PropTypes.func.isRequired,
        search: PropTypes.string.isRequired,
        list: PropTypes.array.isRequired
    }

    searchByName = (value) => {
        const { setSearch } = this.props;
        setSearch(value);
    }

    getSortByList() {
        const { list } = this.props;
        const firstItem = list[0];
        if (firstItem) {
            return Object.keys(firstItem).map(key => ({ key, value: key }));
        }
        return [];
    }

    sortByChange = () => { }
    sortOrderChange = () => { }

    render() {
        return (
            <section className="search-filters">
                <Search onChange={this.searchByName} value={this.props.search} />
                <div className="sorting-section">
                    <Sort
                        sortByFields={this.getSortByList()}
                        sortOrderFields={[{ key: 'asc', value: 'Ascending' }, { key: 'desc', value: 'Descending' }]}
                        sortByChange={this.sortByChange}
                        sortOrderChange={this.sortOrderChange}
                    />
                </div>
            </section>
        );
    }
}

function mapStateToProps({ list, search }) {
    return { list, search };
}

export default connect(mapStateToProps, {
    setSearch
})(SearchFilters);
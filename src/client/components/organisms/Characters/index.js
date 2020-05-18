import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListItem from '../../molecules/ListItem';
import './index.scss';

class Characters extends PureComponent {
    static propTypes = {
        list: PropTypes.array.isRequired,
        facets: PropTypes.object.isRequired,
        search: PropTypes.string.isRequired,
        sortBy: PropTypes.string.isRequired,
        sortOrder: PropTypes.string.isRequired
    };

    filterItems = (listItem) => {
        const { facets } = this.props;
        // Check if any facets are applied
        const appliedFacets = Object.keys(facets).filter(facet => {
            return facets[facet].find(filter => filter.checked);
        });
        if (appliedFacets.length) {
            let isValid = true;
            // Check if current list item matches the facet applied
            appliedFacets.forEach(applied => {
                let currentValue = listItem[applied];
                if (applied === 'origin') {
                    currentValue = listItem[applied].name;
                }
                const checkedValues = facets[applied].filter(curr => curr.checked).map(curr => curr.name);
                isValid = isValid && checkedValues.includes(currentValue);
            });
            return isValid;
        }
        // Check if search input is provided
        let { search } = this.props;
        search = search.toLowerCase().trim();
        if (search) {
            return listItem.name.toLowerCase().includes(search);
        }
        return true;
    }

    applySort(list) {
        const { sortBy, sortOrder } = this.props;
        list.sort((curr, next) => {
            let currVal = curr[sortBy];
            let nextVal = next[sortBy];
            if (['location', 'origin'].includes(sortBy)) {
                currVal = curr[sortBy].name;
                nextVal = next[sortBy].name;
            }
            if (typeof currVal === 'number' && typeof nextVal === 'number') {
                if (sortOrder === 'asc') {
                    return currVal - nextVal;
                }
                return nextVal - currVal;
            }
            if (sortOrder === 'asc') {
                return currVal.localeCompare(nextVal);
            }
            return nextVal.localeCompare(currVal);
        });
        return list;
    }

    render() {
        const { list } = this.props;
        const filteredList = this.applySort(list.filter(this.filterItems));
        if (filteredList.length === 0) {
            return <div>No results!</div>;
        }
        return <ul className="list-container">{
            filteredList
                .map((listItem) => <ListItem className="list-item" key={listItem.id} listItem={listItem} />)
        }</ul>;
    }
}

function mapStateToProps({ list, facets, search, sortBy, sortOrder }) {
    return { list, facets, search, sortBy, sortOrder };
}

export default connect(mapStateToProps, {})(Characters);
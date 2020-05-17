import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './index.scss';
import { clearFilter } from './actions/clearFilter';

class AppliedFacets extends PureComponent {
    static propTypes = {
        facets: PropTypes.object.isRequired,
        clearFilter: PropTypes.func.isRequired
    };

    getAppliedFacets(facets) {
        return Object.keys(facets).filter(facet => {
            return facets[facet].find(curr => curr.checked);
        });
    }

    clearFacet(facetName) {
        this.props.clearFilter(facetName);
    }

    render() {
        const { facets } = this.props;
        return (
            <ul className="applied-facets">
                {
                    this.getAppliedFacets(facets).map(
                        (facetName, index) => (
                            <li className="applied-facets-item" key={`${facetName}__${index}`}>
                                <span>{facetName}</span>
                                <button type="button" onClick={() => this.clearFacet(facetName)}>
                                    <em className="material-icons">close</em>
                                </button>
                            </li>
                        )
                    )
                }
            </ul>
        );
    }
}

function mapStateToProps({ facets }) {
    return { facets };
}

export default connect(mapStateToProps, {
    clearFilter
})(AppliedFacets);
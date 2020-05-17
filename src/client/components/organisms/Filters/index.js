import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FilterItem from '../../molecules/FilterItem';
import './index.scss';
import { updateFilter } from './actions/updateFilter';

class Filters extends PureComponent {
    static propTypes = {
        facets: PropTypes.object.isRequired,
        updateFilter: PropTypes.func.isRequired
    };

    filterOnChange(value, filter) {
        const { updateFilter } = this.props;
        updateFilter({
            [filter]: {
                name: value
            }
        });
    }

    render() {
        const { facets } = this.props;
        return (
            <section className="filter-section">
                {Object.keys(facets).map(
                    (facet, index) => (
                        <React.Fragment key={`facet_${index}`}>
                            <h3>{facet}</h3>
                            <ul className={`filter ${facet}`}>
                                {facets[facet].map(
                                    (filter, index) => <FilterItem
                                        name={facet}
                                        id={`${index}`}
                                        key={`${filter.name}_${index}`}
                                        onChange={() => this.filterOnChange(filter.name, facet)}
                                        value={filter.name}
                                        checked={filter.checked}
                                    />
                                )}
                            </ul>
                        </React.Fragment>
                    )
                )}
            </section>
        );
    }
}

function mapStateToProps({ facets }) {
    return { facets };
}

export default connect(mapStateToProps, {
    updateFilter
})(Filters);
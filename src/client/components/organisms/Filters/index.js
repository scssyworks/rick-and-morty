import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FilterItem from '../../molecules/FilterItem';
import './index.scss';

class Filters extends PureComponent {
    static propTypes = {
        facets: PropTypes.object.isRequired
    };

    filterOnChange(value, filter) {
        console.log(value, filter);
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
                                    (filterName, index) => <FilterItem
                                        name={facet}
                                        id={`${index}`}
                                        key={`${filterName}_${index}`}
                                        onChange={() => this.filterOnChange(filterName, facet)}
                                        value={filterName}
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

export default connect(mapStateToProps, {})(Filters);
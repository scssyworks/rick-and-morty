import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LineChart, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';
import { fetchHackerNewsFeed, fetchUpvotes, updateUpvotes, fetchHiddenFeeds, hideFeed } from '../../actions';
import './index.scss';

class HomePage extends Component {
    static propTypes = {
        upvotes: PropTypes.object.isRequired,
        feed: PropTypes.array.isRequired,
        hidden: PropTypes.object.isRequired,
        updateUpvotes: PropTypes.func.isRequired,
        fetchHackerNewsFeed: PropTypes.func.isRequired,
        hideFeed: PropTypes.func.isRequired,
        fetchUpvotes: PropTypes.func.isRequired,
        fetchHiddenFeeds: PropTypes.func.isRequired
    };

    page = 1;
    getUpvotes(authorId) {
        const { upvotes } = this.props;
        if (upvotes && upvotes[authorId]) {
            return +upvotes[authorId];
        }
        return 0;
    }

    upvote(authorId) {
        this.props.updateUpvotes(authorId);
    }

    loadMoreResults = () => {
        this.page += 1;
        this.props.fetchHackerNewsFeed(this.page);
    }

    hideItem = (authorId) => {
        this.props.hideFeed(authorId);
    }

    renderFeed = () => {
        const { feed, hidden } = this.props;
        return feed
            .filter(feedItem => !hidden[feedItem.authorId])
            .map(feedItem => (
                <tr key={feedItem.authorId}>
                    <td className="comment-count">{feedItem.commentCount}</td>
                    <td className="upvote-count">{this.getUpvotes(feedItem.authorId)}</td>
                    <td className="upvote-control">
                        <button onClick={() => this.upvote(feedItem.authorId)} type="button">
                            <span className="caret up"></span>
                            <span className="sr-only">Upvode</span>
                        </button>
                    </td>
                    <td className="title">{feedItem.title}</td>
                    <td className="url">{feedItem.url ? <a href={feedItem.url}>{feedItem.url}</a> : ''}</td>
                    <td className="author">{feedItem.author}</td>
                    <td className="time">
                        <span>{feedItem.time}</span>
                        <button onClick={() => this.hideItem(feedItem.authorId)} type="button">[hide]</button>
                    </td>
                </tr>
            ));
    }

    getChartData() {
        const { feed, upvotes, hidden } = this.props;
        return feed
            .filter(feedItem => !hidden[feedItem.authorId])
            .map(feedItem => ({
                id: feedItem.author,
                votes: (upvotes[feedItem.authorId] || 0)
            }));
    }

    render() {
        const { feed, upvotes, hidden } = this.props;
        if (!(feed && upvotes && hidden)) {
            return <div className="loader">Loading...</div>;
        }
        return (
            <React.Fragment>
                <div className="hacker-news-feed">
                    <table>
                        <thead>
                            <tr>
                                <th>Comments</th>
                                <th>Upvotes</th>
                                <th></th>
                                <th>Title</th>
                                <th>Domain</th>
                                <th>Posted By</th>
                                <th>Posted when?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderFeed()}
                        </tbody>
                    </table>
                </div>
                <button onClick={this.loadMoreResults} className="load-more-btn mt-4 mb-4" type="button">Load More</button>
                <ResponsiveContainer height={300} width="100%">
                    <LineChart data={this.getChartData()}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="id" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="votes" stroke="#8884d8" />
                    </LineChart>
                </ResponsiveContainer>
            </React.Fragment>
        );
    }

    componentDidMount() {
        this.props.fetchHackerNewsFeed();
        this.props.fetchUpvotes();
        this.props.fetchHiddenFeeds();
    }
}

function mapStateToProps({ feed, upvotes, hidden }) {
    return { feed, upvotes, hidden };
}

function loadData(store) {
    return Promise.all([
        store.dispatch(fetchHackerNewsFeed()),
        store.dispatch(fetchUpvotes()),
        store.dispatch(fetchHiddenFeeds())
    ]);
}



export default {
    component: connect(mapStateToProps, {
        fetchHackerNewsFeed,
        fetchUpvotes,
        updateUpvotes,
        fetchHiddenFeeds,
        hideFeed
    })(HomePage),
    loadData
};
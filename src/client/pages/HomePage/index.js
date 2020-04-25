import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHackerNewsFeed, fetchUpvotes, updateUpvotes } from '../../actions';
import './index.scss';
import { LineChart, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';

class HomePage extends Component {
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

    renderFeed = () => {
        const { feed } = this.props;
        return feed.map(feedItem => (
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
                    <button>[hide]</button>
                </td>
            </tr>
        ));
    }

    getChartData() {
        const { feed, upvotes } = this.props;
        return feed.map(feedItem => ({
            id: feedItem.author,
            votes: (upvotes[feedItem.authorId] || 0)
        }));
    }

    render() {
        const { feed, upvotes } = this.props;
        if (!(feed && upvotes)) {
            return <div className="loader">Loading...</div>;
        }
        return (
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
            </div>
        );
    }

    componentDidMount() {
        this.props.fetchHackerNewsFeed();
        this.props.fetchUpvotes();
    }
}

function mapStateToProps({ feed, upvotes }) {
    return { feed, upvotes };
}

function loadData(store) {
    return Promise.all([
        store.dispatch(fetchHackerNewsFeed()),
        store.dispatch(fetchUpvotes())
    ]);
}

export default {
    component: connect(mapStateToProps, {
        fetchHackerNewsFeed,
        fetchUpvotes,
        updateUpvotes
    })(HomePage),
    loadData
};
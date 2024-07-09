import React from 'react';

const PageInsights = ({ insights }) => {
    return (
        <div>
            <h3>Page Insights</h3>
            <div>Total Followers/Fans: {insights.total_followers}</div>
            <div>Total Engagement: {insights.total_engagement}</div>
            <div>Total Impressions: {insights.total_impressions}</div>
            <div>Total Reactions: {insights.total_reactions}</div>
        </div>
    );
};

export default PageInsights;


import React, { useState } from 'react';
import axios from 'axios';
import LoginButton from './components/FacebookLoginComponent';
import UserProfile from './components/UserProfile';
import PageSelect from './components/PageSelect';
import PageInsights from './components/PageInsights';

const App = () => {
    const [user, setUser] = useState(null);
    const [pages, setPages] = useState([]);
    const [selectedPageId, setSelectedPageId] = useState(null);
    const [insights, setInsights] = useState(null);

    const responseFacebook = async (response) => {
        console.log('Facebook login response:', response);
        if (response && response.accessToken) {
            setUser(response);
            try {
                const pagesResponse = await axios.get(
                    `/api/pages/${response.userID}?access_token=${response.accessToken}`
                );
                setPages(pagesResponse.data.data);
            } catch (error) {
                console.error('Error fetching pages:', error);
            }
        }
    };

    const handlePageSelect = async (event) => {
        const pageId = event.target.value;
        setSelectedPageId(pageId);
        try {
            const insightsResponse = await axios.get(
                `/api/insights/${pageId}?access_token=${user.accessToken}`
            );
            const insightsData = insightsResponse.data.data.reduce((acc, item) => {
                acc[item.name] = item.values[0].value;
                return acc;
            }, {});
            setInsights(insightsData);
        } catch (error) {
            console.error('Error fetching insights:', error);
        }
    };

    return (
        <div>
            {!user ? (
                <LoginButton responseFacebook={responseFacebook} />
            ) : (
                <>
                    <UserProfile user={user} />
                    <PageSelect pages={pages} onPageSelect={handlePageSelect} />
                    {insights && <PageInsights insights={insights} />}
                </>
            )}
        </div>
    );
};

export default App;

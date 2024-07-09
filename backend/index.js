const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.get('/api/pages/:userId', async (req, res) => {
    const { userId } = req.params;
    const { accessToken } = req.query;
    try {
        const response = await axios.get(`https://graph.facebook.com/${userId}/accounts?access_token=${accessToken}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/insights/:pageId', async (req, res) => {
    const { pageId } = req.params;
    const { accessToken } = req.query;
    try {
        const response = await axios.get(`https://graph.facebook.com/${pageId}/insights?metric=page_fans,page_engaged_users,page_impressions,page_actions_post_reactions_total&access_token=${accessToken}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

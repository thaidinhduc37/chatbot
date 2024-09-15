import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.MOVIE_APP_BASE_URL,
    slugURL: process.env.SLUG_MOVIE_URL,
    keywordsURL: process.env.KEY_WORD_MOVIE_URL,
});

export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};

export default httpRequest;

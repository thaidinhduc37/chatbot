import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

// Chat API
export const sendMessageToBot = async (message, sessionId) => {
    try {
        const response = await axios.post(`${BASE_URL}/chat/massage`, {
            message,
            context: { session_id: sessionId },
        });
        return response.data;
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
};

export const endSession = async (sessionId) => {
    try {
        const response = await axios.post(`${BASE_URL}/chat/end-session`, {
            session_id: sessionId,
        });
        return response.data;
    } catch (error) {
        console.error('Error ending session:', error);
        throw error;
    }
};

// Flow API
export const getScenariosByProcedure = async (procedureId) => {
    try {
        const response = await axios.get(`${BASE_URL}/flow/${procedureId}/scenarios`);
        return response.data || [];
    } catch (error) {
        console.error('Error getting scenarios:', error);
        return [];
    }
};

export const getFlowByProcedure = async (procedureId, scenarioId = null) => {
    try {
        const url = scenarioId
            ? `${BASE_URL}/flow/${procedureId}?scenario=${scenarioId}`
            : `${BASE_URL}/flow/${procedureId}`;
        const response = await axios.get(url);
        return response.data.flow;
    } catch (error) {
        console.error('Error getting flow:', error);
        return null;
    }
};

// Procedure API
export const getProcedures = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/procedures`);
        return response.data;
    } catch (error) {
        console.error('Error getting procedures:', error);
        return [];
    }
};

export const getProcedureById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/procedures/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error getting procedure:', error);
        return null;
    }
};

// Step API
export const getStepsByProcedure = async (procedureId) => {
    try {
        const response = await axios.get(`${BASE_URL}/steps/procedure/${procedureId}`);
        return response.data;
    } catch (error) {
        console.error('Error getting steps:', error);
        return [];
    }
};

// Search API
export const search = async (query, type = null) => {
    try {
        const response = await axios.get(`${BASE_URL}/search`, {
            params: { query, type },
        });
        return response.data;
    } catch (error) {
        console.error('Error searching:', error);
        return [];
    }
};

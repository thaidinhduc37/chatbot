import axios from 'axios';
const BASE_URL = process.env.REACT_APP_API_URL || '';


export const sendMessageToBot = async (message, sessionId) => {
    const response = await fetch(`${BASE_URL}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, session_id: sessionId }),
        mode: 'cors',
    });
    if (!response.ok) throw new Error(`Lỗi máy chủ: ${response.status} ${response.statusText}`);
    return response.json();
};

export const endSession = async (sessionId) => {
    const response = await fetch(`${BASE_URL}/end-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_id: sessionId }),
    });
    if (!response.ok) throw new Error(`Lỗi máy chủ: ${response.status} ${response.statusText}`);
    return response.json();
};


export const getFlowByProcedure = async (procedureId) => {
    try {
        const res = await axios.get(`http://localhost:8000/api/flow/${procedureId}`);
        return res.data.flow;
    } catch (error) {
        console.error('Lỗi khi lấy interaction flow:', error);
        return null;
    }
};

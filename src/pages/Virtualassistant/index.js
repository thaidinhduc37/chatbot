import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Virtualassistant.module.scss';
import Chatbot from '~/components/Chatbot';
import MiniBrowser from '~/components/MiniBrowser';
import { sendMessageToBot, endSession as endSessionAPI } from '~/api/api'; // Tách logic API

const cx = classNames.bind(styles);

// Sử dụng BASE_URL rỗng để tận dụng proxy trong phát triển
const BASE_URL = ''; // Proxy sẽ tự động chuyển đến http://127.0.0.1:8000 (xem package.json)

const Virtualassistant = () => {
    const [message, setMessage] = useState('');
    const [responses, setResponses] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [sessionId, setSessionId] = useState(`session_${Date.now()}`); // Tạo session_id duy nhất

    // Hàm gửi tin nhắn đến API Flask
    const sendMessage = async (customMessage) => {
        const content = customMessage || message.trim();
        if (!content) return;

        setResponses((prev) => [...prev, { sender: 'user', text: content }]);
        setMessage('');
        setIsLoading(true);

        try {
            const data = await sendMessageToBot(content, sessionId);
            if (data.response) {
                setResponses((prev) => [...prev, { sender: 'bot', text: data.response, isHTML: true }]);
                if (data.session_id) setSessionId(data.session_id);
            } else {
                setResponses((prev) => [...prev, { sender: 'bot', text: 'Bot chưa có phản hồi, vui lòng thử lại.' }]);
            }
        } catch (error) {
            console.error('Lỗi khi gửi tin nhắn:', error.message);
            if (error.message.includes('Failed to fetch')) {
                console.error('Có thể là lỗi CORS. Kiểm tra origin và cấu hình backend.');
            }
            setResponses((prev) => [...prev, { sender: 'bot', text: 'Có lỗi xảy ra, vui lòng thử lại.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    // Hàm kết thúc phiên và xóa lịch sử
    const endSession = async () => {
        try {
            await endSessionAPI(sessionId);
            setResponses([]); // Xóa lịch sử trên frontend
            setSessionId(`session_${Date.now()}`); // Tạo session_id mới
        } catch (error) {
            console.error('Lỗi khi kết thúc phiên:', error.message);
            setResponses((prev) => [...prev, { sender: 'bot', text: 'Không thể kết thúc phiên, vui lòng thử lại.' }]);
        }
    };

    // Không cần fetch lịch sử vì backend lưu tạm trong RAM
    useEffect(() => {
        // Có thể thêm logic để tải lịch sử từ database sau này
    }, []);

    return (
        <div className={cx('virtualassistant-wrapper')}>
            <h1 className={cx('title')}>Trợ lý ảo Dịch vụ Công</h1>
            <div className={cx('content')}>
                <div className={cx('mini-browser-container')}>
                    <MiniBrowser />
                </div>
                <div className={cx('chatbot-container')}>
                    <Chatbot
                        responses={responses}
                        message={message}
                        setMessage={setMessage}
                        sendMessage={sendMessage}
                        isLoading={isLoading}
                        endSession={endSession}
                    />
                </div>
            </div>
        </div>
    );
};

export default Virtualassistant;

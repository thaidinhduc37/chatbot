import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Virtualassistant.module.scss';
import Chatbot from '~/components/Chatbot';

const cx = classNames.bind(styles);

const Virtualassistant = () => {
    const [message, setMessage] = useState('');
    const [responses, setResponses] = useState([]);

    const sendMessage = async () => {
        if (message.trim() === '') return;

        const userMessage = { sender: 'user', text: message };
        setResponses([...responses, userMessage]);

        try {
            const response = await fetch('http://localhost:5000/api/chatbot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            });

            if (!response.ok) {
                throw new Error('Server trả về lỗi');
            }

            const data = await response.json();
            setResponses([...responses, userMessage, { sender: 'bot', text: data.answer }]);
        } catch (error) {
            console.error('Lỗi khi gửi tin nhắn:', error);
            setResponses([...responses, userMessage, { sender: 'bot', text: 'Có lỗi xảy ra, vui lòng thử lại.' }]);
        }

        setMessage('');
    };

    return (
        <div className={cx('virtualassistant-wrapper')}>
            <h1>Trợ lý ảo Dịch vụ Công</h1>
            <Chatbot responses={responses} message={message} setMessage={setMessage} sendMessage={sendMessage} />
        </div>
    );
};

export default Virtualassistant;

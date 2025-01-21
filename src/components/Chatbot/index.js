import React from 'react';
import classNames from 'classnames/bind';
import styles from './Chatbot.module.scss';

const cx = classNames.bind(styles);

const Chatbot = ({ responses, message, setMessage, sendMessage }) => {
    return (
        <div className={cx('chatbot-wrapper')}>
            <div className={cx('chat-window')}>
                {responses.map((res, index) => (
                    <div
                        key={index}
                        className={cx('message', {
                            user: res.sender === 'user',
                            bot: res.sender === 'bot',
                        })}
                    >
                        <span>{res.text}</span>
                    </div>
                ))}
            </div>
            <div className={cx('input-area')}>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Nhập tin nhắn..."
                    className={cx('input')}
                />
                <button onClick={sendMessage} className={cx('send-button')}>
                    Gửi
                </button>
            </div>
        </div>
    );
};

export default Chatbot;

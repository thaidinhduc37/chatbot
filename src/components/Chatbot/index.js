import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Chatbot.module.scss';
import images from '~/assets/images';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const cx = classNames.bind(styles);

const BASE_URL = 'http://127.0.0.1:8000'; // Đồng bộ với Virtualassistant

const Chatbot = ({ responses, message, setMessage, sendMessage, isLoading, endSession }) => {
    const [fields, setFields] = useState([]);
    const [isOnline, setIsOnline] = useState(false);
    const inputRef = useRef(null);

    const fieldNameMapping = {
        'Cấp, quản lý thẻ Căn cước': 'Cấp Căn cước',
        'Đăng ký, quản lý cư trú': 'Quản lý cư trú',
        'Đăng ký, quản lý phương tiện giao thông cơ giới đường bộ': 'Đăng ký xe',
        'Quản lý xuất nhập cảnh': 'Hộ chiếu',
    };

    useEffect(() => {
        const fetchFields = async () => {
            try {
                const response = await fetch(`${BASE_URL}/fields`);
                if (!response.ok) throw new Error('Không thể lấy danh sách lĩnh vực.');
                const data = await response.json();
                setFields(data.fields || []);
                setIsOnline(true);
            } catch (error) {
                console.error('Lỗi khi lấy danh sách lĩnh vực:', error);
                setIsOnline(false);
            }
        };

        fetchFields();
    }, []);

    // Đặt lại focus vào ô nhập liệu khi responses thay đổi
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [responses]);

    const handleFieldClick = (field) => {
        sendMessage(fieldNameMapping[field] || field);
    };

    const handleSend = () => {
        if (message.trim() && !isLoading) {
            sendMessage(message);
            
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !isLoading) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className={cx('chatbot-wrapper')}>
            {/* Header */}
            <div className={cx('chat-header')}>
                <img src={images.logo} alt="Chatbot hỗ trợ Dịch vụ công" className={cx('chat-avatar')} />
                <div className={cx('chat-status')}>
                    <span className={cx('chat-name')}>Chatbot hỗ trợ Dịch vụ công</span>
                    <span
                        className={cx('chat-subtitle', {
                            online: isOnline,
                            offline: !isOnline,
                        })}
                    >
                        {isOnline ? 'Đang hoạt động' : 'Kết nối gián đoạn'}
                    </span>
                </div>
            </div>

            {/* Chat Window */}
            <div className={cx('chat-window')}>
                {responses.length === 0 && fields.length > 0 && (
                    <div className={cx('field-suggestions')}>
                        <p className={cx('field-intro')}>Bạn muốn hỏi về lĩnh vực nào? Hãy chọn:</p>
                        {fields.map((field, index) => (
                            <motion.button
                                key={index}
                                className={cx('field-button')}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleFieldClick(field)}
                                disabled={isLoading}
                            >
                                {fieldNameMapping[field] || field}
                            </motion.button>
                        ))}
                        <p className={cx('field-intro')}>Hoặc bạn có thể gửi yêu cầu khác vào mục tin nhắn dưới đây:</p>
                    </div>
                )}

                {/* Hiển thị tin nhắn */}
                {responses.map((res, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={cx('message', {
                            user: res.sender === 'user',
                            bot: res.sender === 'bot',
                        })}
                    >
                        {res.sender === 'bot' && (
                            <img src={images.logo} alt="Chatbot" className={cx('message-avatar')} />
                        )}
                        {res.sender === 'user' && (
                            <img src={images.userAvatar} alt="User" className={cx('message-avatar')} /> // Thêm avatar người dùng
                        )}
                        <div className={cx('message-content')} style={{ whiteSpace: 'pre-line' }}>
                            {res.isHTML ? (
                                <span className={cx('message-text')} dangerouslySetInnerHTML={{ __html: res.text }} />
                            ) : (
                                <span className={cx('message-text')}>{res.text}</span>
                            )}
                        </div>
                    </motion.div>
                ))}
                {isLoading && <div className={cx('loading')}>Đang xử lý...</div>}
            </div>

            {/* Input Area */}
            <div className={cx('input-area')}>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Nhập tin nhắn..."
                    className={cx('input')}
                    disabled={isLoading}
                    ref={inputRef} // Gắn tham chiếu vào ô nhập liệu
                />
                <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleSend}
                    className={cx('send-button')}
                    disabled={isLoading}
                >
                    <FaPaperPlane />
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={endSession}
                    className={cx('end-button')}
                    disabled={isLoading}
                >
                    Kết thúc
                </motion.button>
            </div>
        </div>
    );
};

export default Chatbot;

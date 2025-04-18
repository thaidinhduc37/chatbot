import React, { useRef, useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './MiniBrowser.module.scss';

const cx = classNames.bind(styles);

const MiniBrowser = () => {
    const iframeRef = useRef(null);
    const [history, setHistory] = useState(['https://dichvucong.daklak.gov.vn/vi/trangchu']);
    const [forwardHistory, setForwardHistory] = useState([]);
    const [currentUrl, setCurrentUrl] = useState('https://dichvucong.daklak.gov.vn/vi/trangchu');

    useEffect(() => {
        return () => {
            setHistory([]);
            setForwardHistory([]);
        };
    }, []);

    const handleBack = () => {
        if (history.length > 1) {
            const newHistory = [...history];
            const previousUrl = newHistory[newHistory.length - 2];
            newHistory.pop();
            setHistory(newHistory);
            setForwardHistory((prev) => [currentUrl, ...prev]);
            navigateTo(previousUrl);
        } else {
            console.warn('No history to go back');
        }
    };

    const handleForward = () => {
        if (forwardHistory.length > 0) {
            const nextUrl = forwardHistory[0];
            const newForwardHistory = forwardHistory.slice(1);
            setForwardHistory(newForwardHistory);
            setHistory((prev) => [...prev, nextUrl]);
            navigateTo(nextUrl);
        } else {
            console.warn('No forward history');
        }
    };

    const handleReload = () => {
        try {
            const iframeWindow = iframeRef.current?.contentWindow;
            if (iframeWindow) {
                iframeWindow.location.reload(); // Reload content without changing the URL
            }
        } catch (error) {
            console.error('Error with Reload button:', error);
        }
    };

    const navigateTo = (url) => {
        try {
            setCurrentUrl(url);
            if (iframeRef.current) {
                iframeRef.current.src = url;
            }
        } catch (error) {
            console.error('Navigation error:', error);
        }
    };

    const updateHistory = (newUrl) => {
        setHistory((prevHistory) => {
            if (prevHistory[prevHistory.length - 1] !== newUrl) {
                return [...prevHistory, newUrl];
            }
            return prevHistory;
        });
        setForwardHistory([]); // Clear forward history when navigating to a new URL
    };

    const handleIframeLoad = () => {
        try {
            const iframeWindow = iframeRef.current?.contentWindow;
            if (iframeWindow) {
                const newUrl = iframeWindow.location.href;
                if (newUrl !== currentUrl) {
                    setCurrentUrl(newUrl);
                    updateHistory(newUrl);
                }
            }
        } catch (error) {
            console.error('Error updating history:', error);
        }
    };

    return (
        <div className={cx('mini-browser-wrapper')}>
            <div className={cx('controls')}>
                <button
                    onClick={handleBack}
                    className={cx('button')}
                    disabled={history.length <= 1} // Disable if no history to go back
                >
                    Back
                </button>
                <button
                    onClick={handleForward}
                    className={cx('button')}
                    disabled={forwardHistory.length === 0} // Disable if no forward history
                >
                    Next
                </button>
                <button onClick={handleReload} className={cx('button')}>
                    Reload
                </button>
            </div>
            <iframe
                ref={iframeRef}
                src={currentUrl}
                onLoad={handleIframeLoad}
                className={cx('iframe')}
                title="Dịch vụ Công"
            ></iframe>
        </div>
    );
};

export default MiniBrowser;

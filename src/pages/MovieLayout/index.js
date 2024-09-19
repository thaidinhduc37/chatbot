import React from 'react';
import classNames from 'classnames/bind';

const MovieLayout = ({ title }) => {
    document.title = title;
    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
};

export default MovieLayout;

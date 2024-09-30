import React from 'react';
import classNames from 'classnames/bind';

import styles from './ListOrder.module.scss';


const cx = classNames.bind(styles);

function ListOrder({data, title, className}) {
    return(
        <select className={cx('form-control')}>
            <option value="">{title}</option>
            {data.map((item, index) => (
                <option className={className} key={index} value={item}>{item}</option>
            ))}
        </select>
    )
}

export default ListOrder
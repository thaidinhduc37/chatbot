import classNames from 'classnames/bind';

import Button from '../Button';
import styles from './EpisodesList.module.scss';

const cx = classNames.bind(styles);

function EpisodesList({ data, slug }) {
    return (
        <div className={cx('episodes')}>
            <span>Tập mới nhất: </span>
            {data &&
                Array.isArray(data) &&
                data.map((episode, i) => (
                    <Button
                        key={i}
                        className={cx('episodes-item')}
                        to={`/watch/${slug}-${episode.slug}`}
                        title={episode.name}
                    />
                ))}
        </div>
    );
}

export default EpisodesList;

import classNames from "classnames/bind";

import OptionHeading from "~/layouts/components/OptionHeading";
import styles from './SingleMovie.module.scss'

const cx = classNames.bind(styles)

function SingleMovie() {
    return(
    <div className={cx('wrapper')}>
        <OptionHeading/>
    </div>
    )
}

export default SingleMovie;
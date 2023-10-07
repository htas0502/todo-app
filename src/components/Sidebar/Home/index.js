import styles from './Groups.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Groups() {
    return (
        <div className={cx('Groups')}>
            {/* Group Item Container */}
            <div className={cx('group-item-container')}>
                {/* Group Title */}
                <div className={cx('group-title')}>
                    <i></i>
                    <p>Untitled Group</p>
                    <button>
                        <i>v</i>
                    </button>
                </div>

                {/* Group Item */}
                <div className={cx('group-item')}>
                    <i></i>
                    <p>My Group</p>
                    <p>4</p>
                </div>
            </div>
        </div>
    );
}

export default Groups;

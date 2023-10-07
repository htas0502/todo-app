import classNames from 'classnames/bind';
import styles from './User.module.scss';

const cx = classNames.bind(styles);

function User() {
    return (
        <div className={cx('User')}>
            <div className={cx('container')}>
                {/* Avater Img */}
                <div className={cx('avatar')}>
                    <img src="" alt="" />
                </div>

                {/* User Info */}
                <div className={cx('info')}>
                    <h3>Username</h3>
                    <p>email@mail.com</p>
                </div>
            </div>
        </div>
    );
}

export default User;

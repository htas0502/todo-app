import styles from './Navigations.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const options = [
    {
        icon: '',
        title: '',
    },
    {
        icon: '',
        title: '',
    },
    {
        icon: '',
        title: '',
    },
    {
        icon: '',
        title: '',
    },
    {
        icon: '',
        title: '',
    },
    {
        icon: '',
        title: '',
    },
    {
        icon: '',
        title: '',
    },
];

function Navigations() {
    return (
        <div className={cx('Navigations')}>
            <span></span>

            <div className={cx('search')}>
                <i></i>
                <input placeholder="Search" />
            </div>

            <div className={cx('container')}>
                <div className={cx('item')}>
                    <i>*</i>
                    <p>Navigation</p>
                </div>
            </div>

            <span></span>
        </div>
    );
}

export default Navigations;

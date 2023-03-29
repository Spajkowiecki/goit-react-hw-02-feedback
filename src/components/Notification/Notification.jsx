import style from './Notification.module.css';

const Notification = ({ message }) => {
  return <p className={style.notification}>{message}</p>;
};

export default Notification;

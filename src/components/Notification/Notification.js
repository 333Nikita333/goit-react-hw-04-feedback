import PropTypes from 'prop-types';
import { NotificationBox } from './Notification.styled';

export const Notification = ({ message }) => {
  return <NotificationBox>{message}</NotificationBox>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

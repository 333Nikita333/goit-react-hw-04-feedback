import PropTypes from 'prop-types';
import { Notification } from 'components/Notification';
import {
  StatisticsBox,
  Title,
  StatList,
  StatGood,
  StatNeutral,
  StatBad,
  StatTotal,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return total > 0 ? (
    <StatisticsBox>
      <Title>Statistics</Title>
      <StatList>
        <StatGood>Good: {good}</StatGood>
        <StatNeutral>Neutral: {neutral}</StatNeutral>
        <StatBad>Bad: {bad}</StatBad>
        <StatTotal>Total: {total}</StatTotal>
        <li>Positive feedback: {positivePercentage}%</li>
      </StatList>
    </StatisticsBox>
  ) : (
    <Notification message="There is no feedback" />
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

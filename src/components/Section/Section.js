import PropTypes from 'prop-types';
import { SectionFeedback, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionFeedback>
      <Title>{title}</Title>
      {children}
    </SectionFeedback>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

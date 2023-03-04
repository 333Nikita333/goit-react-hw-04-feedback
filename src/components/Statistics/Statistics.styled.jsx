import styled from 'styled-components';

export const StatisticsBox = styled.div`
  padding: 10px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;

  font-size: 25px;
  color: #333333;
  text-shadow: 2px 2px 0px #ffffff, 5px 4px 0px rgba(0, 0, 0, 0.15);
`;

export const StatList = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;

  & li {
    padding: 15px;
    border-radius: 15px;

    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const StatGood = styled.li`
  background-color: green;
`;

export const StatNeutral = styled.li`
  background-color: #fff685;
`;

export const StatBad = styled.li`
  background-color: red;
`;

export const StatTotal = styled.li`
  background-color: #e5eaf5;
`;

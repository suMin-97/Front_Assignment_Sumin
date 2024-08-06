import styled from 'styled-components';
import { ColumnCounterButtonsProps } from '@/types';

const ColumnCounterButtons = ({
  columnCount,
  handleColumnCountUp,
  handleColumnCountDown,
}: ColumnCounterButtonsProps) => {
  return (
    <Wrapper>
      <Button
        id="columnCountUp"
        type="button"
        onClick={handleColumnCountUp}
        disabled={columnCount === 4}
      >
        Colum 추가하기
      </Button>
      <Button
        id="columnCountDown"
        type="button"
        onClick={handleColumnCountDown}
        disabled={columnCount === 1}
      >
        Colum 제거하기
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    gap: 20px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    gap: 30px;
  }

  @media (min-width: 1024px) {
    gap: 40px;
  }
`;

const Button = styled.button`
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  background: lightgray;
  color: black;
  cursor: pointer;
  padding: 8px 12px;
  @media (max-width: 767px) {
    width: 120px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 150px;
  }

  @media (min-width: 1024px) {
    width: 200px;
  }
  &:hover {
    border: 2px solid black;
  }
  &:active {
    border: 2px solid gray;
    background: gray;
  }
`;

export default ColumnCounterButtons;

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
  gap: 30px;
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
  width: 150px;
  height: 34px;
  padding: 8px 12px;
  &:hover {
    border: 2px solid black;
  }
  &:active {
    border: 2px solid gray;
    background: gray;
  }
`;

export default ColumnCounterButtons;

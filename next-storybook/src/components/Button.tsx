import React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
  onClick: () => void;
}

const ButtonWrapper = styled.button`
  border: 1px solid #000000;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px 18px;
  cursor: pointer;
  color: #fff;
  font-size: 16px;

  &:focus {
    outline: none;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.4);
  }
`;

const Button = ({ text, onClick }: Props) => <ButtonWrapper onClick={onClick}>{text}</ButtonWrapper>;

export default Button;

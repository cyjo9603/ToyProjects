import React from 'react';
import styled from 'styled-components';

type ButtonType = 'default' | 'primary' | 'error' | 'dashed';

interface Props {
  text: string;
  type?: ButtonType;
  onClick?: () => void;
}

const ButtonWrapper = styled.button<{ buttonType: ButtonType }>`
  border: ${({ buttonType }) => getBorder(buttonType)};
  border-radius: 4px;
  background-color: ${({ buttonType }) => getBackgroundColor(buttonType)};
  padding: 10px 18px;
  cursor: pointer;
  color: ${({ buttonType }) => getColor(buttonType)};
  font-size: 16px;
  transition: opacity 0.3s;

  &:focus {
    outline: none;
  }

  &:hover {
    opacity: 0.7;
  }
`;

const Button = ({ text, type = 'default', onClick }: Props) => (
  <ButtonWrapper onClick={onClick} buttonType={type}>
    {text}
  </ButtonWrapper>
);

function getColor(type: ButtonType) {
  switch (type) {
    case 'dashed':
    case 'default':
      return '#888888';
    case 'primary':
    case 'error':
      return '#ffffff';
  }
}

function getBackgroundColor(type: ButtonType) {
  switch (type) {
    case 'dashed':
    case 'default':
      return '#ffffff';
    case 'primary':
      return '#1890ff';
    case 'error':
      return '#ff4d4f';
  }
}

function getBorder(type: ButtonType) {
  switch (type) {
    case 'default':
      return '1px solid #cccccc';
    case 'primary':
    case 'error':
      return 'none';
    case 'dashed':
      return '1px dashed #cccccc';
  }
}

export default Button;

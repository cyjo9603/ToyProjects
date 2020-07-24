import React, { useState, useCallback } from 'react';

interface Props {
  names: string[];
}

const NameList = ({ names }: Props) => {
  return (
    <ul>
      {names.map((v, i) => (
        <li key={i}>{v}</li>
      ))}
    </ul>
  );
};

export default NameList;

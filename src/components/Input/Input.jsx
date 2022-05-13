import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Input.style';

function Input({ name, labelText, inputType, placeHolder }) {
  return (
    <>
      <S.Label>{labelText}</S.Label>
      <S.Input name={name} type={inputType} placeHolder='{placeHolder}' />
    </>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  labelText: PropTypes.node.isRequired,
  inputType: PropTypes.node.isRequired,
  placeHolder: PropTypes.node.isRequired,
};

export default Input;

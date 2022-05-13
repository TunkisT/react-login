import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Content.style';

function Content({ title, content }) {
  return (
    <>
      <S.Title>{title}</S.Title>
      <S.Content>{content}</S.Content>
    </>
  );
}

Content.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

export default Content;

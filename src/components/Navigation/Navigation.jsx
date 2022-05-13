import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Navigation.style';

function Navigation({ data }) {
  return (
    <S.Navigation>
      <S.Image
        src='https://www.tailorbrands.com/wp-content/uploads/2020/07/amazon-logo.jpg'
        alt='amazon'
      />
      <S.LinkDiv>
        {data.map((obj) => (
          <S.Link href={obj.link}>{obj.title}</S.Link>
        ))}
      </S.LinkDiv>
    </S.Navigation>
  );
}

Navigation.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Navigation;

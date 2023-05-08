import React from 'react';
import { StFlexBox } from 'src/UI/styles/common.styled';
import {
  StSearchHeaderBackButton,
  StSearchHeaderBackImage,
  StSearchHeaderNotification,
  StSearchHeaderTitle,
  StSearchHeaderWrap,
} from 'src/UI/styles/SearchHeader.styled';

import Back from 'src/assets/design/Search/Left.svg';
import Alarm from 'src/assets/Alarm.svg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { soonDevelop } from 'src/utils/soonDevelop';

function SearchHeader({ title }) {
  const navigate = useNavigate();
  return (
    <StSearchHeaderWrap sort="space-between">
      <StFlexBox>
        <StSearchHeaderBackButton
          onClick={() => {
            navigate(-1);
          }}
        >
          <StSearchHeaderBackImage
            src={Back}
            alt="뒤로가기 버튼"
          />
        </StSearchHeaderBackButton>
        <StSearchHeaderTitle>{title}</StSearchHeaderTitle>
      </StFlexBox>
      <StSearchHeaderNotification>
        {/* 구현 후 수정 */}
        <Link
          to="#"
          onClick={soonDevelop}
        >
          <img
            src={Alarm}
            alt="알람 버튼"
          />
        </Link>
      </StSearchHeaderNotification>
    </StSearchHeaderWrap>
  );
}

export default SearchHeader;

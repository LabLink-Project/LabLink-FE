import React from 'react';
import DaumPostcodeEmbed, { useDaumPostcodePopup } from 'react-daum-postcode';

function PostcodeTest() {
  return (
    <div>
      <h1>다음 우편번호 서비스 테스트용입니다.</h1>
      {/* <EmbedPostcode /> */}
      <PopupPostcode />
    </div>
  );
}

export const EmbedPostcode = props => {
  console.log(props);
  const handleComplete = data => {
    console.log(data);
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? `(${extraAddress})` : '';
    }

    props.onChange(fullAddress);
  };
  return (
    <DaumPostcodeEmbed
      onComplete={handleComplete}
      {...props}
      onClose={props.onClose}
    />
  );
};

export const PopupPostcode = props => {
  const open = useDaumPostcodePopup();

  const handleComplete = data => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      {...props}
    >
      Open
    </button>
  );
};

export default PostcodeTest;

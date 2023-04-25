import React from 'react';
import { StPlace } from 'src/UI/styles/PopularStudy/Place.styled';
import { ReactComponent as Offline } from 'src/assets/design/Offline.svg';
import { ReactComponent as Online } from 'src/assets/design/Online.svg';
import { placeColors } from 'src/shared/designColors';

function Place({ category }) {
  return (
    <div>
      {category === 'ONLINE' ? (
        <>
          <Online fill={placeColors.online} />
          <StPlace>온라인</StPlace>
        </>
      ) : (
        <>
          <Offline fill={placeColors.offline} />
          <StPlace>오프라인</StPlace>
        </>
      )}
    </div>
  );
}

export default Place;

// MenuForm.jsx

import React from 'react';

import * as M from '../../styles/Menu';
import mockupImg from '../../assets/images/mockup-profile.png';

export function MenuForm({ id, name = '아무거나', image = mockupImg }) {
  return (
    <M.MenuContent>
      <M.ImgWrap>
        <M.Img src={image} alt={name} />
      </M.ImgWrap>
      <M.MenuContentTitle>{name}</M.MenuContentTitle>
      <M.MenuContentCategory>#파스타</M.MenuContentCategory>
    </M.MenuContent>
  );
}

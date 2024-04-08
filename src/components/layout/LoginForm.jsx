import React from 'react';
import * as L from '../../styles/Login';

function LoginForm({ title, descriptionOnOFF, description, children, forms }) {
  return (
    <L.FormBox>
      <L.FormTitle>{title}</L.FormTitle>
      {/* 로그인 페이지는 description이 없음. */}
      {descriptionOnOFF && <L.FormDescription>{description}</L.FormDescription>}
      <L.Form>{forms}</L.Form>
      {children}
    </L.FormBox>
  );
}

export default LoginForm;

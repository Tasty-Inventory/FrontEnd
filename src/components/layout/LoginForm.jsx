import React from 'react';
import * as L from '../../styles/Login';

function LoginForm({
  title,
  descriptionOnOFF,
  description,
  inputs,
  btn_category,
  children,
}) {
  return (
    <L.FormBox>
      <L.FormTitle>{title}</L.FormTitle>
      {/* 로그인 페이지는 description이 없음. */}
      {descriptionOnOFF && <L.FormDescription>{description}</L.FormDescription>}
      <L.Form>
        {inputs.map((input, index) => (
          <L.InputWrap key={index}>
            <L.LoginInput
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
            />
          </L.InputWrap>
        ))}
        <L.LoginBtn type="submit">{btn_category}</L.LoginBtn>
      </L.Form>
      {children}
    </L.FormBox>
  );
}

export default LoginForm;

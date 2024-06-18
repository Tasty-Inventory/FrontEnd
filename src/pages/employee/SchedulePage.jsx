import React, { useState } from 'react';
import * as S from '../../styles/Employee';
import Tabs from '../../components/employee/EmployeeTabs';

const SchedulePage = () => {
  const initialWeek = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    week: 1,
  };
  const [currentWeek, setCurrentWeek] = useState(initialWeek);

  const handleWeekChange = direction => {
    setCurrentWeek(prevWeek => {
      let { year, month, week } = prevWeek;
      week = direction === 'next' ? week + 1 : week - 1;
      if (week > 4) {
        week = 1;
        month += 1;
        if (month > 12) {
          month = 1;
          year += 1;
        }
      } else if (week < 1) {
        week = 4;
        month -= 1;
        if (month < 1) {
          month = 12;
          year -= 1;
        }
      }
      return { year, month, week };
    });
  };

  const schedule = {
    SUN: {
      '9:00': ['김은혜'],
      '10:00': ['김은혜'],
      '11:00': ['김은혜'],
      '12:00': ['김은혜', '오동재'],
      '13:00': ['김은혜', '오동재'],
      '14:00': ['김은혜', '오동재'],
      '15:00': ['김은혜', '오동재'],
      '16:00': ['김은혜', '오동재'],
      '17:00': ['김은혜', '오동재'],
      '18:00': ['오동재'],
      '19:00': ['오동재'],
      '20:00': ['오동재'],
      '21:00': ['오동재'],
    },
    MON: {
      '9:00': ['김용욱'],
      '10:00': ['김용욱'],
      '11:00': ['김용욱'],
      '12:00': ['김용욱', '김신희'],
      '13:00': ['김용욱', '김신희'],
      '14:00': ['김용욱', '김신희'],
      '15:00': ['김용욱', '김신희'],
      '16:00': ['김용욱', '김신희'],
      '17:00': ['김용욱', '김신희'],
      '18:00': ['오동재'],
      '19:00': ['오동재'],
      '20:00': ['오동재'],
      '21:00': ['오동재'],
    },
    TUE: {
      '9:00': ['김신희'],
      '10:00': ['김신희'],
      '11:00': ['김신희'],
      '12:00': ['김신희', '오동재'],
      '13:00': ['김신희', '오동재'],
      '14:00': ['김신희', '오동재'],
      '15:00': ['김신희', '오동재'],
      '16:00': ['김신희', '오동재'],
      '17:00': ['김신희', '오동재'],
      '18:00': ['오동재'],
      '19:00': ['오동재'],
      '20:00': ['오동재'],
      '21:00': ['오동재'],
    },
    // ... 수요일부터 토요일까지의 스케줄을 동일한 형식으로 추가할 수 있습니다.
  };

  return (
    <S.EmployeeContainer>
      <S.EmployeeWrap>
        <S.EmployeeTitle>Employee</S.EmployeeTitle>
        <Tabs />
        <S.ContentContainer>
          <S.NavigationAndTitle>
            <S.Navigation>
              <S.NavigationButton onClick={() => handleWeekChange('previous')}>
                {'<'}
              </S.NavigationButton>
              <span>
                {currentWeek.month}월 {currentWeek.week}주차
              </span>
              <S.NavigationButton onClick={() => handleWeekChange('next')}>
                {'>'}
              </S.NavigationButton>
            </S.Navigation>
            <S.TitleSecond>근태 관리</S.TitleSecond>
          </S.NavigationAndTitle>
          <S.RegisterButton>직원별 수정</S.RegisterButton>
          <S.Table>
            <thead>
              <tr>
                <th></th>
                <th>SUN</th>
                <th>MON</th>
                <th>TUE</th>
                <th>WED</th>
                <th>THU</th>
                <th>FRI</th>
                <th>SAT</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 12 }, (_, index) => (
                <tr key={index}>
                  <td>{index + 9}:00</td>
                  {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(
                    day => (
                      <td
                        key={day}
                        style={{
                          backgroundColor: '#f0f0f0',
                          border: '1px solid #ccc',
                        }}
                      >
                        {schedule[day] &&
                          schedule[day][`${index + 9}:00`] &&
                          schedule[day][`${index + 9}:00`].join(', ')}
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </S.Table>
        </S.ContentContainer>
      </S.EmployeeWrap>
    </S.EmployeeContainer>
  );
};

export default SchedulePage;

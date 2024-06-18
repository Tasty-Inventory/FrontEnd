import React, { useEffect, useState } from 'react';
import * as S from '../../styles/Employee';
import PropTypes from 'prop-types';
import axios from 'axios';

const ScheduleEditor = ({ handleScheduleClick }) => {
  const daysOfWeek = [
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
    'SATURDAY',
    'SUNDAY',
  ];
  const [employeeSchedules, setEmployeeSchedules] = useState({});
  const [currentDate, setCurrentDate] = useState(new Date());

  // 데이터를 백엔드에서 가져옴
  useEffect(() => {
    const fetchEmployeeSchedules = async () => {
      try {
        // 백엔드 API의 실제 URL에 대체
        const response = await axios.get(
          'https://example.com/api/employee/schedules',
          {
            params: {
              date: currentDate.toISOString().slice(0, 10),
            },
          },
        );
        setEmployeeSchedules(response.data); // 서버에서 받은 데이터를 상태에 저장
      } catch (error) {
        console.error('Error fetching employee schedules:', error);
      }
    };

    fetchEmployeeSchedules();
  }, [currentDate]); // currentDate가 변경될 때마다 데이터 다시 가져오기

  const renderEmployeeNames = (day, timeSlot) => {
    // 선택된 날짜와 시간 슬롯에 해당하는 직원 이름 배열 가져오기
    const names = employeeSchedules[day]?.[timeSlot] || [];
    return names.map((name, index) => <div key={index}>{name}</div>);
  };

  const handlePreviousWeek = () => {
    const prevWeek = new Date(currentDate);
    prevWeek.setDate(prevWeek.getDate() - 7);
    setCurrentDate(prevWeek);
  };

  const handleNextWeek = () => {
    const nextWeek = new Date(currentDate);
    nextWeek.setDate(nextWeek.getDate() + 7);
    setCurrentDate(nextWeek);
  };

  return (
    <S.ScheduleEditor>
      <S.Navigation>
        <S.ArrowButton onClick={handlePreviousWeek}>&lt;</S.ArrowButton>
        <S.CurrentWeek>
          {currentDate.toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </S.CurrentWeek>
        <S.ArrowButton onClick={handleNextWeek}>&gt;</S.ArrowButton>
      </S.Navigation>
      <S.ScheduleGrid>
        <div></div> {/* 빈 공간 */}
        {daysOfWeek.map(day => (
          <React.Fragment key={day}>
            <div>{day}</div>
            {Array.from({ length: 13 }).map((_, hourIndex) => {
              const timeSlot = `SLOT_${hourIndex}_${hourIndex + 1}`;
              return (
                <S.ScheduleSlot
                  key={`${day}_${hourIndex}`}
                  onClick={() =>
                    handleScheduleClick(
                      day,
                      timeSlot,
                      currentDate.toISOString().slice(0, 10),
                    )
                  }
                >
                  {renderEmployeeNames(day, timeSlot)} {/* 직원 이름 렌더링 */}
                </S.ScheduleSlot>
              );
            })}
          </React.Fragment>
        ))}
      </S.ScheduleGrid>
    </S.ScheduleEditor>
  );
};

ScheduleEditor.propTypes = {
  handleScheduleClick: PropTypes.func.isRequired,
};

export default ScheduleEditor;

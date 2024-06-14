import React from 'react';
import styled from 'styled-components';

const DayBox = styled.div`
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 16px;
    width: 200px;
    display: flex;
    flex-direction: column;
    height: 200px; // Set a fixed height
`;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
`;

const DayHeader = styled.div`
    color: #333;
    font-size: 16px;
    font-weight: bold;
`;

const TaskCompleted = styled.div`
    display: flex;
    align-items: center;
    color: #333;
    font-size: 16px;
    font-weight: bold;
`;

const CompletedDot  = styled.div`
    width: 12px;
    height: 12px;
    background-color: #4caf50;
    border-radius: 2px;
    margin-right: 8px;
`;

const TaskList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;

`;

const TaskItem = styled.li`
    display: flex;
    align-items: center;
    border-radius: 4px;
    color: #555;
    margin-bottom: 2px;
    padding: 8px;
`;

const TaskDot = styled.div`
  width: 6px;
  height: 6px;
  background-color: #333;
  border-radius: 50%;
  margin-right: 8px;
`;

const SeeMore = styled.div`
  color: #333;
  font-size: 14px;
  font-style: italic;
  text-align: left;
  margin-top: 5px;
`;

const CalendarBox = () => {

    const tasks = ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5', 'Task 6'];
    const showSeeMore = tasks.length > 3;

    return (
        <DayBox>
            <HeaderContainer>
                <DayHeader>24</DayHeader>
                <TaskCompleted>
                    <CompletedDot />
                </TaskCompleted>
            </HeaderContainer>
            <TaskList>
                {tasks.slice(0, showSeeMore ? 3 : tasks.length).map((task, index) => (
                    <TaskItem key={index}>
                        <TaskDot />
                        {task}
                    </TaskItem>
                ))}
                {showSeeMore && <SeeMore>See More...</SeeMore>}
            </TaskList>
        </DayBox>
    );
};

export default CalendarBox;
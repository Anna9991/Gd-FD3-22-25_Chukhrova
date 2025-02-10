import React from 'react'
import { useAttendance } from './AttendanceTable.hook.ts';
import { AttendanceTableContainer } from './AttendanceTable.container.tsx';


export function AttendanceTable() {
  const {
      students,
      dates,
      attendance,
      isSaving,
      setAttendanceTable,
      saveData,
      addDate,
      addStudent
    } = useAttendance();


    return (
      <AttendanceTableContainer
            students={students}
            dates={dates}
            attendance={attendance}
            isSaving={isSaving}
            setAttendanceTable={setAttendanceTable}
            saveData={saveData}
            addDate={addDate}
            addStudent={addStudent}
      /> 
    );
}
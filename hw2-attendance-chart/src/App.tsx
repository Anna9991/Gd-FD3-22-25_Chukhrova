import React from 'react';
import './App.css';
import { AttendanceTable } from './components/AttendanceTable.tsx';
import { useAttendance } from './hooks/useAttendance.tsx';


function App() {
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
    <div className="App">
      <header className="App-header">
        <h1>Attendance chart</h1>
      </header>
      <main className="main-table">
        <AttendanceTable
          students={students}
          dates={dates}
          attendance={attendance}
          isSaving={isSaving}
          setAttendanceTable={setAttendanceTable}
          saveData={saveData}
          addDate={addDate}
          addStudent={addStudent}
        />
      </main>
    </div>
  );
}

export default App;

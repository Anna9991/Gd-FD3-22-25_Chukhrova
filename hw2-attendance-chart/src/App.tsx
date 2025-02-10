import React from 'react';
import './App.css';
import { AttendanceTable } from './AttendanceTable/AttendanceTable.tsx'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Attendance chart</h1>
      </header>
      <main className="main-table">
        <AttendanceTable />
      </main>
    </div>
  );
}

export default App;

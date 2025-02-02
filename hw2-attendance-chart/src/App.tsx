import React from 'react';
import './App.css';
import { AttendanceTable } from './components/AttendanceTable.tsx';


function App() {
  const [students, setStudent] = React.useState<string[]>(["Чухрова", "Голуб", "Корниюк", "Болботунов"]);
  const [dates, setDate] = React.useState<string[]>(["2025-01-15", "2025-01-18", "2025-01-25"]);
  const [attendance, setAttendance] = React.useState<Record<string, Record<string, boolean>>>({});
  const [isSaving, setSaving] = React.useState<boolean>(false);

  React.useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem("attendance") || "");
      if (data) {
        setStudent(data.students || students);
        setDate(data.dates || dates);
        setAttendance(data.attendance || attendance);
      }
    } catch (error) {
      console.error("Ошибка localStorage", error);
    }
  }, []);

  const setAttendanceTable = (student: string, day: string) => {
    setAttendance(prevAttendance => {
      const updated = { ...prevAttendance };
      if (!updated[student]) {
        updated[student] = {};
      }
      updated[student] = { ...updated[student] };
      updated[student][day] = !updated[student][day];
      return updated;
    });
  };

  const saveData = () => {
    setSaving(true);
    setTimeout(() => {
      localStorage.setItem(
        "attendance",
        JSON.stringify({ students, dates, attendance })
      );
      setSaving(false);
    }, 2000);
  };

  const addDate = () => {
    const pattern = /^\d{4}-\d{2}-\d{2}$/;
    const day = prompt("Введите дату (гггг-мм-дд):");
    if (day && pattern.test(day)) {
      setDate(all_days => [...all_days, day]);
    }
  };

  const addStudent = () => {
    const name = prompt("Введите имя студента:");
    if (name) {
      setStudent(all_students => [...all_students, name]);
    }
  };

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
          setAttendanceTable={setAttendanceTable}
          addDate={addDate}
          addStudent={addStudent}
          saveData={saveData}
          isSaving={isSaving}
        />
      </main>
    </div>
  );
}

export default App;

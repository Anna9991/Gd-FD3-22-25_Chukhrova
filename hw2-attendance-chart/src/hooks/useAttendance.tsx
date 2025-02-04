import { useState, useEffect } from 'react';


// type 
export type JsonData = {
  students: string[],
  dates: string[],
  attendance: Record<string, Record<string, boolean>>
}


const LOCAL_STORAGE_KEY = "attendance";


export function useAttendance() {
  const [students, setStudent] = useState(["Чухрова", "Голуб", "Корниюк", "Болботунов"]);
  const [dates, setDate] = useState(["2025-01-15", "2025-01-18", "2025-01-25"]);
  const [attendance, setAttendance] = useState({});
  const [isSaving, setSaving] = useState(false);

  useEffect(() => {
    try {
      const data: JsonData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "");
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
      const data: JsonData = {
        students,
        dates,
        attendance
      }
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data)
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

  return {
    students,
    dates,
    attendance,
    isSaving,
    setAttendanceTable,
    saveData,
    addDate,
    addStudent
  };
}
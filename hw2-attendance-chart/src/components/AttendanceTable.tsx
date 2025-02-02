import React from 'react';


// type
export type AttendanceTableProps = {
  students: string[];
  dates: string[];
  attendance: Record<string, Record<string, boolean>>;
  setAttendanceTable: (student: string, date: string) => void;
  addDate: () => void;
  addStudent: () => void;
  saveData: () => void;
  isSaving: boolean;
}


// styles for AttendanceTable
const dataStyle = { padding: "10px", textAlign: "center" };
const dataAttendanceStyle = { padding: "10px", textAlign: "center", cursor: "pointer" };
const btnStyle = { margin: "10px", textAlign: "center" };


export function AttendanceTable(props: AttendanceTableProps) {
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th style={dataStyle}>{"№"}</th>
            <th style={dataStyle}>{"Имя"}</th>
            {props.dates.map(day => <th key={day} style={dataStyle}>{day}</th> )}
          </tr>
        </thead>
        <tbody>
          {props.students.map((student,idx) =>
            <tr key={student}>
              <td style={dataStyle}>{idx + 1}</td>
              <td style={dataStyle}>{student}</td>
              {props.dates.map(day =>
                <td
                  key={day}
                  onClick={() => props.setAttendanceTable(student, day)}
                  style={dataAttendanceStyle}
                >
                  {props.attendance[student] && props.attendance[student][day] ? "V" : ""}
                </td>
              )}
            </tr>
          )}
        </tbody>
      </table>
      <button onClick={props.addStudent} style={btnStyle}>
        {"Добавить студента"}
      </button>
      <button onClick={props.addDate} style={btnStyle}>
        {"Добавить дату"}
      </button>
      <button onClick={props.saveData} disabled={props.isSaving} style={btnStyle}>
        {props.isSaving ? "Сохранение" : "Сохранить"}
      </button>
    </div>
  );
}
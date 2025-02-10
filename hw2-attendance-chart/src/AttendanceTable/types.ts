

export type JsonData = {
  students: string[],
  dates: string[],
  attendance: Record<string, Record<string, boolean>>
}


export type AttendanceTableProps = JsonData & {
  isSaving: boolean,
  setAttendanceTable: (student: string, date: string) => void,
  saveData: () => void,
  addDate: () => void,
  addStudent: () => void
}

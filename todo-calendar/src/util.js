import dayjs from "dayjs";

export const fillEmptyColumns = (columns, start, end) => {
  const filledColumns = columns.slice(0);

  // 1. 첫날 이전 공백 채우기
  const startDay = dayjs(start).get("day"); // 시작일의 요일을 get
  for (let i = 1; i <= startDay; i += 1) {
    const date = dayjs(start).subtract(i, "day");
    filledColumns.unshift(date);
  }
  // 2. 마지막날 이후 공백 채우기
  const endDay = dayjs(end).get("day");
  /**
    0 -> 6
    1 -> 5
    2 -> 4
    endDay + ? = 6
   */
  for (let i = 1; i <= 6 - endDay; i += 1) {
    const date = dayjs(end).add(i, "day");
    filledColumns.push(date);
  }

  return filledColumns;
};
export const getCalendarColumns = (now) => {
  const start = dayjs(now).startOf("month"); // 11.1
  const end = dayjs(now).endOf("month"); // 11.30
  const endDate = dayjs(end).get("date"); // 30

  const columns = [];
  for (let i = 0; i < endDate; i += 1) {
    const date = dayjs(start).add(i, "day");
    columns.push(date);
  }
//   console.log(columns);

  const filledColumns = fillEmptyColumns(columns, start, end);
  return filledColumns;
};

const dayText = ['일', '월', '화', '수', '목', '금', '토']

export const getDayText = (day) => {
    return dayText[day];

    // switch (day) {
    //     case 0: return '일';
    //     case 1: return '일';
    //     case 2: return '일';
    //     case 3: return '일';
    //     case 4: return '일';...
    // }
};

export const getDayColor = (day) => {
    return day === 0? '#e67639' : day === 6? '#5872d1' : '#2b2b2b';

    //or swith문 사용 ~~
}

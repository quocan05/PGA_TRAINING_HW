import moment from "moment";

export const getDateFormat = (value: string) => {
  let timestamp: number = Date.now();

  // Tạo một đối tượng Date từ timestamp
  let dateObject: Date = new Date(timestamp);

  // Lấy ngày, tháng và năm từ đối tượng Date
  let day: string | number = dateObject.getDate();
  let month: string | number = dateObject.getMonth() + 1; // Tháng trong JavaScript bắt đầu từ 0, nên cần cộng thêm 1
  let year: number = dateObject.getFullYear();

  // Đảm bảo rằng ngày và tháng đều có hai chữ số bằng cách thêm số 0 nếu cần
  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;

  // Tạo chuỗi ngày tháng năm trong định dạng 'dd mm yyyy'
  let formattedDate: string = `${day} / ${month} / ${year}`;
  return formattedDate;
};

export const formatDateWithValue = (value?: string) => {
  return moment(value).format("HH:mm DD/MMM/YYYY");
};

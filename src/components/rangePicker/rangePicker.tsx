import React from "react";
import { DatePicker, Space } from "antd";
import "./rangePicker.scss";
import { CustomDatePicker } from "../../interfaces/datepicker/datepicker";
import { FormatDateDDMMYYY } from "../../constants";
export const RangeDatePicker: React.FC<CustomDatePicker> = () => {
  const { RangePicker } = DatePicker;
  return (
    <Space direction="vertical" size={20} className="range-picker">
      <RangePicker 
        format={FormatDateDDMMYYY}
        onChange={(e) => {
          console.log("e ", e);
        }}
        
      />
    </Space>
  );
};

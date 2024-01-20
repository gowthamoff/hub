/*********************************************************************
 *
 *    FarmwiseAI Private Limited
 *
 *    Module                 :  Reuseable Component - Datepicker
 *
 *    Usage                  :  Datepicker functionalities
 *
 *    Developed By and Date  :  Mani - 21-11-2023
 *
 *    Modified By and Date   :  -
 *
 *    Version                :  1.0
 *
 **********************************************************************/
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;
const DatePickercomponent = ({
  rangepick = false,
  onChange,
  picker,
  className,
  disabled,
  format,
  placeholder,
  defaultValue,
  value,
}) => {
  return (
    <>
      {!rangepick ? (
        <DatePicker
          onChange={onChange}
          picker={picker}
          className={className}
          disabled={disabled}
          format={format}
          placeholder={placeholder}
          defaultValue={defaultValue}
          value={value}
        />
      ) : (
        <RangePicker />
      )}
    </>
  );
};

export default DatePickercomponent;

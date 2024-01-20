/*********************************************************************
 *
 *    FarmwiseAI Private Limited
 *
 *    Module                 :  Common Module
 *
 *    Usage                  :  Reuseable component
 *
 *    Developed By and Date  :  Mani - 22-11-2023
 *
 *    Modified By and Date   :  -
 *
 *    Version                :  1.0
 *
 **********************************************************************/
import { Select } from "antd";

const Selectcomponent = ({
  defaultValue,
  onChange,
  options,
  disabled,
  allowClear,
  mode,
  placeholder,
  optionRender,
  value,
  labelInValue,
  className,
  style
}) => {
  return (
    <>
      <Select
        defaultValue={defaultValue}
        onChange={onChange}
        options={options}
        disabled={disabled}
        allowClear={allowClear}
        mode={mode}
        placeholder={placeholder}
        optionRender={optionRender}
        value={value}
        labelInValue={labelInValue}
        className={className}
        style={style}
      />
    </>
  );
};

export default Selectcomponent;

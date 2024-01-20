/*********************************************************************
 *
 *    FarmwiseAI Private Limited
 *
 *    Module                 :  Reuseable Component - Input
 
 *    Usage                  :  Input component functionalities
 *
 *    Developed By and Date  :  Mani - 21-11-2023
 *
 *    Modified By and Date   :  Mani - 28-11-2023
 *
 *    Version                :  1.0
 *
 **********************************************************************/
import { Input } from 'antd';
import React from 'react';

const Inputcomponent = React.forwardRef(({
  placeholder,
  size,
  prefix,
  addonAfter,
  defaultValue,
  allowClear,
  className,
  label,
  style,
  type,
  value,
  onChange,
},ref) => {
  return (
      <Input
        placeholder={placeholder}
        size={size}
        prefix={prefix}
        addonAfter={addonAfter}
        defaultValue={defaultValue}
        allowClear={allowClear}
        type={type}
        style={style}
        classNames={className}
        value={value}
        onChange={onChange}
        ref={ref}
      />
  );
}
)

export default Inputcomponent;

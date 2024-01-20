/*********************************************************************
 *
 *    FarmwiseAI Private Limited
 *
 *    Module                 :  Reuseable Component - Checkbox
 *
 *    Usage                  :  Checkbox Component
 * 
 *
 *    Developed By and Date  :  Mani - 20-11-2023
 *
 *    Modified By and Date   :  -
 *
 *    Version                :  1.0
 *
 **********************************************************************/
import { Checkbox } from "antd";

const Checkboxcomponent = ({
  label,
  onChange,
  checked,
  disabled,
  defaultChecked,
  className
}) => {


  return (
    
      <Checkbox
        className={className}
        onChange={onChange}
        // checked={checked?checked:false}
        disabled={disabled}
        defaultChecked={defaultChecked}
      >
        {label}
      </Checkbox>
    
  );
};

export default Checkboxcomponent;

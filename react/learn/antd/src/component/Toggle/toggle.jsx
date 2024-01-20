
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
 *    Modified By and Date   :  Mani - 28-12-2023
 *
 *    Version                :  1.0
 *
 **********************************************************************/
import { Switch } from "antd";
import { useEffect, useState } from "react";

const Togglecomponent = ({
  defaultChecked,
  onChange,
  checkedChildren,
  unCheckedChildren,
  loading,
  className,
  onClick,
  disabled,
  size,
  checked,
  unTable
}) => {
  const [check,setCheck] = useState(checked);
  const handleChange = (value) => {
    setCheck(value);
    onChange && onChange(e);
  }
  useEffect(()=>{
    setCheck(checked)
  },[checked])
  return (
    <>
      <Switch
        defaultChecked={defaultChecked}
        onChange={onChange}
        checkedChildren={checkedChildren}
        unCheckedChildren={unCheckedChildren}
        loading={loading}
        disabled={disabled}
        size={size}
        className={className}
        onClick={handleChange}
        checked={check}
      />
      {!unTable &&<label style={{marginLeft:"1em"}}>{check?"Active":"Hidden"}</label>}
    </>
  );
};

export default Togglecomponent;

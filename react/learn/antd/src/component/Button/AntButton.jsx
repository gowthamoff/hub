/*********************************************************************
 *
 *    FarmwiseAI Private Limited
 *
 *    Module                 :  Reuseable Component - Button
 *
 *    Usage                  :  Button Component
 *
 *    Developed By and Date  :  Mani - 20-11-2023
 *
 *    Modified By and Date   :  -
 *
 *    Version                :  1.0
 *
 **********************************************************************/
import React from "react";
import { Button } from "antd";
import { PhoneFilled  } from '@ant-design/icons';

function AntButton({type,icon,style,onClick,BtnName,disabled}) {

  return (
    <div>
       <Button
       type={type}
       icon={icon}
       style={style}
       onClick={onClick}
       disabled={disabled}
       >{BtnName}</Button>
    </div>
  );
}

export default AntButton;

/*********************************************************************
 *
 *    FarmwiseAI Private Limited
 *
 *    Module                 :  Mainpage Content Header
 *
 *    Usage                  :  Reuseable Header bar
 *
 *    Developed By and Date  :  Mani - 21-11-2023
 *
 *    Modified By and Date   :  Mani - 28-12-2023
 *
 *    Version                :  1.0
 *
 **********************************************************************/
import React, { useState } from 'react';
// import EditInventoryModal from '../../pages/Branch/Inventory/editinvertorymodal';
import './style.scss';
// import { useNavigate } from 'react-router-dom';
// import { images } from '../../utils/images';
import BackIcon from './back_icon.png'

const Contentheader = ({
  contentTitle,
  contentParagraph,
  createbuttonlabel,
  savebuttonlabel,
  cancelbuttonlabel,
  navigatepath,
  rightChildren,
  onClick,
  onFinish,
  saveDisabled,
  cancelDisabled,
  onCancel
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  // const navigate = useNavigate();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // const handlecreatebuttonclick = () => {
  //   if (createbuttonlabel === 'Contact to Edit') {
  //     onContactButtonClick();
  //   } else if (createbuttonlabel === 'Create Branch Order') {
  //     onClick();
  //   } else {
  //     navigatepath && navigate(navigatepath);
  //   }
  // };

  return (
    <div className="sectionHeader">
      <div
        className="center"
        onClick={() => {
          navigate(-1);
        }}>
        <div>
          <img src={BackIcon} width="24px" height="24px"></img>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div className="headertitle">{contentTitle}</div>
          <div className="headerparagraph">{contentParagraph}</div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '1em', justifyContent: 'flex-end', alignItems: 'flex-start', width: '30%' }}>
        {cancelbuttonlabel ? (
          <>
            <button style={{}} className="buttonc" disabled={cancelDisabled} onClick={onCancel}>
              {cancelbuttonlabel}
            </button>
            <button
              style={{}}
              className="buttons"
              onClick={() => {
                //  setPopup(true);
                onFinish();
              }}
              disabled={saveDisabled}>
              {savebuttonlabel}
            </button>
          </>
        ) : (
          createbuttonlabel && (
            <button
              className="buttons"
              style={{
                width: 'auto'
              }}
              onClick={navigatepath ? () => navigate(navigatepath) : onClick}>
              {createbuttonlabel}
            </button>
          )
        )}
      </div>
      {rightChildren}
    </div>
  );
};

export default Contentheader;

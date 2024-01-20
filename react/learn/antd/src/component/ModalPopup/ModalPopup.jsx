import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'antd';
 
const ModalPopup = ({ open, onOk, onCancel, footer,closable }) => {
  return (
    <div>
      <Modal
        open={open}
        closable={false}
        // onCancel={onCancel}
        // onOk={onOk}
        centered
        footer={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '1em 1em',
              gap: '1em'
            }}>
            <Button style={{ width: '50%' }} key="cancel" onClick={onCancel}>
              Cancel
            </Button>
            <Button style={{ width: '50%', backgroundColor: '#1E2640' }} key="confirm" type="primary" onClick={onOk}>
              Confirm
            </Button>
          </div>
        }>
        <div>
          <p
            style={{
              color: '#000',
              fontFamily: 'Inter',
              fontSize: '20px',
              fontWeight: 400
            }}>
            Are you sure you want to change the password?
          </p>
        </div>
      </Modal>
    </div>
  );
};
 
export default ModalPopup;
 
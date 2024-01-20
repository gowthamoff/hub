import React from 'react';
import { Modal } from 'antd';
import Support from '../../assets/Images/support.png';

const ContactPopup = ({ open, onCancel }) => {
  return (
    <div>
      <Modal
        open={open}
        onCancel={onCancel}
        footer={null}
        centered
        width={400} 
        style={{ maxHeight: '80vh' }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <img src={Support} alt="supportImage" />
          <p>
            Call us at <span>+91 9443702262 </span>
          </p>
          <p>
            For any questions or suggestions, please get in touch with us. Our team speaks Tamil and English and is
            always happy to help!
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default ContactPopup;

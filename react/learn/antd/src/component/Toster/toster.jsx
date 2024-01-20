import React from 'react';
import { Button, notification } from 'antd';
import './toster.scss';
// import { images } from '../../utils/images'; 
import { useEffect } from 'react';
import success from './successic.svg'

const Toaster = ({ Toasterdata }) => {
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    if (Toasterdata) {
      //   const { type, headmsg, bodymsg } = Toasterdata;
      openNotification(Toasterdata.type, Toasterdata.message, Toasterdata.description);
    }
  }, []);

  const openNotification = (type, headmsg, bodymsg) => {
    const style = type === 'Success' ? { backgroundColor: '#04844B' } : { backgroundColor: '#CD201F' };

    api.info({
      message: <div style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF' }}>{headmsg}</div>,
      icon: <img src={success} width="24px" height="24px" alt="Custom Icon" />,
      description: <div style={{ color: '#FFFFFF', fontSize: '14px', fontWeight: 400 }}>{bodymsg}</div>,
      duration: 1.5,
      style
    });
  };

  return <>{contextHolder}</>;
};

export default Toaster;

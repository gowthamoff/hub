import React, { useState } from 'react';
import { Tag } from 'antd';

const Pincode = ({ DistrictCode, style }) => {
  const handleClose = removedTag => {
    // Handle tag removal if needed
    console.log('Removing tag:', removedTag);
  };

  return (
    <div>
      <div>
        <label className="label" style={{
          padding: "8px"
        }}>Pincode</label>
      </div>
      <div style={{
        height: 100, overflowY: 'auto',
        borderRadius: "4px",
        border: "1px solid #aeb4b9",
        backgroundColor: '#DBDADE', ...style
      }}>
        {DistrictCode.map(tag => (
          <Tag key={tag} closable onClose={() => handleClose(tag)} style={{
            margin: '3px',
            bordeRadius: "4px",
            border: "2px solid  #747474",
            background: "#EEF4FF",
            color:"#0B5CAB"
          }}>
            {tag}
          </Tag>
        ))}
      </div>
    </div>
  );
};

export default Pincode;

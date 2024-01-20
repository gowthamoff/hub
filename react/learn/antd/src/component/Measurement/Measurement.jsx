import React from "react";
import { Row, Col, Radio, Input, Select } from "antd";
const { Option } = Select;

const selectKG = (
  <Select defaultValue="kg">
    <Option value="kg">kg</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
);

const selectWidth = (
  <Select defaultValue="cm">
    <Option value="cm">cm</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
);

const Measurement = () => {
  return (
    <div>
      <h2 style={{ textAlign: "left", padding: "1%" }}>Measurement</h2>
      <Row>
        <Col span={24}>
          <Radio.Group name="separatePackageCheckbox">
            <Radio style={{ display: "block", marginBottom: "8px" }}>
              Ship in Separate Package
            </Radio>
          </Radio.Group>
        </Col>
        <Col span={12}>
          <div style={{ marginBottom: 8 }}> Dimensional Weight</div>
          <Input style={{ width: "70%" }} addonAfter={selectKG} value="" />
        </Col>
        <Col span={12}>
          <div style={{ marginBottom: 8 }}>Width</div>
          <Input style={{ width: "70%" }} addonAfter={selectWidth} value="" />
        </Col>
        <Col span={12}>
          <div style={{ marginBottom: 8 }}>Height</div>
          <Input style={{ width: "70%" }} addonAfter={selectKG} value="" />
        </Col>
        <Col span={12}>
          <div style={{ marginBottom: 8 }}>Length</div>
          <Input style={{ width: "70%" }} addonAfter={selectWidth} value="" />
        </Col>
      </Row>
    </div>
  );
};

export default Measurement;

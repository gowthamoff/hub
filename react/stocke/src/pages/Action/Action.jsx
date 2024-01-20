import { React, useEffect, useRef } from "react";
import { Button, Form, Input, Card } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import apiAction from './apiAction'
import "./Action.scss";
import { useSelector } from "react-redux";

const Action = () => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const formRef = useRef(null);
  const navigate = useNavigate();
  let currentUserState = useSelector(state => state.userDetail);
  let userType = currentUserState?.userType;

  const deleteForm = () => {
    const apiData = {
      id: id,
    };
    apiAction.deleteProduct(apiData).then(() => {
      navigate("/");
    })
  };

  const updateForm = () => {
    const formInstance = formRef.current;
    const formValues = formInstance.getFieldsValue();
    const apiData = {
      id: id,
      name: formValues.name,
      price: formValues.price,
      quantity: formValues.quantity,
    };
    apiAction.updateProduct(apiData).then(() => {
      navigate("/");
    })
  };

  const onChange = () => {
    apiAction.getProduct(id,userType.userid).then(({data}) => {
      form.setFieldsValue(data.body);
    })
  };
  useEffect(() => {
    onChange();
  }, []);

  return (
    <>
      <div className="center">
        <Card>
          <Form
            name="basic"
            form={form}
            ref={formRef}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ minWidth: "300px" }}
            autoComplete="off"
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[
                { required: true, message: "Please input the product name!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Price"
              name="price"
              rules={[{ required: true, message: "Please input the price!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Quantity"
              name="quantity"
              rules={[
                { required: true, message: "Please input the quantity!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Form>
          <div className="btnCenter">
            <Button type="primary" ghost onClick={() => updateForm()}>
              Modify
            </Button>
            <Button type="primary" danger ghost onClick={() => deleteForm()}>
              Delete
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Action;

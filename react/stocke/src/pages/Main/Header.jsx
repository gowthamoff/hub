import { useState } from "react";
import { Card, Modal, Button, Form, Input, InputNumber } from "antd";
import apiAction from "./apiAction";
import { useSelector } from "react-redux";
import { removeLogin } from "../../router/LocalStorage";
import { useNavigate } from "react-router-dom";

const Header = ({ getData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const nav = useNavigate()

  let currentUserState = useSelector((state) => state.userDetail);
  let userType = currentUserState?.userType;

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    const apiData = {
      name: values.name,
      price: values.price,
      quantity: values.quantity,
      userid: userType.userid,
    };
    apiAction.setProduct(apiData).then((res) => {
      console.log("------->postdata", userType.userid);
      getData();
      setIsModalOpen(false);
    });
  };

  const logoutClick = () => {
    removeLogin();
    nav('/login')
  };

  return (
    <>
      <Card className="m-2">
        Stocke
        <div style={{ float: "right" }}>
          <Button type="primary" onClick={showModal}>
            Add
          </Button>
          <Button type="primary" onClick={logoutClick}>
            Logout
          </Button>
        </div>
      </Card>

      <Modal
        title="Add Product"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div>
          <Form
            form={form}
            name="product_form"
            initialValues={{ quantity: 1 }}
            onFinish={onFinish}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 16 }}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[
                { required: true, message: "Please enter the product name!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Price"
              name="price"
              rules={[
                { required: true, message: "Please enter the product price!" },
              ]}
            >
              <InputNumber min={0} step={0.01} />
            </Form.Item>

            <Form.Item
              label="Quantity"
              name="quantity"
              rules={[
                {
                  required: true,
                  message: "Please enter the product quantity!",
                },
              ]}
            >
              <InputNumber min={1} />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default Header;

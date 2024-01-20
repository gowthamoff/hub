import { useState } from "react";
import { Card, Modal, Button, Form, Input, InputNumber } from "antd";

const Header = ({ getData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = async (values) => {
    try {
      const apiData = {
        name: values.name,
        price: values.price,
        quantity: values.quantity,
      };
      console.log("apidata----------->", apiData);
      const requestOptions = {
        method: "POST",
        // headers: {
        //   'Content-Type': 'application/json',
        //   // Add any other headers if needed
        // },
        body: JSON.stringify(apiData),
      };

      const res = await fetch(
        "https://5lo2v60gq0.execute-api.us-east-1.amazonaws.com/dev/",
        requestOptions
      );
      const responseData = await res.json();
      console.log(responseData);
      getData();
      setIsModalOpen(false);
    } catch (error) {
      console.log("Validation failed or API request failed:", error);
    }
  };

  return (
    <>
      <Card className="m-2">
        Stocke
        <div style={{ float: "right" }}>
          <Button type="primary" onClick={showModal}>
            Add
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

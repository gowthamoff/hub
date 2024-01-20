import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Button, Form, Input, Card, Upload } from "antd";
import "./index.scss";
// import  Router  from "router/Router";
import { useNavigate } from "react-router-dom";

const Action = () => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const formRef = useRef(null);
  const navigate = useNavigate();

  const deleteForm = async () => {
    try {
      const apiData = {
        id: id,
      };
      const requestOptions = {
         method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiData),
      };
      const res = await fetch(
        `https://xvqvli4xd7.execute-api.us-east-1.amazonaws.com/dev/`,
        requestOptions
      );
      const responseData = await res.json();

      console.log("responseData-----------", responseData.body);
      navigate("/");
    } catch (error) {
      console.log("Validation failed or API request failed:", error);
    }
  };

  const updateForm = async () => {
    const formInstance = formRef.current;
    const formValues = formInstance.getFieldsValue();
    // var req=form.getCurrent()
    console.log("click------", formValues);
    try {
      const apiData = {
        id: id,
        name: formValues.name,
        price: formValues.price,
        quantity: formValues.quantity,
      };

      console.log("apidata----------->ejfieifheihrf", apiData);

      const requestOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiData),
      };

      const res = await fetch(
        `https://r4z03837u9.execute-api.us-east-1.amazonaws.com/default/stockePut`,
        requestOptions
      );
      const responseData = await res.json();

      console.log("responseData-----------", responseData.body);
      navigate("/");
    } catch (error) {
      console.log("Validation failed or API request failed:", error);
    }
  };

  const onChange = async () => {
    try {
      const apiData = {
        id: id,
        // Add other properties if needed
      };

      console.log("apidata----------->", apiData);

      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await fetch(
        `https://bxogqjcxj3.execute-api.us-east-1.amazonaws.com/dev/?id=${id}`,
        requestOptions
      );

      const responseData = await res.json();
      console.log("responseData-----------", responseData.body);

      // Set form fields value
      form.setFieldsValue(responseData.body);
    } catch (error) {
      console.log("Validation failed or API request failed:", error);
    }
  };

  useEffect(() => {
    onChange();
  }, []);

  return (
    <>
    {/* <Router /> */}
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

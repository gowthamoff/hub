import React from "react";
import { Button, Form, Input, Card } from "antd";
import { Link } from "react-router-dom";
import apiAction from "./apiAction";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/reducer/auth";
import { setLogin } from "../../router/LocalStorage";
import { useNavigate } from "react-router-dom";

const Login = ({setPageNo}) => {
  const dispatch = useDispatch();
  const nav = useNavigate()

  const onFinish = (values) => {
    apiAction
    .getLoginAuth(values.email, values.password)
    .then(({ status, data }) => {
        nav('/')
        setLogin();
        console.log("login", status);
        const userid = data.body.userid;
        dispatch(
          setUser({
            userid: userid,
          })
        );
      });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "2rem",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Card>Welcome to Stocke</Card>
        <Card>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <div style={{ display: "flex", gap: "1rem" }}>
                <Button type="primary" htmlType="submit">
                  Login
                </Button> 
                  <Button onClick={()=>{setPageNo(2)}} type="primary">Register</Button> 
              </div>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default Login;

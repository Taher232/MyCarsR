import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { Form, Input, Row, Col } from "antd";
function Profile() {
  const [user, setUser] = useState();

  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      setUser(user);
    } catch (error) {}
  }, []);

  if (!user) return "";

  return (
    <DefaultLayout>
      <Row justify="center  mt-5">
        <Col lg={12} sm={24}>
          <Form layout="vertical" initialValues={user}>
            <Form.Item label="Email" name="username">
              <Input disabled />
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </DefaultLayout>
  );
}

export default Profile;

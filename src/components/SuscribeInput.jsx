import React from "react";
import { Typography, Input, Button } from "antd";
import "../styles/SuscribeInput.css";

const SuscribeInput = () => {
  const { Text } = Typography;
  const {} = Input;
  return (
    <div className="SuscribeInput_container">
      <Text strong>Suscribe our newsletter</Text>
      <div className="SuscribeInpute_actions">
        <Input.Group compact>
          <Input placeholder="pocho@hotmail.com" style={{ width: "auto" }}></Input>
          <Button style={{ background: "#ffc107", color: "#272727" }}>
            Submit
          </Button>
        </Input.Group>
      </div>
    </div>
  );
};

export default SuscribeInput;

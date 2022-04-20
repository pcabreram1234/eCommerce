import React, { useState } from "react";
import { Button } from "antd";
import { HeartTwoTone } from "@ant-design/icons";

const LikeButton = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const clickedButtonStyle = {
    backgroundColor: "#eb2f96",
    borderRadius: "9px",
  };

  return (
    <Button onClick={handleClick} type="default">
      {!clicked ? (
        <HeartTwoTone />
      ) : (
        <HeartTwoTone twoToneColor="#eb2f96" style={clickedButtonStyle} />
      )}
    </Button>
  );
};

export default LikeButton;

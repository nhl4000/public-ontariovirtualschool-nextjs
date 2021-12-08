import React, { useEffect, useState } from "react";

const Header = (props) => {
  return <div dangerouslySetInnerHTML={{ __html: props.data }}></div>;
};

export default Header;

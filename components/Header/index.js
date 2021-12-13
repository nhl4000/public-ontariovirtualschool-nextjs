import React, { useEffect, useState } from "react";

const Header = (props) => {
  const [headerData, setHeaderData] = useState(props.data);
  return <div dangerouslySetInnerHTML={{ __html: headerData }}></div>;
};

export default Header;

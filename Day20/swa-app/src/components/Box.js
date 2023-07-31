// import React from 'react';
// const Box = React.memo(() => {
//     const style = {
//         width: 100,
//         height: 100,
//         backgroundColor: "blue"
//     };
//     return <div style={style} />;
// });

// export default Box;

import styled from "@emotion/styled";

const Box = styled.div`
    width: 100px;
    height: 100px;
    background-color: blue;
`;

export default Box;
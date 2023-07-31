const Box = ({width = 100, height = 100, backgroundColor = "red"}) => {
    const style = {
        width,
        height,
        backgroundColor,
    };
    return <div style={style} />;
};

export default Box;

// import styled from "@emotion/styled";

// const Box = styled.div`
//     width: 100px;
//     height: 100px;
//     background-color: blue;
// `;

// export default Box;
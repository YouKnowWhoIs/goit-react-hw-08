import { Circles } from "react-loader-spinner";

const loaderStyle = {
  display: "flex",
  justifyContent: "center",
  padding: "25%",
  backgroundColor: "rgba(0, 0, 0, 0.2)",
};

export const Loading = () => {
  return (
    <div style={loaderStyle}>
      <Circles
        height="120"
        width="120"
        color="#fff"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

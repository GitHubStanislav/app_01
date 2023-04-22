function Wrapper(props) {
  const style = {
    backgroundColor: props.color,
    width: "550px",
    padding: "20px",
    margin: "20px auto",
  };
  return <div style={style}>{props.children}</div>;
}

export default Wrapper;

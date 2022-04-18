import Button from "./Button";

const Layout = (props) => {
  const {
    data: { name, name1, name2, name3 },
    helloGreet,
  } = props;
  console.log("Data ->>>", name);

  return (
    <div>
      <h1>Hello form layout</h1>
      <h1> layout {name}</h1>
      <h1> layout {name1}</h1>
      <h1> layout {name2}</h1>
      <h1> layout {name3}</h1>

      <Button
        lable={"hello Greet"}
        trigger={helloGreet}
        style={{ padding: "8px 16px", color: "white", backgroundColor: "red" }}
      />
      {props.children}
    </div>
  );
};

export default Layout;

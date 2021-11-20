import React from "react";
import "./App.css";
import Editable from "./Components/Editable/Editable";
import { Table } from "antd";

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        data: [],
      };
  }
  dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  render() {
    return (
      <div className="App">
        <Table dataSource={this.dataSource} columns={this.columns} />;
      </div>
    );
  }
}
export default App;

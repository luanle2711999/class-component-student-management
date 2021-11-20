// import FormSizeDemo from '../InputInfo/FormSizeDemo'
import { Table } from "antd";
import "antd/dist/antd.css";
import React, { Component } from "react";
import jsonData from "../data/data.json";

// const EditableCell = ({
//    editing,
//    dataIndex,
//    title,
//    inputType,
//    record,
//    index,
//    children,
//    ...restProps
//  }) => {
//    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
//    return (
//      <td {...restProps}>
//        {editing ? (
//          <Form.Item
//            name={dataIndex}
//            style={{
//              margin: 0,
//            }}
//            rules={[
//              {
//                required: true,
//                message: `Please Input ${title}!`,
//              },
//            ]}
//          >
//            {inputNode}
//          </Form.Item>
//        ) : (
//          children
//        )}
//      </td>
//    );
//  };
//  const formRef = React.createRef();
export default class Editable extends Component {
  constructor(props) {
    super(props);
    this.onMount(() => {
      this.state = {
        data: [],
      };
    });
  }

  render() {
    return (
      <>
        {/* <FormSize func={this.addRows} remove={this.removeRows}/> */}
        {/* <Form  component={false}> */}
        <Table
          // components={{
          //    body: {
          //       cell: EditableCell,
          //    },
          // }}
          bordered
          dataSource={[{}]}
          columns={[]}
          // rowClassName="editable-row"
          // pagination={{
          //    onChange: this.cancel,
          // }}
        />
        {/* </Form> */}
      </>
    );
  }
}

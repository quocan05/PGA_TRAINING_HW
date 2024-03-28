import React, { useEffect, useState } from "react";
import { Button, Flex, Form, message, Popconfirm, Table, Tag } from "antd";
import type { TableColumnsType } from "antd";
import { CustomTableProps } from "../../interfaces/table/table";
import { IDataSoucre } from "../../interfaces/values";
import {
  ButtonDelete,
  ButtonShowDetail,
} from "../../components/buttons/buttons";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";

import { fetchAllProduct } from "../../redux/reducer/productReducer";
import {
  DeleteProductByID,
  getProductByID,
  UpdateProduct,
} from "../../services/Products";
import { formatDateWithValue } from "../../utils/formatDate";
import { FormShowDetail } from "../../components/form/form";
import { ModalShowDetail } from "../../components/modal/modalForm";
import {
  cancelDeleteMsg,
  confirmDeleteMsg,
  doneUpdateMessage,
} from "../../utils/showMessage";

// const rowSelection = {
//     onChange: (selectedRowKeys, selectedRows) => {
//       console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
//     },
//   };

const TableData: React.FC<CustomTableProps> = (props) => {
  const [selectedRowDetail, setSelectedRowDetail] = useState<IDataSoucre>({});
  const [form] = Form.useForm();
  const dataProducts = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch<AppDispatch>();
  const columns: TableColumnsType<IDataSoucre> = [
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, { status }) => {
        let color;
        if (status === "PENDING") {
          color = "red";
        } else if (status === "PROCESSING") {
          color = "blue";
        } else if (status === "FULFILLED") {
          color = "green";
        }
        return (
          <>
            <Tag color={color}>{status}</Tag>
          </>
        );
      },
    },
    {
      key: "createAt",

      title: "Created At",
      dataIndex: "createdAt",
      render: (_, record) => {
        return <>{formatDateWithValue(record.createdAt)}</>;
      },
    },
    {
      key: "client",

      title: "Client",
      dataIndex: "client",
    },
    {
      key: "currency",

      title: "Currency",
      dataIndex: "currency",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      render: (total) => {
        return (
          <>
            <b>{total}</b>
          </>
        );
      },
    },
    {
      title: "Invoice#",
      dataIndex: "invoice",
      key: "invoice",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => {
        const confirm = async () => {
          //console.log(e);
          await DeleteProductByID(record.id);
          dispatch(fetchAllProduct());
          confirmDeleteMsg();
        };

        const cancel = () => {
          //console.log(e);
          cancelDeleteMsg();
          return;
        };
        return (
          <Flex vertical={false} gap={50} justify="flex-start">
            <ButtonShowDetail
              type="primary"
              onClick={() => {
                form.setFieldsValue(record);
                setSelectedRowDetail(record);
                setIsOpenModal(true);
              }}
            />
            <Popconfirm
              title="Delete this product"
              description="Are you sure to permanently delete this product?"
              onConfirm={confirm}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <ButtonDelete />
            </Popconfirm>
          </Flex>
        );
      },
    },
  ];
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    dispatch(fetchAllProduct());
  }, []);

  return (
    <div>
      <Table
        {...props}
        loading={dataProducts.isLoading ? true : false}
        pagination={{ defaultPageSize: 6 }}
        columns={columns}
        dataSource={dataProducts.listData}
      />
      <ModalShowDetail
        title={`Detail of client: ${selectedRowDetail?.client}`}
        open={isOpenModal}
        onCancel={() => {
          setIsOpenModal(false);
        }}
        footer={[
          <Button key="cancel" onClick={() => setIsOpenModal(false)}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={async () => {
              const value = form.getFieldsValue();
              const { id } = selectedRowDetail;
              await UpdateProduct({ id, ...value });
              //console.log("after updated>>>>>>>>", selectedRowDetail);
              setTimeout(() => {
                doneUpdateMessage();
              }, 1000);
              setIsOpenModal(false);
              await dispatch(fetchAllProduct());
            }}
          >
            Update
          </Button>,
        ]}
      >
        <FormShowDetail
          initialValues={selectedRowDetail}
          form={form}
          layout="vertical"
        ></FormShowDetail>
      </ModalShowDetail>
    </div>
  );
};

export default TableData;

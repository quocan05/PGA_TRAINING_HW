import { Button, Form } from "antd";
import { FilterBar } from "../../containers/FilterBar/filterBar";
import TableData from "../../containers/TableData/tableData";
import { MainLayout } from "../../layouts/Main/mainLayout";
import { ModalAddNew } from "../../components/modal/modalForm";
import { useEffect, useState } from "react";
import { FormAddNew } from "../../components/form/form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchAllProduct } from "../../redux/reducer/productReducer";
import { AddProduct } from "../../services/Products";
import { getLocalStorage } from "../../services/localStorage";
import { useNavigate } from "react-router";

export const PayrollPage = () => {
  const [openModalAddNew, setOpenModalAddNew] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const datasrc = useSelector((state: RootState) => state.products.listData);
  const dispatch = useDispatch<AppDispatch>();
  const handleAddNew = async () => {
    form.validateFields().then(async () => {
      const value = form.getFieldsValue();
      console.log("check>>>", value);
      await AddProduct({
        client: value.client,
        status: value.status,
        currency: value.currency,
        total: value.total,
        invoice: value.invoice,
        fundingMethod: value.fundingMethod,
        order: value.order,
      });
      dispatch(fetchAllProduct());
    });
  };
  useEffect(() => {
    const token = getLocalStorage("token");
    if (!token) {
      navigate("/login");
      return;
    } else {
      dispatch(fetchAllProduct());
    }
  }, []);
  return (
    <>
      <FilterBar />
      <TableData />
      <Button type="primary" onClick={() => setOpenModalAddNew(true)}>
        Add new product
      </Button>
      <ModalAddNew
        title={`Create new product`}
        open={openModalAddNew}
        onCancel={() => {
          setOpenModalAddNew(false);
        }}
        footer={[
          <Button key="cancel" onClick={() => setOpenModalAddNew(false)}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={() => {
              setOpenModalAddNew(false);
              //console.log("value form?>>>>", form.getFieldsValue());
              handleAddNew();
            }}
          >
            Create
          </Button>,
        ]}
      >
        <FormAddNew form={form}></FormAddNew>
      </ModalAddNew>
    </>
  );
};

import {
  optionsClientDefault,
  optionsSelect,
  optionsStatus,
  optionsStatusDefault,
} from "../../constants";
import { IOptions } from "../../interfaces/values";
import "./selects.scss";
import { CustomSelect } from "../../interfaces/select/select";
import React, { useState } from "react";
import { Select, Tag } from "antd";
import type { SelectProps } from "antd";
export const SelectStatus: React.FC<CustomSelect> = (props) => {
  return (
    <Select
      {...props}
      className="select-components"
      options={optionsStatus}
      allowClear
      defaultValue={optionsStatusDefault}
    />
  );
};

export const SelectClient: React.FC<CustomSelect> = (props) => {
  const fakeCliennts: IOptions[] = [
    {
      value: "client1",
      label: "client 1",
    },
    {
      value: "client2",
      label: "client 2",
    },
    {
      value: "client3",
      label: "client 3",
    },
  ];

  return (
    <Select
      showSearch
      placeholder="select client"
      {...props}
      className="select-components"
      options={fakeCliennts}
      defaultValue={optionsClientDefault}
    />
  );
};

export const SelectStatusInModal: React.FC<CustomSelect> = (props) => {
  return (
    <Select
      {...props}
      style={{ width: "100%" }}
      options={optionsSelect}
    />
  );
};

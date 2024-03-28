import { Flex } from "antd";
import "./filterBar.scss";
import { SelectClient, SelectStatus } from "../../components/selects/selects";
import { RangeDatePicker } from "../../components/rangePicker/rangePicker";
import { SearchInvoice } from "../../components/search/searchInput";
import { ButtonApply, ButtonClear } from "../../components/buttons/buttons";
export const FilterBar = () => {
  return (
    <div className="filter-bar">
      <Flex vertical={false} justify="space-between" align="center" gap={20}>
        <SelectStatus />
        <SelectClient />
        <RangeDatePicker />
        <SearchInvoice />
        <ButtonApply
          onClick={() => {
            console.log("apply");
          }}
        />
        <ButtonClear
          onClick={() => {
            console.log("click clear");
          }}
        />
        
      </Flex>
    </div>
  );
};

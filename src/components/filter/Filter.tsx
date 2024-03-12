import { FC } from "react";
import { Select } from "antd";
import { useAppDispatch } from "../../hooks";

interface Options {
  value: string | boolean | null,
  label: string
}

interface FilterProps {
  options: Options[],
  value: string | boolean | null,
  setFilter:any
}

const Filter: FC<FilterProps> = ({ options, value, setFilter }) => {
  const dispatch = useAppDispatch();
  const onChange = (value: string | boolean | null) => {
    dispatch(setFilter(value))
  };
  return (
    <>

      <Select
        showSearch
        style={{ width: "90%", margin: 10 }}
        onChange={onChange}
        filterOption={(input, option) =>
          (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
        }
        options={options}
        value={value}
      />
    </>
  );
}
export default Filter;
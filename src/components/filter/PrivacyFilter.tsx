import { FC } from "react";
import { useAppSelector } from "../../hooks";
import Filter from "./Filter"; 
import { changePrivacyFilter } from "../../store/groupSlice";

 const PrivacyFilter:FC=()=> {
  const privacyFilter = useAppSelector(state=> state.groups.privacyFilter )
  const options = [
    {
      value: null,
      label: "Все",
    },
    {
      value: false,
      label: "открытая",
    },
    {
      value: true,
      label: "закрытая",
    },
  ];
  return (
    <Filter
      options={options}
      setFilter={changePrivacyFilter}
      value={privacyFilter}
    />
  );
}

export default PrivacyFilter;
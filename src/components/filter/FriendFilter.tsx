import { FC } from "react";
import { useAppSelector } from "../../hooks";
import Filter from "./Filter"; 
import { changeFriendsFilter } from "../../store/groupSlice";

 const FriendsFilter:FC=()=> {
  const friendsFilter = useAppSelector(state=> state.groups.friendsFilter )
  const options = [
    {
      value: null,
      label: "Любое",
    },
    {
      value: false,
      label: "нет друзей",
    },
    {
      value: true,
      label: "есть друзья",
    },
  ];

  return (
    <Filter
      options={options}
      setFilter={changeFriendsFilter}
      value={friendsFilter}
    />
  );
}

export default FriendsFilter;
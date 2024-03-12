import { FC } from "react";
import Filter from "./Filter";
import { changeAvatarFilter } from "../../store/groupSlice";
import { useAppSelector } from "../../hooks";

const AvatarFilter: FC = () => {
  const avatarFilter = useAppSelector(state => state.groups.avatarFilter)
  const options = [
    {
      value: null,
      label: "Любой",
    },
    {
      value: 'red',
      label: "красный",
    },
    {
      value: "green",
      label: "зеленый",
    },
    {
      value: "yellow",
      label: "желтый",
    },
    {
      value: "blue",
      label: "синий",
    },
    {
      value: "purple",
      label: "фиолетовый",
    },
    {
      value: "white",
      label: "белый",
    },
    {
      value: "orange",
      label: "оранжевый",
    },

  ];
  return (
    <Filter
      options={options}
      setFilter={changeAvatarFilter}
      value={avatarFilter}
    />
  );
}
export default AvatarFilter;
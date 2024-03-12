import { FC } from "react"
import { useAppSelector } from '../hooks'
import GroupCard from "./GroupCard";
import Loader from "./Loader";
import Error from "./Error";
import FilterForm from "./filter/FilterForm";
import { Alert } from "antd";

const GroupList: FC = () => {
  const { groups, status, privacyFilter, avatarFilter, friendsFilter } = useAppSelector(state => state.groups);
  const filteredGroups = groups.filter(group => {
    if (privacyFilter !== null && group.closed !== privacyFilter) {
      return false;
    }
    if (avatarFilter && group.avatar_color !== avatarFilter) {
      return false;
    }
    if (friendsFilter !== null) {
      if (group.friends && !friendsFilter) {
        return false
      }
      else if (!group.friends && friendsFilter) {
        return false
      }
    }

    return true;
  });

  return (
    <div>
      {status === 'failed' && <Error />}
      {status === 'loading' && <Loader />}
      {status === 'succeeded' && <FilterForm />}
      {
        filteredGroups.map((group) =>
          <GroupCard key={group.id} {...group} />
        )  
      }
      {status === 'succeeded' && filteredGroups.length===0 &&  <Alert message="Ничего не найдено!" type="warning" style={{marginTop:'10vh',margin:'10vw', width:"45%" }}/>}
    </div>
  )

}

export default GroupList;
import { FC } from 'react';
import { useEffect } from 'react';
import { fetchGroups } from './store/groupSlice';
import { useAppDispatch } from './hooks';
import GroupList from './components/GroupList';

const App: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchGroups());
  }, [dispatch]);

  return (
    <div >
      <GroupList />
    </div>
  );
}

export default App;

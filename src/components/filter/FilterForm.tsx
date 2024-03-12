import { FC } from 'react';
import { useAppDispatch } from '../../hooks';
import AvatarFilter from './AvatarFilter';
import FriendsFilter from './FriendFilter';
import PrivacyFilter from './PrivacyFilter';
import { clearFilters } from '../../store/groupSlice';
import {
    Form,
    Button
} from 'antd';

const FilterForm: FC = () => {
    const dispatch = useAppDispatch();
    function clear() {
        dispatch(clearFilters());
    }

    return (
        <Form
            layout="vertical"
            size='large'
            style={{
                maxWidth: 600,
                border: '1px solid #f7f8fa',
                borderRadius: 10,
                boxShadow: '0 0 8px #e6e6e6',
                backgroundColor: '#f7f8fa', 
                position: "fixed",
                width:"30%",
                top:"10%",
                right: 20,
            }}
        >
            <Form.Item label="Приватность" style={{ marginLeft: 10 }}>
                <PrivacyFilter />
            </Form.Item >
            <Form.Item label="Аватар" style={{ marginLeft: 10 }}>
                <AvatarFilter />
            </Form.Item>
            <Form.Item label="Количество друзей" style={{ marginLeft: 10 }}>
                <FriendsFilter />
            </Form.Item>
            <Form.Item >
                <Button htmlType="button" onClick={clear} block>
                    Очистить фильтры
                </Button>
            </Form.Item>

        </Form>
    );
};

export default FilterForm;
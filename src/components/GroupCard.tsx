import { FC, useState } from "react";
import Friend from "./Friend";
import { Group } from "../models/models";
import { Card, Avatar, Button } from "antd";
const { Meta } = Card;

const GroupCard: FC<Group> = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const color = props.avatar_color || '#f7f8fa';

    return (
            <Card style={{backgroundColor:"#f7f8fa" , width:"65%" ,marginTop:10} } >
                <Meta
                    avatar={<Avatar style={{ backgroundColor: color, width: 100, height: 100 }} />}
                    title={props.name}
                    description={(props.closed ? 'Закрытая' : 'Открытая') + ' группа'}
                />
                <p>{props.members_count}  подписчиков</p>
                {props.friends &&  <Button type="link" onClick={ () => setIsOpen(prev => !prev) }> {props.friends.length} друзей</Button>}
                <ul  >{ isOpen && props.friends && props.friends.map((friend, index) => <Friend key={index} {...friend} />)}</ul>
            </Card>
    );
}


export default GroupCard;
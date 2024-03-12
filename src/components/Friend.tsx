import { FC } from "react"
import { User } from "../models/models"

const Friend:FC<User>=({first_name, last_name})=>{
    return (
        <li>{first_name} {last_name}</li>
    )
}
export default Friend
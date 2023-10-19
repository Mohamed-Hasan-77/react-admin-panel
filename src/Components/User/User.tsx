import { singleUser } from "../../Data";
import Single from "../Single/Single";

export default function User() {
    return (
        <div className="user">
            <Single {...singleUser} />
        </div>
    )
}

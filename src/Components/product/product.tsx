import { singleProduct } from "../../Data";
import Single from "../Single/Single";

export default function Product() {
    return (
        <div className="product">
            <Single {...singleProduct} />
        </div>
    )
}

import { Outlet } from "react-router-dom";
import { ERKShopProvider } from "@features/eurekashop/components";

export default function ERKShopLayout() {
    return (
        <ERKShopProvider>
            <Outlet />
        </ERKShopProvider>  
    );
}
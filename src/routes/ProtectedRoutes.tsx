import { Outlet } from "react-router-dom"
import { ContextsProps } from "../hooks/ContextsProps"

export const ProtectedRoutes = () => {
    const { authProps:{ loading } } = ContextsProps()
    if (!loading) {
        return <Outlet/>
    }

    return <div>Loading Screen...</div>
}
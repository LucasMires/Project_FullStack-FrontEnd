import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext/AuthContext"
import { Outlet } from "react-router-dom"

export const ProtectedRoutes = () => {
    const { loading } = useContext(AuthContext)


    if (!loading) {
        return <Outlet/>
    }

    return <div>Loading Screen...</div>
}
import { Routes, Route, Navigate } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { DashboardPage } from "../pages/DashboardPage"
import { ProtectedRoutes } from "./ProtectedRoutes"

export const MainRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Navigate to="/login"/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            
            <Route element={<ProtectedRoutes/>}>
                <Route path="/dashboard" element={<DashboardPage/>}/>
            </Route>
        </Routes>
    )
}
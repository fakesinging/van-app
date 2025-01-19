import { Outlet } from "react-router-dom"
export default function Dashboard() {
    return (
        <>
            <h1>Host dashboard goes here.</h1>
            <Outlet />
        </>
    )
}
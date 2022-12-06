import { Outlet } from "react-router-dom";

export default function Todos(){
    return (
        <>
            <h1>Todos</h1>
            <Outlet />
        </>
    )
}
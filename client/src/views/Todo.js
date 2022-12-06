import { useParams } from "react-router-dom"

export default function Todo(){
    const { id } = useParams()
    return (
        <>
            <h1>Todo { id }</h1>
        </>
    )
}
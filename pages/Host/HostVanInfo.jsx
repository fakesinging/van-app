import { useOutletContext } from "react-router-dom"
export default function HostVanInfo(){
    const sharedData = useOutletContext()
    return(
        <section className="host-van-detail-info">
            <h4>Name: <span>{sharedData.name}</span></h4>
            <h4>Description: <span>{sharedData.description}</span></h4>
            <h4>Type: <span>{sharedData.type}</span></h4>
            <h4>Visibility: <span>public</span></h4>
        </section>
    )
}
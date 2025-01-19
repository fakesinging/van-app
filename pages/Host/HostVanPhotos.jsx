import { useOutletContext } from "react-router-dom"
export default function HostVanPhotos(){
    const sharedData = useOutletContext()
    return(
        <img src={sharedData.imageUrl} alt={`Photo of ${sharedData.name}`} className="host-van-detail-image"/>
    )
}
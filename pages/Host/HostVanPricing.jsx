import { useOutletContext } from "react-router-dom"
export default function HostVanPricing(){
    const sharedData = useOutletContext()
    return(
        <h3 className="host-van-price">${sharedData.price}<span>/day</span></h3>
    )
}
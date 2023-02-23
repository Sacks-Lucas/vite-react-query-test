import PublicIp from './PublicIp'
import { useQuery } from '@tanstack/react-query';
import { getPublicIp } from "../../api/endpoints";

const PublicIpContainer = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["public-ip"],
        queryFn: getPublicIp
    })

    const childProps = {
        ip: data?.data.ip,
        isLoading
    }
    return (
        <PublicIp {...childProps} />
    )
}


export default PublicIpContainer
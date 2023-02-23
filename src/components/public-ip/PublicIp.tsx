
const PublicIp = ({ ip, isLoading }: PublicIpProps) => {
    return (
        <div style={{ marginTop: "20px" }}>
            <div style={{ fontSize: "20px" }}>PublicIp</div>
            {isLoading ? <div>Loading...</div> : <div style={{ fontSize: "28px" }}>{ip}</div>}
        </div>
    )
}

interface PublicIpProps {
    ip: number;
    isLoading: boolean
}

export default PublicIp
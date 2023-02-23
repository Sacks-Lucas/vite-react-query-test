import { DataContainer, Header } from "./BinanceData.styled";


const BinanceData = (props: BinanceDataProps) => {
    const { data, isLoading, refetch } = props
    return (
        <div>
            <Header>
                <div style={{ marginRight: "20px" }}>BinanceData</div>
                <button onClick={() => refetch()}>Refetch</button>
            </Header>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <DataContainer>
                    {data.map((item) => (
                        <div key={item.symbol} style={{ marginBottom: "20px" }}>
                            <div>{`Symbol: ${item.symbol}`}</div>
                            <div>{`Count: ${item.count}`}</div>
                            <div>{`Volume: ${item.volume}`}</div>
                        </div>
                    ))}
                </DataContainer>
            )}
        </div>
    )
}

interface BinanceDataProps {
    data: Array<BinanceData>;
    isLoading: boolean;
    refetch: any;
}

interface BinanceData {
    symbol: string
    count: number,
    volume: string
}

export default BinanceData
import { getBinanceData } from "../api/endpoints"
import { useQuery } from '@tanstack/react-query';

const useBinanceData = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["binance"],
    queryFn: getBinanceData
  })

  const mappedData = data?.data.map((item: any) => {
    return {
      symbol: item.symbol,
      count: item.count,
      volume: item.volume,
    }
  }).slice(0, 5)

  return {
    data: mappedData,
    isLoading,
    refetch,
  }
}

export default useBinanceData
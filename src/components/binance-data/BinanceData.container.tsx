import useBinanceData from '../../hooks/useBinanceData';
import BinanceData from './BinanceData';


const BinanceDataContainer = () => {
  const { data, isLoading, refetch } = useBinanceData()
  const childProps = {
    data,
    isLoading,
    refetch
  }
  return (
    <BinanceData {...childProps} />
  )
}


export default BinanceDataContainer
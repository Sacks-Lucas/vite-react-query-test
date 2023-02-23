import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import BinanceData from './components/binance-data';
import AgeInput from './components/age-input';
import PublicIp from './components/public-ip';

const queryClient = new QueryClient();

function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <div >
        <BinanceData />
        <AgeInput />
        <PublicIp />
      </div>
    </QueryClientProvider>
  )
}

export default App

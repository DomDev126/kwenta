import axios from 'axios';
import { useQuery, QueryConfig } from 'react-query';
import { useRecoilValue } from 'recoil';
import { isL2State } from 'store/wallet';
import QUERY_KEYS from 'constants/queryKeys';
import Connector from 'containers/Connector';

const ETH_GAS_STATION_API_URL = 'https://ethgasstation.info/json/ethgasAPI.json';
const GAS_NOW_API_URL = 'https://www.gasnow.org/api/v3/gas/price?utm_source=kwenta';

type EthGasStationResponse = {
	average: number;
	avgWait: number;
	blockNum: number;
	block_time: number;
	fast: number;
	fastWait: number;
	fastest: number;
	fastestWait: number;
	gasPriceRange: Record<number, number>;
	safeLow: number;
	safeLowWait: number;
	speed: number;
};

type GasNowResponse = {
	code: number;
	data: {
		rapid: number;
		fast: number;
		standard: number;
		slow: number;
		timestamp: number;
	};
};

export type GasPrices = {
	fastest: number;
	fast: number;
	average: number;
};

export type GasSpeed = keyof GasPrices;

export const GAS_SPEEDS: GasSpeed[] = ['average', 'fast', 'fastest'];

const useEthGasPriceQuery = (options?: QueryConfig<GasPrices>) => {
	const isL2 = useRecoilValue(isL2State);
	const { provider } = Connector.useContainer();

	return useQuery<GasPrices>(
		QUERY_KEYS.Network.EthGasPrice,
		async () => {
			if (isL2) {
				const gasPrice = (await provider!?.getGasPrice()).toNumber() / 1e8 / 10 ?? 0;
				return {
					fastest: gasPrice,
					fast: gasPrice,
					average: gasPrice,
				};
			}
			try {
				const result = await axios.get<GasNowResponse>(GAS_NOW_API_URL);
				const { standard, fast, rapid: fastest } = result.data.data;

				return {
					fastest: Math.round(fastest / 1e8 / 10),
					fast: Math.round(fast / 1e8 / 10),
					average: Math.round(standard / 1e8 / 10),
				};
			} catch (e) {
				console.log(e);

				const result = await axios.get<EthGasStationResponse>(ETH_GAS_STATION_API_URL);
				const { average, fast, fastest } = result.data;

				return {
					fastest: Math.round(fastest / 10),
					fast: Math.round(fast / 10),
					average: Math.round(average / 10),
				};
			}
		},
		options
	);
};

export default useEthGasPriceQuery;

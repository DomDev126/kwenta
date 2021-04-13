import useSynthetixQueries from '@synthetixio/queries';
import Wei from '@synthetixio/wei';

import { useRecoilValue } from 'recoil';
import { priceCurrencyState } from 'store/app';

const useSelectedPriceCurrency = () => {
	const { useExchangeRatesQuery } = useSynthetixQueries();

	const selectedPriceCurrency = useRecoilValue(priceCurrencyState);
	const exchangeRatesQuery = useExchangeRatesQuery();
	const exchangeRates = exchangeRatesQuery.isSuccess ? exchangeRatesQuery.data ?? null : null;
	const selectPriceCurrencyRate = exchangeRates && exchangeRates[selectedPriceCurrency.name];

	const getPriceAtCurrentRate = (price: Wei) =>
		selectPriceCurrencyRate != null ? price.div(selectPriceCurrencyRate) : price;

	return {
		selectPriceCurrencyRate,
		selectedPriceCurrency,
		getPriceAtCurrentRate,
	};
};

export default useSelectedPriceCurrency;

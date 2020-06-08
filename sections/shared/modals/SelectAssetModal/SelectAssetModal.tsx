import { FC } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import styled from 'styled-components';

import { Synth, SynthsMap } from 'lib/synthetix';

import Currency from 'components/Currency';
import BaseModal from 'components/BaseModal';
import Button from 'components/Button';

import { SelectableCurrencyRow, FlexDivRowCentered, NoTextTransform } from 'styles/common';

import { CurrencyKey } from 'constants/currency';
import { NO_VALUE } from 'constants/placeholder';

import { SynthBalance } from 'queries/walletBalances/useSynthsBalancesQuery';

import { formatCurrency } from 'utils/formatters/number';

import { RowsHeader, RowsContainer } from '../common';

type SelectAssetModalProps = {
	onDismiss: () => void;
	synthsMap: SynthsMap | null;
	synthBalances: SynthBalance[];
	synthTotalUSDBalance: number | null;
	onSelect: (currencyKey: CurrencyKey) => void;
	selectedPriceCurrency: Synth;
	selectPriceCurrencyRate: number | null;
};

export const SelectSynthModal: FC<SelectAssetModalProps> = ({
	onDismiss,
	synthsMap,
	synthBalances,
	synthTotalUSDBalance,
	onSelect,
	selectedPriceCurrency,
	selectPriceCurrencyRate,
}) => {
	const { t } = useTranslation();
	const hasNonSynths = true;

	return (
		<StyledBaseModal onDismiss={onDismiss} isOpen={true} title={t('modals.select-asset.title')}>
			<TotalValue>
				<Total>
					{synthTotalUSDBalance != null
						? formatCurrency(
								selectedPriceCurrency.name,
								selectPriceCurrencyRate != null
									? (synthTotalUSDBalance /= selectPriceCurrencyRate)
									: synthTotalUSDBalance,
								{
									sign: selectedPriceCurrency.sign,
								}
						  )
						: NO_VALUE}
				</Total>
				<Title>{t('modals.select-asset.total-synth-value')}</Title>
			</TotalValue>
			<RowsHeader>
				<span>{t('modals.select-asset.header.your-synths')}</span>
				<span>{t('modals.select-asset.header.holdings')}</span>
			</RowsHeader>
			<RowsContainer style={{ height: 'auto' }}>
				{synthBalances.map(({ currencyKey, balance, usdBalance }) => {
					const synthDesc = synthsMap != null ? synthsMap[currencyKey]?.desc : null;

					let totalValue = usdBalance;
					if (selectPriceCurrencyRate != null) {
						totalValue /= selectPriceCurrencyRate;
					}

					return (
						<StyledSelectableCurrencyRow
							key={currencyKey}
							isSelectable={true}
							onClick={() => {
								onSelect(currencyKey);
								onDismiss();
							}}
						>
							<Currency.Name currencyKey={currencyKey} name={synthDesc} showIcon={true} />
							<Currency.Amount
								currencyKey={currencyKey}
								amount={balance}
								totalValue={totalValue}
								sign={selectedPriceCurrency.sign}
							/>
						</StyledSelectableCurrencyRow>
					);
				})}
			</RowsContainer>
			{hasNonSynths && (
				<>
					<RowsSpacer />
					<RowsHeader>
						<span>{t('modals.select-asset.header.non-synths')}</span>
					</RowsHeader>
					<RowsContainer>
						<CryptoRow>
							<Currency.Name currencyKey="ETH" showIcon={true} iconProps={{ type: 'asset' }} />
							<ConvertButton variant="primary" isRounded={true}>
								<Trans
									i18nKey="common.currency.convert-to-currency"
									values={{ currencyKey: 'sETH' }}
									components={[<NoTextTransform />]}
								/>
							</ConvertButton>
						</CryptoRow>
					</RowsContainer>
				</>
			)}
		</StyledBaseModal>
	);
};

const StyledBaseModal = styled(BaseModal)`
	[data-reach-dialog-content] {
		width: 400px;
	}
	.card-body {
		height: 80vh;
		padding: 24px 0;
		overflow: hidden;
	}
`;

const TotalValue = styled.div`
	padding: 0 16px 24px 16px;
	text-align: center;
`;

const Title = styled.div`
	font-family: ${(props) => props.theme.fonts.bold};
	text-transform: uppercase;
`;

const Total = styled.div`
	font-size: 20px;
	color: ${(props) => props.theme.colors.white};
	font-family: ${(props) => props.theme.fonts.mono};
	padding-bottom: 5px;
`;

const StyledSelectableCurrencyRow = styled(SelectableCurrencyRow)`
	padding: 5px 16px;
`;

const RowsSpacer = styled.div`
	height: 32px;
`;

const CryptoRow = styled(FlexDivRowCentered)`
	padding: 5px 16px;
`;

const ConvertButton = styled(Button)`
	text-transform: none;
	&::first-letter {
		text-transform: capitalize;
	}
`;

export default SelectSynthModal;

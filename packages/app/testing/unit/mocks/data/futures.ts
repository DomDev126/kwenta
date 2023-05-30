import { SL_TP_MAX_SIZE } from '@kwenta/sdk/constants'
import {
	ConditionalOrder,
	FuturesMarketAsset,
	FuturesMarketKey,
	NetworkId,
	PositionSide,
	SynthSuspensionReason,
} from '@kwenta/sdk/types'
import { wei } from '@synthetixio/wei'

import { FUTURES_INITIAL_STATE } from 'state/futures/reducer'
import { SMART_MARGIN_INITIAL_STATE } from 'state/futures/smartMargin/reducer'

import { PRELOADED_STATE, TEST_ADDR } from './app'

export const mockSmartMarginAccount = (freeMargin: string = '1000', keeperEthBal = '0.05') => ({
	account: '0xe1ba3B0A962FbC525a9f9503AEE3310940Bb2a6F',
	positionHistory: [],
	trades: [],
	marketMarginTransfers: [],
	accountTransfers: [],
	balanceInfo: {
		freeMargin: freeMargin,
		keeperEthBal: keeperEthBal,
		allowance: freeMargin,
		walletEthBal: '1',
	},
	delayedOrders: [],
	conditionalOrders: [],
})

export const SDK_MARKETS = [
	{
		version: 2,
		marketAddress: '0x0940B0A96C5e1ba33AEE331a9f950Bb2a6F2Fb25',
		marketKey: 'sBNBPERP' as FuturesMarketKey,
		marketName: 'BNB/sUSD',
		asset: 'BNB' as FuturesMarketAsset,
		assetHex: '0x424e420000000000000000000000000000000000000000000000000000000000',
		currentFundingRate: wei('0.000006647524972557'),
		currentFundingVelocity: wei('0.000007031227025059'),
		feeRates: {
			makerFee: wei('0.300000000000000000'),
			takerFee: wei('0.300000000000000000'),
			makerFeeDelayedOrder: wei('0.300000000000000000'),
			takerFeeDelayedOrder: wei('0.300000000000000000'),
			makerFeeOffchainDelayedOrder: wei('0.000200000000000000'),
			takerFeeOffchainDelayedOrder: wei('0.000800000000000000'),
		},
		openInterest: {
			shortPct: 0.4783525165655898,
			longPct: 0.5216474834344103,
			shortUSD: wei('925695.596442819678463907'),
			longUSD: wei('1009478.912701613579629876'),
			long: wei('4066.418411201914495882'),
			short: wei('3728.919513999078804517'),
		},
		marketDebt: wei('861660.108202170990537641'),
		marketSkew: wei('337.498897202835691365'),
		contractMaxLeverage: wei('27.500000000000000000'),
		appMaxLeverage: wei('25.000000000000000000'),
		marketSize: wei('7795.337925200993300399'),
		marketLimitUsd: wei('4964953.483000000000000000'),
		marketLimitNative: wei('20000.000000000000000000'),
		minInitialMargin: wei('40.000000000000000000'),
		keeperDeposit: wei('1.490641175532237679'),
		isSuspended: false,
		marketClosureReason: 'market-closure' as SynthSuspensionReason,
		settings: {
			maxMarketValue: wei('20000.000000000000000000'),
			skewScale: wei('750000.000000000000000000'),
			delayedOrderConfirmWindow: 120,
			offchainDelayedOrderMinAge: 4,
			offchainDelayedOrderMaxAge: 60,
			minDelayTimeDelta: 60,
			maxDelayTimeDelta: 6000,
		},
	},

	{
		version: 2,
		marketAddress: '0x2B3bb4c683BFc5239B029131EEf3B1d214478d93',
		marketKey: 'sETHPERP',
		marketName: 'ETH/sUSD' as FuturesMarketKey,
		asset: 'sETH' as FuturesMarketAsset,
		assetHex: '0x7345544800000000000000000000000000000000000000000000000000000000',
		currentFundingRate: wei('-0.000025743917111574'),
		currentFundingVelocity: wei('-0.000000709004693224'),
		feeRates: {
			makerFee: wei('0.300000000000000000'),
			takerFee: wei('0.300000000000000000'),
			makerFeeDelayedOrder: wei('0.300000000000000000'),
			takerFeeDelayedOrder: wei('0.300000000000000000'),
			makerFeeOffchainDelayedOrder: wei('0.000200000000000000'),
			takerFeeOffchainDelayedOrder: wei('0.000600000000000000'),
		},
		openInterest: {
			shortPct: 0.5015705899969076,
			longPct: 0.4984294100030924,
			shortUSD: wei('13142288.928936562683740571'),
			longUSD: wei('13059982.876947410778757960'),
			long: wei('7200.123095223081871052'),
			short: wei('7245.499395589429634136'),
		},
		marketDebt: wei('9564940.585953458555968058'),
		marketSkew: wei('-45.376300366347763084'),
		contractMaxLeverage: wei('55.000000000000000000'),
		appMaxLeverage: wei('50.000000000000000000'),
		marketSize: wei('14445.622490812511505188'),
		marketLimitUsd: wei('36277110.000000000000000000'),
		marketLimitNative: wei('20000.000000000000000000'),
		minInitialMargin: wei('40.000000000000000000'),
		keeperDeposit: wei('1.490641175532237679'),
		isSuspended: false,
		marketClosureReason: 'market-closure' as SynthSuspensionReason,
		settings: {
			maxMarketValue: wei('20000.000000000000000000'),
			skewScale: wei('1000000.000000000000000000'),
			delayedOrderConfirmWindow: 120,
			offchainDelayedOrderMinAge: 4,
			offchainDelayedOrderMaxAge: 60,
			minDelayTimeDelta: 60,
			maxDelayTimeDelta: 6000,
		},
	},
	{
		version: 2,
		marketAddress: '0x59b007E9ea8F89b069c43F8f45834d30853e3699',
		marketKey: 'sBTCPERP' as FuturesMarketKey,
		marketName: 'BTC/sUSD',
		asset: 'sBTC' as FuturesMarketAsset,
		assetHex: '0x7342544300000000000000000000000000000000000000000000000000000000',
		currentFundingRate: wei('0.000048566384344668'),
		currentFundingVelocity: wei('-0.000000151964222070'),
		feeRates: {
			makerFee: wei('0.300000000000000000'),
			takerFee: wei('0.300000000000000000'),
			makerFeeDelayedOrder: wei('0.300000000000000000'),
			takerFeeDelayedOrder: wei('0.300000000000000000'),
			makerFeeOffchainDelayedOrder: wei('0.000200000000000000'),
			takerFeeOffchainDelayedOrder: wei('0.000600000000000000'),
		},
		openInterest: {
			shortPct: 0.5002984445053714,
			longPct: 0.4997015554946286,
			shortUSD: wei('23569324.160750116734578584'),
			longUSD: wei('23541204.403959554931944732'),
			long: wei('814.213770734233251071'),
			short: wei('815.186341755481507078'),
		},
		marketDebt: wei('8746498.919374243549025556'),
		marketSkew: wei('-0.972571021248256007'),
		contractMaxLeverage: wei('55.000000000000000000'),
		appMaxLeverage: wei('50.000000000000000000'),
		marketSize: wei('1629.400112489714758149'),
		marketLimitUsd: wei('57825611.037580000000000000'),
		marketLimitNative: wei('2000.000000000000000000'),
		minInitialMargin: wei('40.000000000000000000'),
		keeperDeposit: wei('1.490641175532237679'),
		isSuspended: false,
		marketClosureReason: 'market-closure' as SynthSuspensionReason,
		settings: {
			maxMarketValue: wei('2000.000000000000000000'),
			skewScale: wei('100000.000000000000000000'),
			delayedOrderConfirmWindow: 120,
			offchainDelayedOrderMinAge: 4,
			offchainDelayedOrderMaxAge: 60,
			minDelayTimeDelta: 60,
			maxDelayTimeDelta: 6000,
		},
	},
]

export const MOCK_TRADE_PREVIEW = {
	fee: wei('0.199964245556097993'),
	liqPrice: wei('1684.972418555525651097'),
	margin: wei('99.800035754443902007'),
	price: wei('1847.756843061337953400'),
	size: wei('0.541100000000000000'),
	sizeDelta: wei('0.541100000000000000'),
	side: PositionSide.LONG,
	leverage: wei('10.018245186209463524'),
	notionalValue: wei('999.821227780489966584'),
	status: 0,
	showStatus: false,
	statusMessage: 'Success',
	priceImpact: wei('0.000000270556392273'),
	exceedsPriceProtection: false,
}

export const mockConditionalOrders = (): ConditionalOrder[] => {
	return [
		{
			id: 15,
			subgraphId: 'CM-0x23b826B5D9E78764F3A53d29Ff402486101d3629-15',
			account: '0x23b826B5D9E78764F3A53d29Ff402486101d3629',
			size: wei(SL_TP_MAX_SIZE),
			marginDelta: wei('0'),
			orderType: 1,
			orderTypeDisplay: 'Stop Loss',
			desiredFillPrice: wei('4.83911'),
			targetPrice: wei('5.0938'),
			reduceOnly: true,
			sizeTxt: 'Close',
			targetPriceTxt: '$5.09',
			marketKey: FuturesMarketKey.sDOTPERP,
			market: 'DOT/sUSD',
			asset: FuturesMarketAsset.DOT,
			side: PositionSide.SHORT,
			isStale: false,
			isExecutable: false,
			isSlTp: true,
		},
		{
			id: 14,
			subgraphId: 'CM-0x23b826B5D9E78764F3A53d29Ff402486101d3629-14',
			account: '0x23b826B5D9E78764F3A53d29Ff402486101d3629',
			size: wei(SL_TP_MAX_SIZE),
			marginDelta: wei('0'),
			orderType: 0,
			orderTypeDisplay: 'Take Profit',
			desiredFillPrice: wei('5.01'),
			targetPrice: wei('5.278'),
			reduceOnly: true,
			sizeTxt: 'Close',
			targetPriceTxt: '$5.27',
			marketKey: FuturesMarketKey.sDOTPERP,
			market: 'DOT/sUSD',
			asset: FuturesMarketAsset.DOT,
			side: PositionSide.SHORT,
			isStale: false,
			isExecutable: false,
			isSlTp: true,
		},
		{
			id: 13,
			subgraphId: 'CM-0x23b826B5D9E78764F3A53d29Ff402486101d3629-13',
			account: '0x23b826B5D9E78764F3A53d29Ff402486101d3629',
			size: wei('23.322500000000000000'),
			marginDelta: wei('60.000000000000000000'),
			orderType: 0,
			orderTypeDisplay: 'Limit',
			desiredFillPrice: wei('5.200000000000000000'),
			targetPrice: wei('5.000000000000000000'),
			reduceOnly: false,
			sizeTxt: '23.32 DOT',
			targetPriceTxt: '$5.00',
			marketKey: FuturesMarketKey.sDOTPERP,
			market: 'DOT/sUSD',
			asset: FuturesMarketAsset.DOT,
			side: PositionSide.LONG,
			isStale: false,
			isExecutable: false,
			isSlTp: false,
		},
		{
			id: 12,
			subgraphId: 'CM-0x23b826B5D9E78764F3A53d29Ff402486101d3629-12',
			account: '0x23b826B5D9E78764F3A53d29Ff402486101d3629',
			size: wei('15.789700000000000000'),
			marginDelta: wei('60.000000000000000000'),
			orderType: 0,
			orderTypeDisplay: 'Limit',
			desiredFillPrice: wei('5.2'),
			targetPrice: wei('5'),
			reduceOnly: false,
			sizeTxt: '15.79 LINK',
			targetPriceTxt: '$5.00',
			marketKey: FuturesMarketKey.sLINKPERP,
			market: 'LINK/sUSD',
			asset: FuturesMarketAsset.LINK,
			side: PositionSide.LONG,
			isStale: false,
			isExecutable: false,
			isSlTp: false,
		},
		{
			id: 11,
			subgraphId: 'CM-0x23b826B5D9E78764F3A53d29Ff402486101d3629-11',
			account: '0x23b826B5D9E78764F3A53d29Ff402486101d3629',
			size: wei(SL_TP_MAX_SIZE),
			marginDelta: wei('0'),
			orderType: 1,
			orderTypeDisplay: 'Stop Loss',
			desiredFillPrice: wei('21.664750000000000000'),
			targetPrice: wei('22.805000000000000000'),
			reduceOnly: true,
			sizeTxt: 'Close',
			targetPriceTxt: '$22.81',
			marketKey: FuturesMarketKey.sSOLPERP,
			market: 'SOL/sUSD',
			asset: FuturesMarketAsset.SOL,
			side: PositionSide.SHORT,
			isStale: false,
			isExecutable: false,
			isSlTp: true,
		},
		{
			id: 10,
			subgraphId: 'CM-0x23b826B5D9E78764F3A53d29Ff402486101d3629-10',
			account: '0x23b826B5D9E78764F3A53d29Ff402486101d3629',
			size: wei(SL_TP_MAX_SIZE),
			marginDelta: wei('0'),
			orderType: 0,
			orderTypeDisplay: 'Take Profit',
			desiredFillPrice: wei('24.07680'),
			targetPrice: wei('25.3440'),
			reduceOnly: true,
			sizeTxt: 'Close',
			targetPriceTxt: '$25.34',
			marketKey: FuturesMarketKey.sSOLPERP,
			market: 'SOL/sUSD',
			asset: FuturesMarketAsset.SOL,
			side: PositionSide.SHORT,
			isStale: false,
			isExecutable: false,
			isSlTp: true,
		},
		{
			id: 9,
			subgraphId: 'CM-0x23A53d29Ff402483b826B5D9E78764F6101d3629-9',
			account: '0x23b826B5D9E78764F3A53d29Ff402486101d3629',
			size: wei(10),
			marginDelta: wei('0'),
			orderType: 0,
			orderTypeDisplay: 'Limit',
			desiredFillPrice: wei('1852.5'),
			targetPrice: wei('1950'),
			reduceOnly: true,
			sizeTxt: 'Close',
			targetPriceTxt: '$1,950.00',
			marketKey: FuturesMarketKey.sETHPERP,
			market: 'ETH/sUSD',
			asset: FuturesMarketAsset.sETH,
			side: PositionSide.SHORT,
			isStale: false,
			isExecutable: false,
			isSlTp: false,
		},
		{
			id: 8,
			subgraphId: 'CM-0x23b83d29Ff4026B5D9E78764F3A51d3629-8',
			account: '0x23b826B5D9E78764F3A53d29Ff402486101d3629',
			size: wei(5),
			marginDelta: wei('0'),
			orderType: 0,
			orderTypeDisplay: 'Limit',
			desiredFillPrice: wei('1852.5'),
			targetPrice: wei('1950'),
			reduceOnly: true,
			sizeTxt: 'Close',
			targetPriceTxt: '$1,950.00',
			marketKey: FuturesMarketKey.sETHPERP,
			market: 'ETH/sUSD',
			asset: FuturesMarketAsset.sETH,
			side: PositionSide.LONG,
			isStale: false,
			isExecutable: false,
			isSlTp: false,
		},
		{
			id: 7,
			subgraphId: 'CM-0x23b826B5D9E24878764F3A53d29Ff40-7',
			account: '0x23b826B5D9E78764F3A53d29Ff402486101d3629',
			size: wei(10),
			marginDelta: wei('0'),
			orderType: 0,
			orderTypeDisplay: 'Limit',
			desiredFillPrice: wei('1852.5'),
			targetPrice: wei('1950'),
			reduceOnly: true,
			sizeTxt: 'Close',
			targetPriceTxt: '$1,750.00',
			marketKey: FuturesMarketKey.sETHPERP,
			market: 'ETH/sUSD',
			asset: FuturesMarketAsset.sETH,
			side: PositionSide.LONG,
			isStale: false,
			isExecutable: false,
			isSlTp: false,
		},
		{
			id: 6,
			subgraphId: 'CM-0x23b826B5D9E24878764F3A53d29Ff40-6',
			account: '0x23b826B5D9E78764F3A53d29Ff402486101d3629',
			size: wei(10),
			marginDelta: wei('0'),
			orderType: 0,
			orderTypeDisplay: 'Limit',
			desiredFillPrice: wei('1852.5'),
			targetPrice: wei('1950'),
			reduceOnly: true,
			sizeTxt: 'Close',
			targetPriceTxt: '$1,850.00',
			marketKey: FuturesMarketKey.sETHPERP,
			market: 'ETH/sUSD',
			asset: FuturesMarketAsset.sETH,
			side: PositionSide.LONG,
			isStale: false,
			isExecutable: false,
			isSlTp: false,
		},
		{
			id: 5,
			subgraphId: 'CM-0x23b826B5D9E24878764F3A53d29Ff40-5',
			account: '0x23b826B5D9E78764F3A53d29Ff402486101d3629',
			size: wei(10),
			marginDelta: wei('0'),
			orderType: 0,
			orderTypeDisplay: 'Limit',
			desiredFillPrice: wei('1852.5'),
			targetPrice: wei('1950'),
			reduceOnly: true,
			sizeTxt: 'Close',
			targetPriceTxt: '$1,850.00',
			marketKey: FuturesMarketKey.sETHPERP,
			market: 'ETH/sUSD',
			asset: FuturesMarketAsset.sETH,
			side: PositionSide.LONG,
			isStale: false,
			isExecutable: false,
			isSlTp: false,
		},
	]
}

export const preloadedStateWithSmartMarginAccount = (mockAccount = mockSmartMarginAccount()) => {
	return {
		...PRELOADED_STATE,
		futures: {
			...FUTURES_INITIAL_STATE,
		},
		smartMargin: {
			...SMART_MARGIN_INITIAL_STATE,
			accounts: {
				[10 as NetworkId]: {
					[TEST_ADDR]: mockAccount,
				},
			},
		},
	}
}

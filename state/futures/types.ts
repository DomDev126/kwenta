import Wei from '@synthetixio/wei';

import { FuturesAccountType } from 'queries/futures/types';
import { TransactionStatus } from 'sdk/types/common';
import { FuturesMarket, FuturesOrder, FuturesPosition, FuturesVolumes } from 'sdk/types/futures';
import { PositionSide } from 'sections/futures/types';
import { FetchStatus } from 'state/types';
import { FuturesMarketAsset, FuturesMarketKey } from 'utils/futures';

export type IsolatedMarginOrderType = 'next price' | 'market';
export type CrossMarginOrderType = 'market' | 'stop market' | 'limit';

export type CrossMarginTradeInputs<T = Wei> = {
	leverage: string;
	nativeSizeDelta: T;
	susdSizeDelta: T;
	orderPrice?: string | undefined;
};

export type IsolatedMarginTradeInputs = {
	nativeSizeDelta: string;
	susdSizeDelta: string;
};

export type FundingRateSerialized = {
	asset: FuturesMarketKey;
	fundingTitle: string;
	fundingRate: string | null;
};

export type FundingRate<T = Wei> = {
	asset: FuturesMarketKey;
	fundingTitle: string;
	fundingRate: T | null;
};

export type FuturesQueryStatuses = {
	markets: FetchStatus;
	crossMarginBalanceInfo: FetchStatus;
	dailyVolumes: FetchStatus;
	crossMarginPositions: FetchStatus;
	isolatedPositions: FetchStatus;
	openOrders: FetchStatus;
	crossMarginSettings: FetchStatus;
};

export type FuturesTransaction = {
	type:
		| 'deposit_cross_margin'
		| 'withdraw_cross_margin'
		| 'approve_cross_margin'
		| 'deposit_isolated'
		| 'withdraw_isolated';
	status: TransactionStatus;
	error?: string;
	hash: string | null;
};

// TODO: Separate in some way by network and wallet
// so we can have persisted state between switching

export type FuturesState = {
	selectedType: FuturesAccountType;
	confirmationModalOpen: boolean;
	isolatedMargin: IsolatedMarginState;
	crossMargin: CrossMarginState;
	markets: FuturesMarket<string>[];
	fundingRates: FundingRateSerialized[];
	queryStatuses: FuturesQueryStatuses;
	dailyMarketVolumes: FuturesVolumes<string>;
	transaction?: FuturesTransaction | undefined;
};

export type CrossMarginBalanceInfo<T = Wei> = {
	freeMargin: T;
	keeperEthBal: T;
	allowance: T;
};

export type CrossMarginSettings<T = Wei> = {
	tradeFee: T;
	limitOrderFee: T;
	stopOrderFee: T;
};

export type CrossMarginState = {
	tradeInputs: CrossMarginTradeInputs<string>;
	orderType: CrossMarginOrderType;
	selectedLeverage: string;
	leverageSide: PositionSide;
	selectedMarketAsset: FuturesMarketAsset;
	showCrossMarginOnboard: boolean;
	position?: FuturesPosition<string>;
	balanceInfo: CrossMarginBalanceInfo<string>;
	account: string | undefined;
	settings: CrossMarginSettings<string>;
	positions: {
		[account: string]: FuturesPosition<string>[];
	};
	openOrders: {
		[account: string]: FuturesOrder<string>[];
	};
};

export type IsolatedMarginState = {
	tradeInputs: IsolatedMarginTradeInputs;
	orderType: IsolatedMarginOrderType;
	selectedLeverage: string;
	leverageSide: PositionSide;
	selectedMarketAsset: FuturesMarketAsset;
	position?: FuturesPosition<string>;
	positions: {
		[account: string]: FuturesPosition<string>[];
	};
	openOrders: {
		[account: string]: FuturesOrder<string>[];
	};
};

export const futuresPositionKeys = new Set([
	'remainingMargin',
	'accessibleMargin',
	'order.fee',
	'order.leverage',
	'position.notionalValue',
	'position.accruedFunding',
	'position.initialMargin',
	'position.profitLoss',
	'position.lastPrice',
	'position.size',
	'position.liquidationPrice',
	'position.initialLeverage',
	'position.leverage',
	'position.pnl',
	'position.pnlPct',
	'position.marginRatio',
]);

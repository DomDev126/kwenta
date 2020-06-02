import onboard from 'bnc-onboard';
import notify from 'bnc-notify';

import { Subscriptions } from 'bnc-onboard/dist/src/interfaces';
import { getInfuraRpcURL } from 'utils/infura';

import { Network } from 'store/connection';

export const initOnboard = (network: Network, subscriptions: Subscriptions) => {
	const infuraRpc = getInfuraRpcURL(network);

	return onboard({
		dappId: process.env.BN_ONBOARD_API_KEY,
		hideBranding: true,
		networkId: network.id,
		subscriptions,
		walletSelect: {
			wallets: [
				{ walletName: 'metamask', preferred: true },
				{
					walletName: 'ledger',
					rpcUrl: infuraRpc,
					preferred: true,
				},
				{
					walletName: 'walletConnect',
					rpc: { [network.id]: infuraRpc },
					preferred: true,
				},
				{ walletName: 'coinbase', preferred: true },
				{
					walletName: 'portis',
					apiKey: process.env.PORTIS_APP_ID,
					preferred: true,
				},
				{ walletName: 'trust', rpcUrl: infuraRpc },
				{ walletName: 'dapper' },
				{ walletName: 'walletLink', rpcUrl: infuraRpc },
				{ walletName: 'opera' },
				{ walletName: 'operaTouch' },
				{ walletName: 'torus' },
				{ walletName: 'status' },
				{ walletName: 'unilogin' },
			],
		},
		walletCheck: [
			{ checkName: 'derivationPath' },
			{ checkName: 'accounts' },
			{ checkName: 'connect' },
			{ checkName: 'network' },
		],
	});
};

export const initNotify = (networkId: NetworkId) =>
	notify({
		dappId: process.env.BN_NOTIFY_API_KEY!,
		networkId,
		desktopPosition: 'topRight',
	});

import ExchangePage from '../pages/exchange/exchange-page';

const exchange = new ExchangePage();

let metamaskWalletAddress;

describe('Wallet tests', () => {
	before(() => {
		exchange.getMetamaskWalletAddress().then((address) => {
			metamaskWalletAddress = address;
		});
	});
	context('Connect metamask wallet', () => {
		it(`should login with success`, () => {
			exchange.visit();
			exchange.connectMetamaskWallet();
			exchange.acceptMetamaskAccessRequest();
			exchange.waitUntilLoggedIn();
			exchange.getLoggedInWalletAddress().then((exchangeWalletAddress) => {
				const formattedMetamaskWalletAddress =
					metamaskWalletAddress.slice(0, 5) + '...' + metamaskWalletAddress.slice(-5);
				expect(exchangeWalletAddress).to.equal(formattedMetamaskWalletAddress.toLowerCase());
			});
		});
	});
});

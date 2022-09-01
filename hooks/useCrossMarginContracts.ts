import { NetworkId } from '@synthetixio/contracts-interface';
import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';

import { CROSS_MARGIN_ACCOUNT_FACTORY, CROSS_MARGIN_BASE_SETTINGS } from 'constants/address';
import Connector from 'containers/Connector';
import { CrossMarginAccountFactory } from 'sdk/contracts/types/CrossMarginAccountFactory';
import { CrossMarginBase } from 'sdk/contracts/types/CrossMarginBase';
import { CrossMarginBaseSettings } from 'sdk/contracts/types/CrossMarginBaseSettings';
import { CrossMarginAccountFactory__factory } from 'sdk/contracts/types/factories/CrossMarginAccountFactory__factory';
import { CrossMarginBase__factory } from 'sdk/contracts/types/factories/CrossMarginBase__factory';
import { CrossMarginBaseSettings__factory } from 'sdk/contracts/types/factories/CrossMarginBaseSettings__factory';
import { futuresAccountState } from 'store/futures';

export default function useCrossMarginContracts(): {
	crossMarginAccountContract: CrossMarginBase | null;
	crossMarginContractFactory: CrossMarginAccountFactory | null;
	crossMarginBaseSettings: CrossMarginBaseSettings | null;
} {
	const futuresAccount = useRecoilValue(futuresAccountState);

	const { signer, network } = Connector.useContainer();

	const crossMarginAccountContract = useMemo(() => {
		if (!signer || !futuresAccount?.crossMarginAddress) return null;

		return CrossMarginBase__factory.connect(futuresAccount.crossMarginAddress, signer);
	}, [futuresAccount?.crossMarginAddress, signer]);

	const crossMarginContractFactory = useMemo(() => {
		const address = CROSS_MARGIN_ACCOUNT_FACTORY[network?.id as NetworkId];
		if (!signer || !address) return null;

		return CrossMarginAccountFactory__factory.connect(address, signer);
	}, [network.id, signer]);

	const crossMarginBaseSettings = useMemo(() => {
		const address = CROSS_MARGIN_BASE_SETTINGS[network.id];
		if (!signer || !address) return null;

		return CrossMarginBaseSettings__factory.connect(address, signer);
	}, [network.id, signer]);

	return { crossMarginAccountContract, crossMarginContractFactory, crossMarginBaseSettings };
}

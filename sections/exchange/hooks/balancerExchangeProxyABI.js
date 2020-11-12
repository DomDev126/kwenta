export default [
	{
		inputs: [{ internalType: 'address', name: '_weth', type: 'address' }],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
			{ indexed: true, internalType: 'address', name: 'newOwner', type: 'address' },
		],
		name: 'OwnershipTransferred',
		type: 'event',
	},
	{ payable: true, stateMutability: 'payable', type: 'fallback' },
	{
		constant: false,
		inputs: [
			{
				components: [
					{ internalType: 'address', name: 'pool', type: 'address' },
					{ internalType: 'address', name: 'tokenIn', type: 'address' },
					{ internalType: 'address', name: 'tokenOut', type: 'address' },
					{ internalType: 'uint256', name: 'swapAmount', type: 'uint256' },
					{ internalType: 'uint256', name: 'limitReturnAmount', type: 'uint256' },
					{ internalType: 'uint256', name: 'maxPrice', type: 'uint256' },
				],
				internalType: 'struct ExchangeProxy.Swap[]',
				name: 'swaps',
				type: 'tuple[]',
			},
			{ internalType: 'contract TokenInterface', name: 'tokenIn', type: 'address' },
			{ internalType: 'contract TokenInterface', name: 'tokenOut', type: 'address' },
			{ internalType: 'uint256', name: 'totalAmountIn', type: 'uint256' },
			{ internalType: 'uint256', name: 'minTotalAmountOut', type: 'uint256' },
		],
		name: 'batchSwapExactIn',
		outputs: [{ internalType: 'uint256', name: 'totalAmountOut', type: 'uint256' }],
		payable: true,
		stateMutability: 'payable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				components: [
					{ internalType: 'address', name: 'pool', type: 'address' },
					{ internalType: 'address', name: 'tokenIn', type: 'address' },
					{ internalType: 'address', name: 'tokenOut', type: 'address' },
					{ internalType: 'uint256', name: 'swapAmount', type: 'uint256' },
					{ internalType: 'uint256', name: 'limitReturnAmount', type: 'uint256' },
					{ internalType: 'uint256', name: 'maxPrice', type: 'uint256' },
				],
				internalType: 'struct ExchangeProxy.Swap[]',
				name: 'swaps',
				type: 'tuple[]',
			},
			{ internalType: 'contract TokenInterface', name: 'tokenIn', type: 'address' },
			{ internalType: 'contract TokenInterface', name: 'tokenOut', type: 'address' },
			{ internalType: 'uint256', name: 'maxTotalAmountIn', type: 'uint256' },
		],
		name: 'batchSwapExactOut',
		outputs: [{ internalType: 'uint256', name: 'totalAmountIn', type: 'uint256' }],
		payable: true,
		stateMutability: 'payable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'isOwner',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				components: [
					{ internalType: 'address', name: 'pool', type: 'address' },
					{ internalType: 'address', name: 'tokenIn', type: 'address' },
					{ internalType: 'address', name: 'tokenOut', type: 'address' },
					{ internalType: 'uint256', name: 'swapAmount', type: 'uint256' },
					{ internalType: 'uint256', name: 'limitReturnAmount', type: 'uint256' },
					{ internalType: 'uint256', name: 'maxPrice', type: 'uint256' },
				],
				internalType: 'struct ExchangeProxy.Swap[][]',
				name: 'swapSequences',
				type: 'tuple[][]',
			},
			{ internalType: 'contract TokenInterface', name: 'tokenIn', type: 'address' },
			{ internalType: 'contract TokenInterface', name: 'tokenOut', type: 'address' },
			{ internalType: 'uint256', name: 'totalAmountIn', type: 'uint256' },
			{ internalType: 'uint256', name: 'minTotalAmountOut', type: 'uint256' },
		],
		name: 'multihopBatchSwapExactIn',
		outputs: [{ internalType: 'uint256', name: 'totalAmountOut', type: 'uint256' }],
		payable: true,
		stateMutability: 'payable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				components: [
					{ internalType: 'address', name: 'pool', type: 'address' },
					{ internalType: 'address', name: 'tokenIn', type: 'address' },
					{ internalType: 'address', name: 'tokenOut', type: 'address' },
					{ internalType: 'uint256', name: 'swapAmount', type: 'uint256' },
					{ internalType: 'uint256', name: 'limitReturnAmount', type: 'uint256' },
					{ internalType: 'uint256', name: 'maxPrice', type: 'uint256' },
				],
				internalType: 'struct ExchangeProxy.Swap[][]',
				name: 'swapSequences',
				type: 'tuple[][]',
			},
			{ internalType: 'contract TokenInterface', name: 'tokenIn', type: 'address' },
			{ internalType: 'contract TokenInterface', name: 'tokenOut', type: 'address' },
			{ internalType: 'uint256', name: 'maxTotalAmountIn', type: 'uint256' },
		],
		name: 'multihopBatchSwapExactOut',
		outputs: [{ internalType: 'uint256', name: 'totalAmountIn', type: 'uint256' }],
		payable: true,
		stateMutability: 'payable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'owner',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [],
		name: 'renounceOwnership',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [{ internalType: 'address', name: '_registry', type: 'address' }],
		name: 'setRegistry',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{ internalType: 'contract TokenInterface', name: 'tokenIn', type: 'address' },
			{ internalType: 'contract TokenInterface', name: 'tokenOut', type: 'address' },
			{ internalType: 'uint256', name: 'totalAmountIn', type: 'uint256' },
			{ internalType: 'uint256', name: 'minTotalAmountOut', type: 'uint256' },
			{ internalType: 'uint256', name: 'nPools', type: 'uint256' },
		],
		name: 'smartSwapExactIn',
		outputs: [{ internalType: 'uint256', name: 'totalAmountOut', type: 'uint256' }],
		payable: true,
		stateMutability: 'payable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{ internalType: 'contract TokenInterface', name: 'tokenIn', type: 'address' },
			{ internalType: 'contract TokenInterface', name: 'tokenOut', type: 'address' },
			{ internalType: 'uint256', name: 'totalAmountOut', type: 'uint256' },
			{ internalType: 'uint256', name: 'maxTotalAmountIn', type: 'uint256' },
			{ internalType: 'uint256', name: 'nPools', type: 'uint256' },
		],
		name: 'smartSwapExactOut',
		outputs: [{ internalType: 'uint256', name: 'totalAmountIn', type: 'uint256' }],
		payable: true,
		stateMutability: 'payable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
		name: 'transferOwnership',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{ internalType: 'address', name: 'tokenIn', type: 'address' },
			{ internalType: 'address', name: 'tokenOut', type: 'address' },
			{ internalType: 'uint256', name: 'swapAmount', type: 'uint256' },
			{ internalType: 'uint256', name: 'nPools', type: 'uint256' },
		],
		name: 'viewSplitExactIn',
		outputs: [
			{
				components: [
					{ internalType: 'address', name: 'pool', type: 'address' },
					{ internalType: 'address', name: 'tokenIn', type: 'address' },
					{ internalType: 'address', name: 'tokenOut', type: 'address' },
					{ internalType: 'uint256', name: 'swapAmount', type: 'uint256' },
					{ internalType: 'uint256', name: 'limitReturnAmount', type: 'uint256' },
					{ internalType: 'uint256', name: 'maxPrice', type: 'uint256' },
				],
				internalType: 'struct ExchangeProxy.Swap[]',
				name: 'swaps',
				type: 'tuple[]',
			},
			{ internalType: 'uint256', name: 'totalOutput', type: 'uint256' },
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{ internalType: 'address', name: 'tokenIn', type: 'address' },
			{ internalType: 'address', name: 'tokenOut', type: 'address' },
			{ internalType: 'uint256', name: 'swapAmount', type: 'uint256' },
			{ internalType: 'uint256', name: 'nPools', type: 'uint256' },
		],
		name: 'viewSplitExactOut',
		outputs: [
			{
				components: [
					{ internalType: 'address', name: 'pool', type: 'address' },
					{ internalType: 'address', name: 'tokenIn', type: 'address' },
					{ internalType: 'address', name: 'tokenOut', type: 'address' },
					{ internalType: 'uint256', name: 'swapAmount', type: 'uint256' },
					{ internalType: 'uint256', name: 'limitReturnAmount', type: 'uint256' },
					{ internalType: 'uint256', name: 'maxPrice', type: 'uint256' },
				],
				internalType: 'struct ExchangeProxy.Swap[]',
				name: 'swaps',
				type: 'tuple[]',
			},
			{ internalType: 'uint256', name: 'totalOutput', type: 'uint256' },
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
];

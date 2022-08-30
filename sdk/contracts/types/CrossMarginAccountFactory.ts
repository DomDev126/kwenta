/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface CrossMarginAccountFactoryInterface extends utils.Interface {
  functions: {
    "addressResolver()": FunctionFragment;
    "implementation()": FunctionFragment;
    "marginAsset()": FunctionFragment;
    "marginBaseSettings()": FunctionFragment;
    "newAccount()": FunctionFragment;
    "ops()": FunctionFragment;
    "version()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addressResolver"
      | "implementation"
      | "marginAsset"
      | "marginBaseSettings"
      | "newAccount"
      | "ops"
      | "version"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addressResolver",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "implementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "marginAsset",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "marginBaseSettings",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "newAccount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "ops", values?: undefined): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "addressResolver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "implementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "marginAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "marginBaseSettings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "newAccount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ops", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {
    "NewAccount(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewAccount"): EventFragment;
}

export interface NewAccountEventObject {
  owner: string;
  account: string;
}
export type NewAccountEvent = TypedEvent<
  [string, string],
  NewAccountEventObject
>;

export type NewAccountEventFilter = TypedEventFilter<NewAccountEvent>;

export interface CrossMarginAccountFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CrossMarginAccountFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addressResolver(overrides?: CallOverrides): Promise<[string]>;

    implementation(overrides?: CallOverrides): Promise<[string]>;

    marginAsset(overrides?: CallOverrides): Promise<[string]>;

    marginBaseSettings(overrides?: CallOverrides): Promise<[string]>;

    newAccount(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    ops(overrides?: CallOverrides): Promise<[string]>;

    version(overrides?: CallOverrides): Promise<[string]>;
  };

  addressResolver(overrides?: CallOverrides): Promise<string>;

  implementation(overrides?: CallOverrides): Promise<string>;

  marginAsset(overrides?: CallOverrides): Promise<string>;

  marginBaseSettings(overrides?: CallOverrides): Promise<string>;

  newAccount(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  ops(overrides?: CallOverrides): Promise<string>;

  version(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    addressResolver(overrides?: CallOverrides): Promise<string>;

    implementation(overrides?: CallOverrides): Promise<string>;

    marginAsset(overrides?: CallOverrides): Promise<string>;

    marginBaseSettings(overrides?: CallOverrides): Promise<string>;

    newAccount(overrides?: CallOverrides): Promise<string>;

    ops(overrides?: CallOverrides): Promise<string>;

    version(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "NewAccount(address,address)"(
      owner?: PromiseOrValue<string> | null,
      account?: null
    ): NewAccountEventFilter;
    NewAccount(
      owner?: PromiseOrValue<string> | null,
      account?: null
    ): NewAccountEventFilter;
  };

  estimateGas: {
    addressResolver(overrides?: CallOverrides): Promise<BigNumber>;

    implementation(overrides?: CallOverrides): Promise<BigNumber>;

    marginAsset(overrides?: CallOverrides): Promise<BigNumber>;

    marginBaseSettings(overrides?: CallOverrides): Promise<BigNumber>;

    newAccount(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    ops(overrides?: CallOverrides): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addressResolver(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    marginAsset(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    marginBaseSettings(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    newAccount(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    ops(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
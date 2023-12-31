/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export declare namespace RockPaperScissors {
  export type CompetitionStruct = {
    Id: string;
    Host: AddressLike;
    Deposit: BigNumberish;
    ForceClosableTimeStamp: BigNumberish;
    HostHandHash: BytesLike;
    HostHand: BigNumberish;
    Opponent: AddressLike;
    OpponentHand: BigNumberish;
    Winner: AddressLike;
    Status: BigNumberish;
  };

  export type CompetitionStructOutput = [
    Id: string,
    Host: string,
    Deposit: bigint,
    ForceClosableTimeStamp: bigint,
    HostHandHash: string,
    HostHand: bigint,
    Opponent: string,
    OpponentHand: bigint,
    Winner: string,
    Status: bigint
  ] & {
    Id: string;
    Host: string;
    Deposit: bigint;
    ForceClosableTimeStamp: bigint;
    HostHandHash: string;
    HostHand: bigint;
    Opponent: string;
    OpponentHand: bigint;
    Winner: string;
    Status: bigint;
  };
}

export interface RockPaperScissorsAbiInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "close"
      | "competitionMap"
      | "competitionUUIDs"
      | "create"
      | "entry"
      | "forceClose"
      | "forceCloseInterval"
      | "getCompetitions"
      | "judge"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Close"
      | "Create"
      | "Entry"
      | "ForceClose"
      | "Judge"
  ): EventFragment;

  encodeFunctionData(functionFragment: "close", values: [string]): string;
  encodeFunctionData(
    functionFragment: "competitionMap",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "competitionUUIDs",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "create",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "entry",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "forceClose", values: [string]): string;
  encodeFunctionData(
    functionFragment: "forceCloseInterval",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCompetitions",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "judge",
    values: [string, BigNumberish, string]
  ): string;

  decodeFunctionResult(functionFragment: "close", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "competitionMap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "competitionUUIDs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "create", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "entry", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "forceClose", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "forceCloseInterval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCompetitions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "judge", data: BytesLike): Result;
}

export namespace CloseEvent {
  export type InputTuple = [id: string];
  export type OutputTuple = [id: string];
  export interface OutputObject {
    id: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace CreateEvent {
  export type InputTuple = [id: string, deposit: BigNumberish];
  export type OutputTuple = [id: string, deposit: bigint];
  export interface OutputObject {
    id: string;
    deposit: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace EntryEvent {
  export type InputTuple = [
    id: string,
    host: AddressLike,
    opponent: AddressLike
  ];
  export type OutputTuple = [id: string, host: string, opponent: string];
  export interface OutputObject {
    id: string;
    host: string;
    opponent: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ForceCloseEvent {
  export type InputTuple = [id: string];
  export type OutputTuple = [id: string];
  export interface OutputObject {
    id: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace JudgeEvent {
  export type InputTuple = [
    id: string,
    winner: AddressLike,
    hostHand: BigNumberish,
    opponentHand: BigNumberish
  ];
  export type OutputTuple = [
    id: string,
    winner: string,
    hostHand: bigint,
    opponentHand: bigint
  ];
  export interface OutputObject {
    id: string;
    winner: string;
    hostHand: bigint;
    opponentHand: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface RockPaperScissorsAbi extends BaseContract {
  connect(runner?: ContractRunner | null): RockPaperScissorsAbi;
  waitForDeployment(): Promise<this>;

  interface: RockPaperScissorsAbiInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  close: TypedContractMethod<[id: string], [void], "nonpayable">;

  competitionMap: TypedContractMethod<
    [arg0: string],
    [
      [
        string,
        string,
        bigint,
        bigint,
        string,
        bigint,
        string,
        bigint,
        string,
        bigint
      ] & {
        Id: string;
        Host: string;
        Deposit: bigint;
        ForceClosableTimeStamp: bigint;
        HostHandHash: string;
        HostHand: bigint;
        Opponent: string;
        OpponentHand: bigint;
        Winner: string;
        Status: bigint;
      }
    ],
    "view"
  >;

  competitionUUIDs: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  create: TypedContractMethod<
    [id: string, hostHandHash: BytesLike],
    [void],
    "payable"
  >;

  entry: TypedContractMethod<
    [id: string, opponentHand: BigNumberish],
    [void],
    "payable"
  >;

  forceClose: TypedContractMethod<[id: string], [void], "nonpayable">;

  forceCloseInterval: TypedContractMethod<[], [bigint], "view">;

  getCompetitions: TypedContractMethod<
    [page: BigNumberish, size: BigNumberish],
    [RockPaperScissors.CompetitionStructOutput[]],
    "view"
  >;

  judge: TypedContractMethod<
    [id: string, hostHand: BigNumberish, secret: string],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "close"
  ): TypedContractMethod<[id: string], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "competitionMap"
  ): TypedContractMethod<
    [arg0: string],
    [
      [
        string,
        string,
        bigint,
        bigint,
        string,
        bigint,
        string,
        bigint,
        string,
        bigint
      ] & {
        Id: string;
        Host: string;
        Deposit: bigint;
        ForceClosableTimeStamp: bigint;
        HostHandHash: string;
        HostHand: bigint;
        Opponent: string;
        OpponentHand: bigint;
        Winner: string;
        Status: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "competitionUUIDs"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "create"
  ): TypedContractMethod<
    [id: string, hostHandHash: BytesLike],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "entry"
  ): TypedContractMethod<
    [id: string, opponentHand: BigNumberish],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "forceClose"
  ): TypedContractMethod<[id: string], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "forceCloseInterval"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getCompetitions"
  ): TypedContractMethod<
    [page: BigNumberish, size: BigNumberish],
    [RockPaperScissors.CompetitionStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "judge"
  ): TypedContractMethod<
    [id: string, hostHand: BigNumberish, secret: string],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "Close"
  ): TypedContractEvent<
    CloseEvent.InputTuple,
    CloseEvent.OutputTuple,
    CloseEvent.OutputObject
  >;
  getEvent(
    key: "Create"
  ): TypedContractEvent<
    CreateEvent.InputTuple,
    CreateEvent.OutputTuple,
    CreateEvent.OutputObject
  >;
  getEvent(
    key: "Entry"
  ): TypedContractEvent<
    EntryEvent.InputTuple,
    EntryEvent.OutputTuple,
    EntryEvent.OutputObject
  >;
  getEvent(
    key: "ForceClose"
  ): TypedContractEvent<
    ForceCloseEvent.InputTuple,
    ForceCloseEvent.OutputTuple,
    ForceCloseEvent.OutputObject
  >;
  getEvent(
    key: "Judge"
  ): TypedContractEvent<
    JudgeEvent.InputTuple,
    JudgeEvent.OutputTuple,
    JudgeEvent.OutputObject
  >;

  filters: {
    "Close(string)": TypedContractEvent<
      CloseEvent.InputTuple,
      CloseEvent.OutputTuple,
      CloseEvent.OutputObject
    >;
    Close: TypedContractEvent<
      CloseEvent.InputTuple,
      CloseEvent.OutputTuple,
      CloseEvent.OutputObject
    >;

    "Create(string,uint256)": TypedContractEvent<
      CreateEvent.InputTuple,
      CreateEvent.OutputTuple,
      CreateEvent.OutputObject
    >;
    Create: TypedContractEvent<
      CreateEvent.InputTuple,
      CreateEvent.OutputTuple,
      CreateEvent.OutputObject
    >;

    "Entry(string,address,address)": TypedContractEvent<
      EntryEvent.InputTuple,
      EntryEvent.OutputTuple,
      EntryEvent.OutputObject
    >;
    Entry: TypedContractEvent<
      EntryEvent.InputTuple,
      EntryEvent.OutputTuple,
      EntryEvent.OutputObject
    >;

    "ForceClose(string)": TypedContractEvent<
      ForceCloseEvent.InputTuple,
      ForceCloseEvent.OutputTuple,
      ForceCloseEvent.OutputObject
    >;
    ForceClose: TypedContractEvent<
      ForceCloseEvent.InputTuple,
      ForceCloseEvent.OutputTuple,
      ForceCloseEvent.OutputObject
    >;

    "Judge(string,address,uint8,uint8)": TypedContractEvent<
      JudgeEvent.InputTuple,
      JudgeEvent.OutputTuple,
      JudgeEvent.OutputObject
    >;
    Judge: TypedContractEvent<
      JudgeEvent.InputTuple,
      JudgeEvent.OutputTuple,
      JudgeEvent.OutputObject
    >;
  };
}

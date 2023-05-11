import { MultichainTransfer } from '../generated/schema';
import { LogAnySwapIn as LogAnySwapInEvent } from "../generated/MultichainRouter/MultichainRouter";

// filter events by wallet address
const wallets = ['0x6d569eA24622540a63D589C10d5Ba899f8731409'].map(
  function toLowerCase(a: string, index: i32, array: string[]): string {
    return a.toLowerCase()
  })

export function handleMultichainTransfer(event: LogAnySwapInEvent): void {
  const receiver = event.params.to.toHexString().toLowerCase()

  if (wallets.includes(receiver)) {

    let entity = new MultichainTransfer(event.transaction.hash.toHex() + "-" + event.logIndex.toString());

    entity.srcTransactionHash = event.params.txhash;
    entity.anyToken = event.params.token;
    entity.to = event.params.to;
    entity.amount = event.params.amount;
    entity.fromChainId = event.params.fromChainID;
    entity.toChainId = event.params.toChainID;

    entity.txHash = event.transaction.hash;
    entity.txGasPrice = event.transaction.gasPrice;
    entity.txGasUsed = event.transaction.gasLimit;
    entity.blockHash = event.block.hash;
    entity.blockNumber = event.block.number;
    entity.timestamp = event.block.timestamp;

    entity.save();
  }
}
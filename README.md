## Deployment

# Supported networks: 
1. [Matic](https://thegraph.com/hosted-service/subgraph/danylocodecare/v1-polygon-bitoftrade-css)
2. [BSC](https://thegraph.com/hosted-service/subgraph/danylocodecare/v1-bsc-bitoftrade-css)

```bash
   yarn \ 
   && yarn build --network <supported_network> \ 
   && yarn deploy --product hosted-service <thegraph_username>/<thegraph_service_name>
```

# Supported events: 

### FirstTxExecutor:

```bash
   AdminUpdated(indexed address,indexed address)
   CCSmartWalletAddressUpdated(address,address)
   FirstPartOfSwapExecuted(uint256,address,uint256,address,uint256)
```

### CCSmartWallet:
```bash
   CCSmartWalletAdminUpdated(address,address)
   ArbitraryTxWasSent(address,bytes)
   Deposit(indexed address,uint256)
   MarketMakerUpdated(address,address)
   ResponseTxWasSent(uint256,bytes32)
   SignerUpdated(indexed address,indexed address)
```
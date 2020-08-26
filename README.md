# virus_status

## Tasks
- [x] Smart Contract implementation
- [x] Smart Contract unit tests (screenshot in diff folder)

## Useful links
- https://docs.matic.network/docs/develop/getting-started (general info to start with);
- https://docs.matic.network/docs/develop/remix/ (go to Remix IDE, install MetaMask, get free ETH with faucet, deploy to Matic Network, interact with Smart Contract);
- https://mumbai-explorer.matic.today/ (Matic Blockchain explorer, where you can trach contract transactions).

## Communication with Smart Contract
- only address that deployed Smart Contract to Blockchain can set statuses;
- any address can read status;
- check current status before setting status - this will slightly improve your spendings for transaction fees. It will matter if you would like to switch to production network in future.

## Developer
- run `npm i` if you would like to run code / unit tests on your machine;
- for Smart Contract deployment you want to copy all code in **VirusStatusContract.sol** and paste it in Remix or other tool.

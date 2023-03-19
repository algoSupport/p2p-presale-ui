import { ACCEPTED_TOKENS_RECORDS, CIL_TOKEN_RECORDS } from './tokens';
import { PROVIDER_RECORDS, EXPLORER_RECORDS, NETWORK } from './common/config';
import {
  PRESALE_ADDRESS_RECORDS,
  PRESALE_WHITELIST_RECORDS,
  HARD_CAP,
} from './presale';
import {
  AIRDROP_CONTRACT_ADDRESS_RECORDS,
  AIRDROP_WHITELIST_RECORDS,
} from './airdrop';
import { SUBGRAPH_ENDPOINTS } from './subgraph';

export const ACCEPTED_TOKENS = ACCEPTED_TOKENS_RECORDS[NETWORK];
export const CIL_TOKEN = CIL_TOKEN_RECORDS[NETWORK];
export const PROVIDER = PROVIDER_RECORDS[NETWORK];
export const EXPLORER = EXPLORER_RECORDS[NETWORK];
export const AIRDROP_CONTRACT_ADDRESS =
  AIRDROP_CONTRACT_ADDRESS_RECORDS[NETWORK];
export const AIRDROP_WHITELIST = AIRDROP_WHITELIST_RECORDS[NETWORK];
export const PRESALE_WHITELIST = PRESALE_WHITELIST_RECORDS[NETWORK];
export const PRESALE_CONTRACT_ADDRESS = PRESALE_ADDRESS_RECORDS[NETWORK];
export const SUBGRAPH_ENDPOINT = SUBGRAPH_ENDPOINTS[NETWORK];

export const ADAY = 24 * 60 * 60;
export { HARD_CAP, NETWORK };

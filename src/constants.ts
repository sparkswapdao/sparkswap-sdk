import { Pulse, Token } from '@pulsex/sdk-core'
import JSBI from 'jsbi'

export const FACTORY_ADDRESS = '0xEE31dc699ff37940E657F2C07A7D331Eba54A6d2'

export const WETH = { 369: new Token(369, '0xa1077a294dde1b09bb078844df40758a5d0f9a27', 18, 'WPLS', 'Wrapped Pulse') }

export const ETHER = { ...Pulse.onChain(369), wrapped: WETH[369], chainId: 369, equals: Pulse.onChain(369).equals } as Pulse

export const INIT_CODE_HASH = '0x1d13db667562dd8d6e75796dcb1b654dd4aa9b64eb8152e2efae0fa4410fcc71'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)

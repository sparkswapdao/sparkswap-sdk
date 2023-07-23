import { Pulse, Token } from '@pulsex/sdk-core'
import JSBI from 'jsbi'

export const FACTORY_ADDRESS = '0x29ea7545def87022badc76323f373ea1e707c523'

export const WETH = { 369: new Token(369, '0xa1077a294dde1b09bb078844df40758a5d0f9a27', 18, 'WPLS', 'Wrapped Pulse') }

export const ETHER = { ...Pulse.onChain(369), wrapped: WETH[369], chainId: 369, equals: Pulse.onChain(369).equals } as Pulse

export const INIT_CODE_HASH = '0x5dff1ac2d132f5ac2841294c6e9fc0ebafae8d447fac7996ef21c21112f411f1'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

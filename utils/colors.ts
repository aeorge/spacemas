import { TeamColor } from '../types'

export const textColor: Record<TeamColor, string> = {
  [TeamColor.RED]: 'text-red-400',
  [TeamColor.BLUE]: 'text-blue-400',
  [TeamColor.GREEN]: 'text-green-400',
  [TeamColor.YELLOW]: 'text-yellow-400',
  [TeamColor.PURPLE]: 'text-violet-400'
}

export const borderColor: Record<TeamColor, string> = {
  [TeamColor.RED]: 'border-red-400',
  [TeamColor.BLUE]: 'border-blue-400',
  [TeamColor.GREEN]: 'border-green-400',
  [TeamColor.YELLOW]: 'border-yellow-400',
  [TeamColor.PURPLE]: 'border-violet-400'
}

export const backgroundColor: Record<TeamColor, string> = {
  [TeamColor.RED]: 'bg-red-600',
  [TeamColor.BLUE]: 'bg-blue-600',
  [TeamColor.GREEN]: 'bg-green-600',
  [TeamColor.YELLOW]: 'bg-yellow-600',
  [TeamColor.PURPLE]: 'bg-violet-600'
}

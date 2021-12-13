export type Team = {
  name: string
  color: TeamColor
  points: number
  members: TeamMember[]
}

export enum TeamColor {
  RED = 'red',
  BLUE = 'blue',
  GREEN = 'green',
  YELLOW = 'yellow',
  PURPLE = 'purple'
}

export type TeamMember = {
  url: string
}

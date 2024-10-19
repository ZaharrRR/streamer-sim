interface Player {
  name: string
  avaImg: string
  money: number
  skillPoint: {
    value: number
    max: number
  }
}

export type { Player }

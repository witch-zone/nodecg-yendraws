export const shuffle = <T>(arr: T[]) => [...arr].sort(() => 0.5 - Math.random())

export const pickItem = <T>(arr: T[], idx: number) => {
  const newArray = [...arr]
  newArray.splice(idx, 1)

  return [arr[idx], newArray] as const
}

export const randomIndex = <T>(arr: T[]) =>
  Math.floor(Math.random() * arr.length)

export const randomItem = <T>(arr: T[]) => arr[randomIndex(arr)]

export const pickRandomItem = <T>(arr: T[]) => {
  const idx = randomIndex(arr)
  const newArray = [...arr]
  newArray.splice(idx, 1)

  return [arr[idx], newArray] as const
}

export const createRandomArrayPicker = <T>(arr: T[]) => {
  let lastItem: T
  let remainingItems = shuffle(arr)

  function* arrayGenerator() {
    while (true) {
      let nextItem: T
      let nextRemainingItems: T[]

      do {
        ;[nextItem, nextRemainingItems] = pickRandomItem(remainingItems)
      } while (nextItem === lastItem)

      console.log(nextItem, nextRemainingItems)

      yield nextItem

      remainingItems =
        nextRemainingItems.length > 0 ? nextRemainingItems : shuffle(arr)
      lastItem = nextItem
    }
  }

  return arrayGenerator()
}

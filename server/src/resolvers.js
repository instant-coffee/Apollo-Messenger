const channels = [
  {
    id: 1,
   name: 'Coffee',
  }, 
  {
    id: 2,
    name: 'Tea',
  }
]

export const resolvers = {
  Query: {
    channels: () => {
      return channels
    }
  }
}

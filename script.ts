import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {
  // ... you will write your Prisma Client queries here

  // show all users
  const allUsers = await prisma.db_test.findMany()
  allUsers.forEach(user => console.log(user.name))

  // add user
  // const arrayString = []
  // for (let i = 0; i < 20; i++) {
  //   const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  //   arrayString.push(randomString)
  // }

  // arrayString.forEach(async (string) => {
  //   const usr = await prisma.db_test.create({
  //     data: {
  //       name: string
  //     }
  //   })
  //   console.log(usr);
    
  // }
  // )
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

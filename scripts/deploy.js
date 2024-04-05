async function main() {
  const [deployer] = await ethers.getSigners()

  console.log('Deploying contracts with the account:', deployer.address)

  const Cryptonite = await ethers.getContractFactory('Cryptonite')
  Cryptonite.deploy().then((cryptonite) => {
    console.log('Cryptonite contract deployed to:', cryptonite.address)
  })
  // const Cryptonite = await ethers.getContractFactory('Cryptonite')
  // const cryptonite = await Cryptonite.deploy()

  // console.log('Cryptonite contract deployed to:', cryptonite.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

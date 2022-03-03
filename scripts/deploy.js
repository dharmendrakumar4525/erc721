async function main() {
    const MYNFT = await ethers.getContractFactory('MYNFT');
    const my = await MYNFT.deploy();
    console.log("Contract deployed to address:", my.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

    //0xA083d50e052614c0Ce22625924b2b7b1e38D639F
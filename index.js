const sharp = require("sharp");
const path = require("path");
const { assert } = require("console");
const tejas = path.join(__dirname, 'tejas.jpg')
const tejas_resized = path.join(__dirname, 'tejas-resized.png')

async function getMetadata() {
  try {
    const metadata = await sharp(tejas_resized).metadata();
    console.log(metadata);
  } catch (error) {
    console.log(`An error occurred during processing: ${error}`);
  }
}

async function imageDimentionAdjustMent(){
    try{

        await sharp(tejas)
      .resize({
        width: 784,
        height: 1124
      })
      .toFile("tejas-resized.png");

    }
    catch (error) {
        console.log(`An error occurred during processing: ${error}`);
    }
}

getMetadata();
// imageDimentionAdjustMent()



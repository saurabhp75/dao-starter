import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x139bFD345Bb57C2700f07DccA444850Fd8d8e9c9",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Gaming world Headband",
        description: "This NFT will give you access to GaminDAO!",
        image: readFileSync("scripts/assets/headband.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()
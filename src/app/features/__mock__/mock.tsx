import P_EOBJ002 from "@/app/models/P-EOBJ002/P_EOBJ002";
import React from "react";

export default function mock() {
  console.log("Started mock");

  const player = new P_EOBJ002("0001", 100, "Banana", {
    xCoordinate: 0,
    yCoordinate: 0,
  });

  player.action(null);
  player.dialogue(null);
  player.checkBOBJ(null);
  player.gather(null);
  player.talk(null);
  player.upgrade(null);

  return <div>mock</div>;
}

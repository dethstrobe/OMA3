import { GearDrones } from "@/types/Resources"

export const drones: GearDrones[] = [
  {
    vehicle: {
      handling: "3/6",
      acceleration: 5,
      speedInterval: 5,
      topSpeed: 25,
      body: 0,
      armor: 0,
      pilot: 1,
      sensor: 1,
    },
    availability: "2",
    cost: 450,
    name: "GMC Micromachine",
    type: "Drone Micro",
    subtype: "Ground",
  },
  {
    vehicle: {
      handling: "2/3",
      acceleration: 4,
      speedInterval: 5,
      topSpeed: 15,
      body: 0,
      armor: 0,
      pilot: 3,
      sensor: 2,
    },
    availability: "2",
    cost: 900,
    name: "Shiawase Kanmushi",
    type: "Drone Micro",
    subtype: "Ground",
  },
  {
    vehicle: {
      handling: "2",
      acceleration: 6,
      speedInterval: 10,
      topSpeed: 35,
      body: 0,
      armor: 0,
      pilot: 2,
      sensor: 1,
    },
    availability: "2",
    cost: 850,
    name: "MCT-Sikorsky-Bell Microskimmer XXS",
    type: "Drone Micro",
    subtype: "Air",
  },
  {
    vehicle: {
      handling: "3",
      acceleration: 4,
      speedInterval: 10,
      topSpeed: 30,
      body: 0,
      armor: 0,
      pilot: 2,
      sensor: 1,
    },
    availability: "2",
    cost: 800,
    name: "MCT Gnat",
    type: "Drone Micro",
    subtype: "Air",
  },
  {
    vehicle: {
      handling: "2/4",
      acceleration: 8,
      speedInterval: 15,
      topSpeed: 50,
      body: 1,
      armor: 0,
      pilot: 2,
      sensor: 1,
    },
    availability: "2",
    cost: 1000,
    name: "GM-Nissan Flip Flop",
    type: "Drone Mini",
    subtype: "Ground",
  },
  {
    vehicle: {
      handling: "2/3",
      acceleration: 6,
      speedInterval: 8,
      topSpeed: 24,
      body: 1,
      armor: 0,
      pilot: 2,
      sensor: 2,
    },
    availability: "2",
    cost: 1100,
    name: "Shiawase Inu",
    type: "Drone Mini",
    subtype: "Ground",
  },
  {
    vehicle: {
      handling: "2/3",
      acceleration: 6,
      speedInterval: 8,
      topSpeed: 24,
      body: 1,
      armor: 0,
      pilot: 2,
      sensor: 2,
    },
    availability: "2",
    cost: 1600,
    name: "Shiawase Inu Better Suit",
    type: "Drone Mini",
    subtype: "Ground",
  },
  {
    vehicle: {
      handling: "3",
      acceleration: 15,
      speedInterval: 15,
      topSpeed: 40,
      body: 1,
      armor: 0,
      pilot: 2,
      sensor: 2,
    },
    availability: "2",
    cost: 2000,
    name: "Horizon Flying Eye",
    type: "Drone Mini",
    subtype: "Air",
  },
  {
    vehicle: {
      handling: "3",
      acceleration: 15,
      speedInterval: 15,
      topSpeed: 40,
      body: 1,
      armor: 0,
      pilot: 2,
      sensor: 2,
    },
    availability: "2",
    cost: 2500,
    name: "Horizon Flying Eye Extra",
    type: "Drone Mini",
    subtype: "Air",
  },
  {
    vehicle: {
      handling: "3",
      acceleration: 20,
      speedInterval: 15,
      topSpeed: 35,
      body: 1,
      armor: 0,
      pilot: 2,
      sensor: 2,
    },
    availability: "2",
    cost: 2100,
    name: "MCT Hornet",
    type: "Drone Mini",
    subtype: "Air",
  },
  {
    vehicle: {
      handling: "3/6",
      acceleration: 30,
      speedInterval: 50,
      topSpeed: 280,
      body: 4,
      armor: 2,
      pilot: 4,
      sensor: 3,
    },
    availability: "3",
    cost: 11000,
    name: "Chrysler-Nissan Pursuit V",
    type: "Drone Small",
    subtype: "Ground",
  },
  {
    vehicle: {
      handling: "3/4",
      acceleration: 8,
      speedInterval: 10,
      topSpeed: 30,
      body: 6,
      armor: 2,
      pilot: 2,
      sensor: 2,
    },
    availability: "2",
    cost: 4500,
    name: "Aztechnology Crawler",
    type: "Drone Small",
    subtype: "Ground",
  },
  {
    vehicle: {
      handling: "2",
      acceleration: 15,
      speedInterval: 20,
      topSpeed: 120,
      body: 3,
      armor: 1,
      pilot: 3,
      sensor: 2,
    },
    modifications: {
      itemattrmod: {
        Attr: "CAPACITY",
        Slot: "VEHICLEBODY",
        Val: 0,
      },
    },
    availability: "2",
    cost: 5000,
    name: "Cyberspace Designs Quadrotor",
    type: "Drone Small",
    subtype: "Air",
  },
  {
    vehicle: {
      handling: "4",
      acceleration: 15,
      speedInterval: 30,
      topSpeed: 140,
      body: 2,
      armor: 4,
      pilot: 4,
      sensor: 4,
    },
    availability: "3",
    cost: 18000,
    name: "Lockheed Optic X2",
    type: "Drone Small",
    subtype: "Air",
  },
  {
    vehicle: {
      handling: "3/5",
      acceleration: 10,
      speedInterval: 15,
      topSpeed: 100,
      body: 4,
      armor: 6,
      pilot: 2,
      sensor: 3,
    },
    modifications: {
      accessorymod: {
        Item: "Weapon Mount Standard",
        Hook: "VEHICLEBODY",
      },
    },
    availability: "2",
    cost: 6500,
    name: "GM-Nissan Dobermann",
    type: "Drone Medium",
    subtype: "Ground",
  },
  {
    vehicle: {
      handling: "3/4",
      acceleration: 10,
      speedInterval: 10,
      topSpeed: 30,
      body: 6,
      armor: 6,
      pilot: 3,
      sensor: 2,
    },
    availability: "2",
    cost: 4500,
    name: "Nissan Samurai",
    type: "Drone Medium",
    subtype: "Anthro",
  },
  {
    vehicle: {
      handling: "3",
      acceleration: 20,
      speedInterval: 30,
      topSpeed: 160,
      body: 5,
      armor: 6,
      pilot: 3,
      sensor: 2,
    },
    modifications: {
      itemattrmod: {
        Attr: "CAPACITY",
        Val: 1,
        Slot: "VEHICLEBODY",
      },
    },
    availability: "2",
    cost: 5000,
    name: "MCT-Nissan Roto Drone",
    type: "Drone Medium",
    subtype: "Air",
  },
  {
    vehicle: {
      handling: "3",
      acceleration: 35,
      speedInterval: 40,
      topSpeed: 200,
      body: 8,
      armor: 6,
      pilot: 3,
      sensor: 3,
    },
    availability: "3",
    cost: 8000,
    name: "Federated-Boeing Blackhawk",
    type: "Drone Medium",
    subtype: "Air",
  },
  {
    vehicle: {
      handling: "3/5",
      acceleration: 15,
      speedInterval: 15,
      topSpeed: 80,
      body: 12,
      armor: 16,
      pilot: 4,
      sensor: 4,
    },
    availability: "4",
    cost: 25000,
    name: "Steel Lynx Combat Drone",
    type: "Drone Large",
    subtype: "Ground",
  },
  {
    vehicle: {
      handling: "3/4",
      acceleration: 6,
      speedInterval: 5,
      topSpeed: 30,
      body: 8,
      armor: 6,
      pilot: 2,
      sensor: 1,
    },
    availability: "3",
    cost: 10000,
    name: "Ares Packmule",
    type: "Drone Large",
    subtype: "Ground",
  },
  {
    vehicle: {
      handling: "3",
      acceleration: 13,
      speedInterval: 20,
      topSpeed: 130,
      body: 6,
      armor: 4,
      pilot: 3,
      sensor: 3,
    },
    availability: "3",
    cost: 10000,
    name: "Cyberspace Designs Dalmatian",
    type: "Drone Large",
    subtype: "Air",
  },
  {
    vehicle: {
      handling: "2",
      acceleration: 25,
      speedInterval: 50,
      topSpeed: 300,
      body: 8,
      armor: 10,
      pilot: 4,
      sensor: 4,
    },
    availability: "5",
    cost: 43000,
    name: "Ares Black Sky",
    type: "Drone Large",
    subtype: "Air",
  },
  {
    vehicle: {
      handling: "3/4",
      acceleration: 10,
      speedInterval: 8,
      topSpeed: 30,
      body: 9,
      armor: 10,
      pilot: 3,
      sensor: 2,
    },
    modifications: {},
    availability: "2",
    cost: 6700,
    name: "Nissan Oni",
    type: "Drone Large",
    subtype: "Anthro",
  },
]
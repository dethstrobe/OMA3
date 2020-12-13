import { initRunnerAttributes, Runner } from "../types/runner"

export const mockedRunners: Runner[] = [
  {
    id: 1,
    name: "Bull",
    description: "The best ork decker you never met.",
  },
  {
    id: 2,
    name: "Man-of-many-names",
    description: "Not knowns by any other name",
    priority: {
      metatype: "E",
      skills: "C",
      attributes: "B",
      "mag/res": "A",
    },
    metatype: "Human",
    attributes: {
      Body: { adjustment: 0, points: 0 },
      Agility: { adjustment: 0, points: 0 },
      Reaction: { adjustment: 0, points: 0 },
      Strength: { adjustment: 0, points: 0 },
      Willpower: { adjustment: 0, points: 0 },
      Logic: { adjustment: 0, points: 1 },
      Intuition: { adjustment: 0, points: 5 },
      Charisma: { adjustment: 0, points: 0 },
      Edge: { adjustment: 0, points: 0 },
      Magic: { adjustment: 0, points: 0 },
      Resonance: { adjustment: 0, points: 0 },
    },
    skills: {
      Conjuring: {
        rating: 6,
        attribute: {
          primary: "Magic",
        },
        specialization: "Banishing",
      },
      Sorcery: {
        rating: 5,
        attribute: {
          primary: "Magic",
        },
      },
      Perception: {
        rating: 4,
        attribute: {
          primary: "Intuition",
          secondary: "Logic",
        },
      },
    },
  },
  {
    id: 3,
    name: "FastJack",
    description:
      "He was born in the 1990's and now has an AI living in his brain.",
    priority: {
      metatype: "D",
      attributes: "C",
      skills: "B",
      "mag/res": "E",
      resources: "A",
    },
  },
  {
    id: 4,
    name: "/dev/grrl",
    description:
      "Elvin decker from Boston. Hacker her way on to JackPoint at 16 and enter the shadows.",
    priority: {
      metatype: "D",
    },
    metatype: "Elf",
    attributes: initRunnerAttributes,
  },
  {
    id: 5,
    name: "Winterhawk",
    description:
      "Alexander King, also known as the Shadowrunner Winterhawk is an English human male hermetic mage. He is known for his academic work in thaumaturgy.",
    priority: {
      metatype: "D",
      skills: "B",
      attributes: "C",
      "mag/res": "A",
      resources: "E",
    },
    attributes: initRunnerAttributes,
    magres: "Full",
    spells: {
      Combat: [
        {
          name: "Manabolt",
          category: "Combat",
          range: "Line of sight",
          type: "Mana",
          duration: "Instantaneous",
          drain: 4,
          damage: "Physical",
          spellfeature: [
            {
              ref: "Direct",
            },
          ],
        },
        {
          name: "Fireball",
          category: "Combat",
          range: "Line of sight area",
          type: "Physical",
          duration: "Instantaneous",
          drain: 6,
          damage: "Physical special",
          spellfeature: [
            {
              ref: "Indirect",
            },
            {
              ref: "Area",
            },
          ],
        },
        {
          name: "Stunball",
          category: "Combat",
          range: "Line of sight area",
          type: "Mana",
          duration: "Instantaneous",
          drain: 4,
          damage: "Stun",
          spellfeature: [
            {
              ref: "Direct",
            },
            {
              ref: "Area",
            },
          ],
        },
      ],
      Health: [
        {
          name: "Heal",
          category: "Health",
          range: "Touch",
          type: "Physical",
          duration: "Permanent",
          drain: 3,
        },
      ],
      Manipulation: [
        {
          name: "Armor",
          category: "Manipulation",
          range: "Touch",
          type: "Physical",
          duration: "Sustained",
          drain: 4,
        },
        {
          name: "Levitate",
          category: "Manipulation",
          range: "Line of sight",
          type: "Physical",
          duration: "Sustained",
          drain: 6,
        },
        {
          name: "Mana barrier",
          category: "Manipulation",
          range: "Line of sight area",
          type: "Mana",
          duration: "Sustained",
          drain: 5,
        },
        {
          name: "Physical barrier",
          category: "Manipulation",
          range: "Line of sight area",
          type: "Physical",
          duration: "Sustained",
          drain: 6,
        },
      ],
    },
  },
  {
    id: 6,
    name: "Elijah",
    description:
      "He studied thaumaturgy and then became a freelance arcano-archaeologist",
    priority: { metatype: "E", "mag/res": "A" },
  },
  {
    id: 7,
    name: "Frosty",
    description: "Immortal elf runner",
    priority: {
      metatype: "D",
      skills: "B",
      attributes: "C",
      "mag/res": "A",
      resources: "E",
    },
    attributes: initRunnerAttributes,
    magres: "Full",
    rituals: [
      {
        name: "Ward",
        threshold: 6,
        ritualfeature: [
          {
            ref: "anchored",
          },
        ],
      },
      {
        name: "Circle of protection",
        threshold: 6,
        ritualfeature: [
          {
            ref: "anchored",
          },
        ],
      },
      {
        name: "Curse",
        threshold: 5,
        ritualfeature: [
          {
            ref: "material link",
          },
          {
            ref: "spell",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    name: "Ma'Fan",
    description:
      "Yuan Lai (aka Ma'Fan) is a Chinese international cat burglar and shadowrunner. She is a member of Jackpoint. She is awakened; being a physical adept. She suffers from gremlins and doesn't often use technology.",
    priority: {
      metatype: "D",
      skills: "B",
      attributes: "C",
      "mag/res": "A",
      resources: "E",
    },
    attributes: initRunnerAttributes,
    magres: "Adept",
    powers: [
      {
        name: "Traceless walk",
        cost: 0.5,
        activation: "Passive",
      },
      {
        name: "Improved reflexes",
        cost: 1.0,
        levels: true,
        max: 4,
        activation: "Passive",
        modifications: [
          {
            attr: "REACTION",
            val: 1,
            type: "augmented",
          },
          {
            attr: "INITIATIVE DICE PHYSICAL",
            val: 1,
          },
        ],
      },
      {
        name: "Attribute boost",
        cost: 0.25,
        levels: true,
        level: 2,
        select: "PHYSICAL ATTRIBUTE",
        activation: "Major action",
      },
    ],
  },
  {
    id: 9,
    name: "Netcat",
    description:
      "Netcat is a female Elven Technomancer and founding member of Jackpoint. After she admitted her powers on the VPN, Clockwork tried to sell her to corporate interests.",
    priority: {
      metatype: "D",
      skills: "B",
      attributes: "C",
      "mag/res": "A",
      resources: "E",
    },
    metatype: "Elf",
    attributes: initRunnerAttributes,
    magres: "Technomancer",
    complexForms: [
      {
        name: "Resonance Spike",
        duration: "Immediate",
        fade: 4,
      },
      {
        name: "Editor",
        duration: "Permanent",
        fade: 3,
      },
      {
        name: "Pulse Storm",
        duration: "Immediate",
        fade: 3,
      },
      {
        name: "Puppeteer",
        duration: "Sustained",
        fade: 5,
      },
    ],
  },
  {
    id: 10,
    name: "Cayman",
    description: "Human Street Samurai, not to be confused with Canray",
    priority: {
      metatype: "D",
      skills: "C",
      attributes: "A",
      "mag/res": "E",
      resources: "B",
    },
    metatype: "Human",
    attributes: initRunnerAttributes,
    magres: "Mundane",
    resources: {
      melee: [
        {
          name: "Katana",
          availability: "3",
          cost: 350,
          useAs: [
            {
              type: "WEAPON CLOSE COMBAT",
              subtype: "BLADES",
            },
            {
              type: "ACCESSORY",
              subtype: "INSTRUMENT WEAPON",
              slot: "INSTRUMENT WEAPON",
              capacity: 1,
              availability: "5",
              cost: 350,
            },
          ],
          weapon: {
            dv: "4P",
            ar: [10, 0, 0, 0, 0],
            skill: "Close Combat",
            specialization: "Blades",
          },
        },
        {
          name: "Combat Knife",
          availability: "2",
          cost: 220,
          useAs: [
            {
              type: "WEAPON CLOSE COMBAT",
              subtype: "BLADES",
            },
          ],
          weapon: {
            dv: "3P",
            ar: [8, 2, 0, 0, 0],
            skill: "Close Combat",
            specialization: "Blades",
          },
        },
      ],
      projectile: [
        {
          name: "Bow10",
          availability: "3L",
          cost: 200,
          useAs: [
            {
              type: "WEAPON RANGED",
              subtype: "BOWS",
            },
          ],
          weapon: {
            dv: "5P",
            ar: [5, 10, 3, 0, 0],
            skill: "Athletics",
            specialization: "Archery",
          },
          requires: {
            attrreq: {
              attribute: "STRENGTH",
              value: 10,
            },
          },
          modifications: [
            {
              hook: "TOP",
            },
            {
              hook: "UNDER",
            },
          ],
        },
      ],
    },
  },
]

export const orkRunner: Runner = {
  ...mockedRunners[0],
  metatype: "Ork",
  attributes: initRunnerAttributes,
}

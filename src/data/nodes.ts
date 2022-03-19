import fib from "../helpers/fib"
import { INode } from "../interfaces/interfaces"

const nodesON2: INode[] = [
  {
    hash: "0",
    value: 7,
    solved: null,
    memo: null,
  },
  {
    hash: "1A",
    value: 6,
    solved: null,
    memo: null,
  },
  {
    hash: "1A2A",
    value: 5,
    solved: null,
    memo: null,
  },
  {
    hash: "1A2A3A",
    value: 4,
    solved: null,
    memo: null,
  },
  {
    hash: "1A2A3A4A",
    value: 3,
    solved: null,
    memo: null,
  },
  {
    hash: "1A2A3A4A5A",
    value: 2,
    solved: null,
    memo: null,
  },
  {
    hash: "1A2A3A4A5B",
    value: 1,
    solved: ["1A2A3A4A5A", "1A2A3A4A" ], // 2, 3
    memo: null
  },
  {
    hash: "1A2A3A4B",
    value: 2,
    solved: [
      "1A2A3A4A", 
      "1A2A3A4A5A", 
      "1A2A3A4A5B",
      "1A2A3A"
    ], // 3, 2, 1, 4 
    memo: null
  },
  {
    hash: "1A2A3B",
    value: 3,
    solved: [
      "1A2A3A", 
      "1A2A3A4A", 
      "1A2A3A4A5A", 
      "1A2A3A4A5B", 
      "1A2A3A4B",
    ], // 4, 3, 2, 1, 2, 5
    memo: null
  },
  {
    hash: "1A2A3B4A",
    value: 2,
    solved:  [
      "1A2A3A", 
      "1A2A3A4A", 
      "1A2A3A4A5A", 
      "1A2A3A4A5B", 
      "1A2A3A4B" 
    ], // 4, 3, 2, 1, 2
    memo: null
  },
  {
    hash: "1A2A3B4B",
    value: 1,
    solved:  [
      "1A2A3A", 
      "1A2A3A4A", 
      "1A2A3A4A5A", 
      "1A2A3A4A5B", 
      "1A2A3A4B", 
      "1A2A3B4A",
      "1A2A3B",
      "1A2A"
    ], // 4, 3, 2, 1, 2, 2, 3, 5
    memo: null
  },
  {
    hash: "1A2B",
    value: 4,
    solved: [
        "1A2A", // 5
        "1A2A3A", // 4
        "1A2A3A4A", // 3
        "1A2A3A4A5A", // 2
        "1A2A3A4A5B", // 1
        "1A2A3A4B", // 2
        "1A2A3B4A", // 2
        "1A2A3B", // 3
        "1A2A3B4A", // 2
        "1A2A3B4B", // 1
    ],
    memo: null 
  },
  {
    hash: "1A2B3A",
    value: 3,
    solved: [
        "1A2A", // 5
        "1A2A3A", // 4
        "1A2A3A4A", // 3
        "1A2A3A4A5A", // 2
        "1A2A3A4A5B", // 1
        "1A2A3A4B", // 2
        "1A2A3B4A", // 2
        "1A2A3B", // 3
        "1A2A3B4A", // 2
        "1A2A3B4B", // 1
    ],
    memo: null
  },
  {
    hash: "1A2B3A4A",
    value: 2,
    solved: [
        "1A2A", // 5
        "1A2A3A", // 4
        "1A2A3A4A", // 3
        "1A2A3A4A5A", // 2
        "1A2A3A4A5B", // 1
        "1A2A3A4B", // 2
        "1A2A3B4A", // 2
        "1A2A3B", // 3
        "1A2A3B4A", // 2
        "1A2A3B4B", // 1
    ],
    memo: null
  },
  {
    hash: "1A2B3A4B",
    value: 1,
    solved: [
        "1A2A", // 5
        "1A2A3A", // 4
        "1A2A3A4A", // 3
        "1A2A3A4A5A", // 2
        "1A2A3A4A5B", // 1
        "1A2A3A4B", // 2
        "1A2A3B4A", // 2
        "1A2A3B", // 3
        "1A2A3B4A", // 2
        "1A2A3B4B", // 1
        "1A2B3A4A", // 2
        "1A2B3A",
    ],
    memo: null
  },
  {
    hash: "1A2B3B",
    value: 2,
    solved: [
        "1A2A", // 5
        "1A2A3A", // 4
        "1A2A3A4A", // 3
        "1A2A3A4A5A", // 2
        "1A2A3A4A5B", // 1
        "1A2A3A4B", // 2
        "1A2A3B4A", // 2
        "1A2A3B", // 3
        "1A2A3B4A", // 2
        "1A2A3B4B", // 1
        "1A2B3A4A", // 2
        "1A2B3A4B", // 1
        "1A2B3A", // 3
        "1A2B", // 4
        "1A" // 6
    ],
    memo: null
  },
  {
    hash: "1B",
    value: 5,
    solved: [
        "1A", // 6 
        "1A2A", // 5
        "1A2A3A", // 4
        "1A2A3A4A", // 3
        "1A2A3A4A5A", // 2
        "1A2A3A4A5B", // 1
        "1A2A3A4B", // 2
        "1A2A3B4A", // 2
        "1A2A3B", // 3
        "1A2A3B4A", // 2
        "1A2A3B4B", // 1
        "1A2B3A4A", // 2
        "1A2B3A4B", // 1
        "1A2B3A", // 3
        "1A2B", // 2
        "1A2B3B" // 4
    ],
    memo: null
  },
  {
    hash: "1B2A",
    value: 4,
    solved: [
        "1A", // 6 
        "1A2A", // 5
        "1A2A3A", // 4
        "1A2A3A4A", // 3
        "1A2A3A4A5A", // 2
        "1A2A3A4A5B", // 1
        "1A2A3A4B", // 2
        "1A2A3B4A", // 2
        "1A2A3B", // 3
        "1A2A3B4A", // 2
        "1A2A3B4B", // 1
        "1A2B3A4A", // 2
        "1A2B3A4B", // 1
        "1A2B3A", // 3
        "1A2B", // 2
        "1A2B3B" // 4
    ],
    memo: null
  },
  {
    hash: "1B2A3A",
    value: 3,
    solved: [
        "1A", // 6 
        "1A2A", // 5
        "1A2A3A", // 4
        "1A2A3A4A", // 3
        "1A2A3A4A5A", // 2
        "1A2A3A4A5B", // 1
        "1A2A3A4B", // 2
        "1A2A3B4A", // 2
        "1A2A3B", // 3
        "1A2A3B4A", // 2
        "1A2A3B4B", // 1
        "1A2B3A4A", // 2
        "1A2B3A4B", // 1
        "1A2B3A", // 3
        "1A2B", // 2
        "1A2B3B" // 4
    ],
    memo: null
  },
  {
    hash: "1B2A3A4A",
    value: 2,
    solved: [
        "1A", // 6 
        "1A2A", // 5
        "1A2A3A", // 4
        "1A2A3A4A", // 3
        "1A2A3A4A5A", // 2
        "1A2A3A4A5B", // 1
        "1A2A3A4B", // 2
        "1A2A3B4A", // 2
        "1A2A3B", // 3
        "1A2A3B4A", // 2
        "1A2A3B4B", // 1
        "1A2B3A4A", // 2
        "1A2B3A4B", // 1
        "1A2B3A", // 3
        "1A2B", // 2
        "1A2B3B" // 4
    ],
    memo: null
  }, 
  {
    hash: "1B2A3A4B",
    value: 1,
    solved: [
        "1A", // 6 
        "1A2A", // 5
        "1A2A3A", // 4
        "1A2A3A4A", // 3
        "1A2A3A4A5A", // 2
        "1A2A3A4A5B", // 1
        "1A2A3A4B", // 2
        "1A2A3B4A", // 2
        "1A2A3B", // 3
        "1A2A3B4A", // 2
        "1A2A3B4B", // 1
        "1A2B3A4A", // 2
        "1A2B3A4B", // 1
        "1A2B3A", // 3
        "1A2B", // 2
        "1A2B3B", // 4,
        "1B2A3A4A", // 2
        "1B2A3A" // 3
    ],
    memo: null
  }, 
  {
    hash: "1B2A3B",
    value: 2,
    solved: [
        "1A", // 6 
        "1A2A", // 5
        "1A2A3A", // 4
        "1A2A3A4A", // 3
        "1A2A3A4A5A", // 2
        "1A2A3A4A5B", // 1
        "1A2A3A4B", // 2
        "1A2A3B4A", // 2
        "1A2A3B", // 3
        "1A2A3B4A", // 2
        "1A2A3B4B", // 1
        "1A2B3A4A", // 2
        "1A2B3A4B", // 1
        "1A2B3A", // 3
        "1A2B", // 2
        "1A2B3B", // 4,
        "1B2A3A4A", // 2
        "1B2A3A", // 3
        "1B2A3A4B", // 1
        "1B2A" // 4
    ],
    memo: null
  }, 
  {
    hash: "1B2B",
    value: 3,
    solved: [
        "1A", // 6 
        "1A2A", // 5
        "1A2A3A", // 4
        "1A2A3A4A", // 3
        "1A2A3A4A5A", // 2
        "1A2A3A4A5B", // 1
        "1A2A3A4B", // 2
        "1A2A3B4A", // 2
        "1A2A3B", // 3
        "1A2A3B4A", // 2
        "1A2A3B4B", // 1
        "1A2B3A4A", // 2
        "1A2B3A4B", // 1
        "1A2B3A", // 3
        "1A2B", // 2
        "1A2B3B", // 4,
        "1B2A3A4A", // 2
        "1B2A3A", // 3
        "1B2A3A4B", // 1
        "1B2A", // 4
        "1B2A3B" // 2
    ],
    memo: null
  }, 
  {
    hash: "1B2B3A",
    value: 2,
    solved: [
        "1A", // 6 
        "1A2A", // 5
        "1A2A3A", // 4
        "1A2A3A4A", // 3
        "1A2A3A4A5A", // 2
        "1A2A3A4A5B", // 1
        "1A2A3A4B", // 2
        "1A2A3B4A", // 2
        "1A2A3B", // 3
        "1A2A3B4A", // 2
        "1A2A3B4B", // 1
        "1A2B3A4A", // 2
        "1A2B3A4B", // 1
        "1A2B3A", // 3
        "1A2B", // 2
        "1A2B3B", // 4,
        "1B2A3A4A", // 2
        "1B2A3A", // 3
        "1B2A3A4B", // 1
        "1B2A", // 4
        "1B2A3B" // 2
    ],
    memo: null
  }, 
  {
    hash: "1B2B3B",
    value: 1,
    solved: [
        "1A", // 6 
        "1A2A", // 5
        "1A2A3A", // 4
        "1A2A3A4A", // 3
        "1A2A3A4A5A", // 2
        "1A2A3A4A5B", // 1
        "1A2A3A4B", // 2
        "1A2A3B4A", // 2
        "1A2A3B", // 3
        "1A2A3B4A", // 2
        "1A2A3B4B", // 1
        "1A2B3A4A", // 2
        "1A2B3A4B", // 1
        "1A2B3A", // 3
        "1A2B", // 2
        "1A2B3B", // 4,
        "1B2A3A4A", // 2
        "1B2A3A", // 3
        "1B2A3A4B", // 1
        "1B2A", // 4
        "1B2A3B", // 2
        "1B2B3A", // 2
        "1B2B", // 3
        "1B", // 5
        "0"
    ],
    memo: null
  }
]

const nodesON: INode[] = [
  {
    hash: "0",
    value: 7,
    solved: null,
    memo: { 7: null },
  },
  {
    hash: "1A",
    value: 6,
    solved: null,
    memo: { 7: null, 6: null },
  },
  {
    hash: "1A2A",
    value: 5,
    solved: null,
    memo: { 7: null, 6: null, 5: null },
  },
  {
    hash: "1A2A3A",
    value: 4,
    solved: null,
    memo: { 7: null, 6: null, 5: null, 4: null },
  },
  {
    hash: "1A2A3A4A",
    value: 3,
    solved: null,
    memo: { 7: null, 6: null, 5: null, 4: null, 3: null },
  },
  {
    hash: "1A2A3A4A5A",
    value: 2,
    solved: null,
    memo: { 7: null, 6: null, 5: null, 4: null, 3: null },
  }, 
  {
    hash: "1A2A3A4A5B",
    value: 1,
    solved: ["1A2A3A4A5A", "1A2A3A4A"], // 2, 3
    memo: { 7: null, 6: null, 5: null, 4: null, 3: fib(3) },
  },
  {
    hash: "1A2A3A4B",
    value: 2,
    solved: [
      "1A2A3A4A", 
      "1A2A3A4A5A", 
      "1A2A3A4A5B",
      "1A2A3A",
    ], // 3, 2, 1, 4
    memo: { 7: null, 6: null, 5: null, 4: fib(4), 3: fib(3) },
  },
  {
    hash: "1A2A3B",
    value: 3,
    solved: [
      "1A2A3A", 
      "1A2A3A4A", 
      "1A2A3A4A5A", 
      "1A2A3A4A5B", 
      "1A2A3A4B",
      "1A2A",
      "1A2A3B"
    ], // 4, 3, 2, 1, 2, 5
    memo: { 7: null, 6: null, 5: fib(5), 4: fib(4), 3: fib(3) },
  },
  {
    hash: "1A2B",
    value: 4,
    solved: [
        "1A2A", // 5
        "1A2A3A", // 4
        "1A2A3A4A", // 3
        "1A2A3A4A5A", // 2
        "1A2A3A4A5B", // 1
        "1A2A3A4B", // 2
        "1A2A3B4A", // 2
        "1A2A3B", // 3
        "1A2A3B4A", // 2
        "1A2A3B4B", // 1
        "1A2B",
        "1A"
    ],
    memo: { 7: null, 6: fib(6), 5: fib(5), 4: fib(4), 3: fib(3) }, 
  },
  {
    hash: "1B",
    value: 5,
    solved: [
        "1A", // 6 
        "1A2A", // 5
        "1A2A3A", // 4
        "1A2A3A4A", // 3
        "1A2A3A4A5A", // 2
        "1A2A3A4A5B", // 1
        "1A2A3A4B", // 2
        "1A2A3B4A", // 2
        "1A2A3B", // 3
        "1A2A3B4A", // 2
        "1A2A3B4B", // 1
        "1A2B3A4A", // 2
        "1A2B3A4B", // 1
        "1A2B3A", // 3
        "1A2B", // 2
        "1A2B3B", // 4
        "1B",
        "0"
    ],
    memo: { 7: fib(7), 6: fib(6), 5: fib(5), 4: fib(4), 3: fib(3) }, 
  },
]


export {
  nodesON2,
  nodesON
}
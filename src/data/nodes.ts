import { INode } from "../interfaces/interfaces"

const nodes: INode[] = [
    {
      hash: "0",
      value: 7,
      solved: null,
      result: null,
    }, // 7
    {
      hash: "1A",
      value: 6,
      solved: null,
      result: null,
    }, // 6
    {
      hash: "1A2A",
      value: 5,
      solved: null,
      result: null,
    }, // 5
    {
      hash: "1A2A3A",
      value: 4,
      solved: null,
      result: null,
    }, // 4  
    {
      hash: "1A2A3A4A",
      value: 3,
      solved: null,
      result: null,
    }, // 3
    {
      hash: "1A2A3A4A5A",
      value: 2,
      solved: null,
      result: null,
    }, // 2 //// -----------> Soy un caso corte, retorno resultado
    {
      hash: "1A2A3A4A5B",
      value: 1,
      solved: ["1A2A3A4A5A" ], // 2
      result: null
    }, // 1
    {
      hash: "1A2A3A4B",
      value: 2,
      solved: [
        "1A2A3A4A", 
        "1A2A3A4A5A", 
        "1A2A3A4A5B" 
      ], // 3, 2, 1 
      result: null
    }, // 2
    {
      hash: "1A2A3B",
      value: 3,
      solved: [
        "1A2A3A", 
        "1A2A3A4A", 
        "1A2A3A4A5A", 
        "1A2A3A4A5B", 
        "1A2A3A4B" 
      ], // 4, 3, 2, 1, 2
      result: null
    }, // 3
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
      result: null
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
        "1A2A3B4A"
      ], // 4, 3, 2, 1, 2, 2
      result: null
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
      result: null 
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
      result: null
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
      result: null
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
      ],
      result: null
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
      ],
      result: null
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
      result: null
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
      result: null
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
      result: null
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
      result: null
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
      ],
      result: null
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
          "1B2A3A4B" // 1
      ],
      result: null
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
      result: null
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
      result: null
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
          "1B2B3A" // 2
      ],
      result: null
    }
  ]

export default nodes;
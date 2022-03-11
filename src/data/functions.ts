import { IFunction } from "../interfaces/interfaces";
import { purple, yellow, blue } from "../helpers/palette";

const functions: IFunction[] = [
    { 
        complexity: "on2",
        code: {
            1: { text: "function fibonacci (n) {", space: 0, turn: 1, color: purple },
            2: { text: "if (n<=2) return 1;", space: 1, turn: 2, color: blue },
            3: { text: "return fibonacci(n-1) + fibonacci(n-2);", space: 1, turn: 3, color: yellow },
            4: { text: "};", turn: 1, color: purple }
        }
    },
    { 
        complexity: "on",
        code: {
            1: { text: "function fibonacci (n, memo = {}) {", space: 0, turn: 0, color: "purple" },
            2: { text: "if (n in memo) return memo[n];", space: 1, turn: 1, color: "blue" },
            3: { text: "if (n <= 2) return 1;", space: 1 , turn: 2, color: "blue" },
            4: { text: "memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)", space: 1, turn: 3, color: "yellow" },
            5: { text: "return memo[n];", space: 1, turn: 3, color: "yellow"},
            6: { text: "}", space: 0, turn: 0, color: "purple"}
        }
    }
]

export default functions;
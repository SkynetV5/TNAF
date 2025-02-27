import { addNumbers, subtractNumbers } from ".";
import {it,expect, describe} from "vitest";

describe("Math functions", () => {

it('should add numbers', () => {
    const result = addNumbers(5,4)

    expect(result).toBe(9)
})

it('should subtract numbers', () =>{
    const result = subtractNumbers(5,4);

    expect(result).toBe(1)
})
})
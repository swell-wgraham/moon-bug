import { libB } from "@example/lib-b";

export function libA(val: number) {
    return libB(val) + 1;
}
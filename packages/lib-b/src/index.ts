import { libC } from '@example/lib-c';

export function libB(val: number) {
    return libC(val) + 1;
}
import { libA } from "@example/lib-a";

Bun.serve({
    fetch() {
        return new Response(libA(4).toString());
    }
})
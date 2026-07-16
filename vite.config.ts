import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
  },
  // Vercel deployment target. Inside Lovable's sandbox this is ignored and Cloudflare is used;
  // in a real production build (e.g. on Vercel CI) Nitro emits the Vercel output format.
  nitro: {
    preset: "vercel",
  },
});

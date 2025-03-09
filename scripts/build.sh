#! /usr/bin/bash
wasm-pack build --out-dir ./build/wasm_out
npx esbuild ./src_ts/main.ts --bundle --sourcemap --format=cjs --outdir=./ --external:obsidian --external:electron --external:codemirror --loader:.wasm=binary
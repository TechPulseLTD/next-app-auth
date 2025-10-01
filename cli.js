#!/usr/bin/env node
import degit from "degit";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectName = process.argv[2] || "my-app";
const targetDir = path.resolve(process.cwd(), projectName);

console.log(`🚀 Creating Next.js boilerplate in: ${targetDir}`);

const emitter = degit("techpulseltd/next-app-auth", {
  cache: false,
  force: true,
  verbose: true,
});

emitter.clone(targetDir).then(() => {
  console.log("✅ Done!");
  console.log(`\nNext steps:`);
  console.log(`   cd ${projectName}`);
  console.log("   npm install");
  console.log("   npm run dev");
});

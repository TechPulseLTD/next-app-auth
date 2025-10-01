#!/usr/bin/env node
import degit from "degit";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectName = process.argv[2] || "my-app";
const targetDir = path.resolve(process.cwd(), projectName);

console.log(`🚀 Creating Next.js boilerplate in: ${targetDir}`);

const emitter = degit("techpulseltd/next-app-auth-stater", {
  cache: false,
  force: true,
  verbose: true,
});

import { execSync } from "child_process";

emitter.clone(targetDir).then(() => {
  console.log("📦 Installing dependencies...");
  execSync("npm install", { stdio: "inherit", cwd: targetDir });

  console.log("✅ Done!");
  console.log(`\nNext steps:`);
  console.log(`   cd ${projectName}`);
  console.log("   npm run dev");
});
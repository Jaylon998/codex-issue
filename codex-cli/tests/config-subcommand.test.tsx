import { describe, it, expect } from "vitest";
import { spawnSync } from "child_process";
import path from "path";

describe("config subcommand", () => {
  it("should display configuration information", () => {
    const cliPath = path.join(__dirname, "..", "dist", "cli.js");

    const result = spawnSync("node", [cliPath, "config"], {
      encoding: "utf-8",
      timeout: 10000,
    });

    expect(result.status).toBe(0);
    expect(result.stdout).toContain("Codex Configuration:");
    expect(result.stdout).toContain("Model:");
    expect(result.stdout).toContain("Provider:");
    expect(result.stdout).toContain("API Key:");
    expect(result.stdout).toContain("Configuration Files:");
    expect(result.stdout).toContain("Working directory:");
  });

  it("should include config subcommand in help output", () => {
    const cliPath = path.join(__dirname, "..", "dist", "cli.js");

    const result = spawnSync("node", [cliPath, "--help"], {
      encoding: "utf-8",
      timeout: 10000,
    });

    expect(result.status).toBe(0);
    expect(result.stdout).toContain("$ codex config");
  });
});

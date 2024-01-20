import semver from "semver";
import fetch from "node-fetch";

async function findSupportedVersion(packageName: string, nodeVersion: string) {
  try {
    const response = await fetch(`https://registry.npmjs.org/${packageName}`);
    const data: any = await response.json();

    const versions = Object.keys(data.versions);

    console.log("Object.keys(data)", Object.keys(data));
    for (const version of versions
      .reverse()
      .filter((f) => f.indexOf("-") < 0)) {
      console.log(`Checking ${packageName}@${version}`);
      const engines = data.versions[version].engines;
      if (semver.satisfies(nodeVersion, engines.node)) {
        console.log(`Compatible version found: ${packageName}@${version}`);
        return;
      }
    }
    console.log("No compatible versions found");
  } catch (error) {
    console.error("Error:", error);
  }
}

const args = process.argv.slice(2);
if (args.length !== 2) {
  console.log("Usage: find-supported-version <package-name> <node-version>");
} else {
  findSupportedVersion(args[0], args[1]);
}

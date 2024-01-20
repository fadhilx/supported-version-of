import semver from "semver";
import fetch from "node-fetch";

async function findSupportedVersion(packageName: string, nodeVersion: string) {
  try {
    const valid = semver.valid(semver.coerce(nodeVersion));
    if (!valid) return console.log("Invalid version");

    console.log(
      `Finding version of package '${packageName}' that satisfies node engine of ${valid}`
    );
    const response = await fetch(`https://registry.npmjs.org/${packageName}`);
    const data: any = await response.json();

    const versions = Object.keys(data.versions);

    let redCompared: string[] = [];
    for (const version of versions
      .reverse()
      .filter((f) => f.indexOf("-") < 0)) {
      const engines = data.versions[version].engines;
      if (!engines || redCompared.find((f) => f === engines.node)) continue;

      console.log(`Checking ${packageName}@${version}: ${engines.node}`);
      if (valid && semver.satisfies(valid, engines.node)) {
        console.log(`Compatible version found: ${packageName}@${version}`);
        return;
      }
      redCompared.push(engines.node);
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

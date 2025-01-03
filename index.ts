import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";

// GCP creates a new DNS zone and record set for each GCP computing region.
// It cannot discern by states or other boundaries.
async function createGcpResources() {
  const available = await gcp.compute.getRegions({});
  const regionNames = available.names;

  // Create a Google Cloud DNS Zone
  const dnsZone = new gcp.dns.ManagedZone("test", {
    dnsName: "gcp.geoip-test.mindflakes.com.",
    description: "GCP zone for testing the GeoIP lookup",
  });

  // Create a Google Cloud DNS Record Set
  // We want to test with CNAME records, so we need to create a CNAME record for
  // each region
  // Just set examples
  const recordSet = new gcp.dns.RecordSet("test", {
    managedZone: dnsZone.name,
    name: "test.gcp.geoip-test.mindflakes.com.",
    type: "CNAME",
    ttl: 60,
    routingPolicy: {
      geos: regionNames.map((region) => {
        return {
          location: region,
          rrdatas: [`test-result-${region}.gcp.geoip-test.mindflakes.com.`],
        };
      })
    },
  });
}

export = async () => {
  await createGcpResources();
}

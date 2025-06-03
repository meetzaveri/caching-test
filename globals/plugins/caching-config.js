export const Config = {
  // Client header configuration
  headers: {
    // A secret that must be provided in incoming requests from the engine.
    // Change this to whatever you'd like, though remember to update the
    // references further on.
    "hasura-m-auth": process.env.HASURA_M_AUTH,
  },

  // A URL for redis. If you copied the docker-compose configuration for
  // `redis` above, this doesn't need changing.
  redis_url: process.env.GLOBAL_REDIS_INSTANCE_URL,

  // OpenTelemetry configuration. The name of this environment variable will
  // depend on your subgraph name - check your `.env` file to find the correct
  // name. You can also specify any further headers that your telemetry
  // collector may require.
  otel_endpoint: process.env.APP_PG_OTEL_EXPORTER_OTLP_ENDPOINT,
  otel_headers: {},

  // A list of queries that we want to cache. Note that these queries will be
  // cached based on their parsed structures, so white space doesn't matter.
  queries_to_cache: [
    {
      query: ` query MyQuery {
          customers {
            firstName
            lastName
          }
        }
      `,
      // How long a cached response should live (in seconds).
      time_to_live: 600,
    },
    {
      query: `query getOrders {
        orders {
          id
          status
          product {
            id
            name
          }
        }
      }`,
      time_to_live: 600,
    },
  ],
};

import { createProxyMiddleware } from "http-proxy-middleware";

// Initialize proxy middleware
const proxy = createProxyMiddleware({
  target: "http://51.20.49.136:5000/v1",
  changeOrigin: true,
  pathRewrite: { "^/api/proxy": "" }, // Remove /api/proxy from path
  logLevel: "debug", // Log requests for debugging
});

// Export handler for Next.js API route
export async function POST(req) {
  return handleRequest(req);
}

export async function GET(req) {
  return handleRequest(req);
}

export async function PUT(req) {
  return handleRequest(req);
}

export async function DELETE(req) {
  return handleRequest(req);
}

async function handleRequest(req) {
  return new Promise((resolve, reject) => {
    console.log(`Proxying ${req.method} request to: ${req.url}`);
    proxy(
      req,
      {
        // Custom response object to match Next.js API route
        status: (code) => ({
          json: (body) =>
            resolve(
              new Response(JSON.stringify(body), {
                status: code,
                headers: { "Content-Type": "application/json" },
              })
            ),
        }),
        end: () => resolve(new Response(null, { status: 200 })),
      },
      (err) => {
        console.error("Proxy error:", err.message);
        resolve(
          new Response(
            JSON.stringify({ error: "Proxy error", message: err.message }),
            { status: 500 }
          )
        );
      }
    );
  });
}

// Disable body parsing for proxy
export const config = {
  api: {
    bodyParser: false,
  },
};

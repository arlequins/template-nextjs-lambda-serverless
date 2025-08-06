# Stage 1: Prepare the standalone production server (no build)
FROM node:22-slim AS runner
WORKDIR /app

# Copy pre-built Next.js standalone output and static assets from host
COPY out .

# Stage 2: Get AWS Lambda Web Adapter
FROM public.ecr.aws/awsguru/aws-lambda-adapter:0.9.0 AS adapter

# Stage 3: Final image
FROM runner AS final
WORKDIR /app
COPY --from=adapter /lambda-adapter /opt/extensions/lambda-adapter

EXPOSE 3000
CMD ["node", "server.js"]

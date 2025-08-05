# Stage 1: Prepare the standalone production server
FROM node:22-slim AS runner

# Install AWS Lambda Web Adapter
# Note: Check for the latest adapter version from the AWS documentation
FROM public.ecr.aws/awsguru/aws-lambda-adapter:0.9.0 AS adapter

WORKDIR /app

# Copy the standalone output from the builder stage
COPY --from=builder /app/.next/standalone ./

# Copy static assets and public folder
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Copy the Lambda Web Adapter to the final image
COPY --from=adapter /lambda-adapter /opt/extensions/lambda-adapter

EXPOSE 3000

# The command to start the Next.js standalone server.
# The Lambda Web Adapter will automatically start this.
CMD ["node", "server.js"]

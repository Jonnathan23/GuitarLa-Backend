import { get } from 'env-var'

process.loadEnvFile();

export const envs = {
    PORT: get('PORT').required().asPortNumber(),
    FRONTEND_URL: get('FRONTEND_URL').required().asString(),
    DATABASE_URL:get('DATABASE_URL').required().asString(),
    NODE_ENV: get('NODE_ENV').default('development').asString(),
    DEVELOPMENT: process.argv[2] ?? ''
}
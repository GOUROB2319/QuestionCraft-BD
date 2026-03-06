import { z } from "zod"

const clientEnvSchema = z.object({
    NEXT_PUBLIC_SUPABASE_URL: z.url(),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
    NEXT_PUBLIC_APP_URL: z.url().optional(),
})

const serverEnvSchema = clientEnvSchema.extend({
    SUPABASE_SERVICE_ROLE_KEY: z.string().min(1).optional(),
})

const parsedEnv = serverEnvSchema.safeParse({
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
})

if (!parsedEnv.success) {
    throw new Error(
        `Invalid environment configuration: ${parsedEnv.error.issues
            .map((issue) => issue.path.join("."))
            .join(", ")}`
    )
}

export const env = parsedEnv.data

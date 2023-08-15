import { User } from "@supabase/auth-helpers-nextjs"

type UserContextType = {
    accessToken: string | null;
    user: User
}

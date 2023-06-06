import { z } from "zod"

export const schema = z.object({
    email: 
    z.string()
    .email("Invalid Email"),

    password: 
    z.string()
    .min(8, "Minimum of 8 caracters")
    .nonempty("Cannot be empty")
})

export type ILoginData = z.infer<typeof schema>
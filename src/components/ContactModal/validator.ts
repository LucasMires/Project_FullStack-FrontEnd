import { z } from "zod"

export const schema = z.object({
    name: 
    z.string()
    .min(3, "Minimum of 3 caracters")
    .max(50, "Maximum of 50 caracters")
    .or(z.literal("")),

    email: 
    z.string()
    .email("Invalid Email")
    .or(z.literal("")),

    phone_number: 
    z.string()
    .min(11, "This field needs 11 numbers")
    .max(11, "This field needs 11 numbers")
    .or(z.literal("")),
})

export type IUpdatedContactData = Partial<z.infer<typeof schema>>

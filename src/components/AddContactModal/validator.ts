import { z } from "zod"

export const schema = z.object({
    name: 
    z.string()
    .min(3, "Minimum of 3 caracters")
    .max(50, "Maximum of 50 caracters")
    .nonempty("Cannot be empty"),

    email: 
    z.string()
    .email("Invalid Email")
    .or(z.literal("")),

    phone_number: 
    z.string()
    .min(11, "This field needs 11 numbers")
    .max(11, "This field needs 11 numbers")
    .nonempty("Cannot be empty"),

})

export type IAddContactData = z.infer<typeof schema>

import { z } from "zod"
import { IRegisterData } from "../RegisterForm/validator"

export const schema = z.object({
    name: 
    z.string()
    .min(3, "Minimum of 3 caracters")
    .max(50, "Maximum of 50 caracters")
    .nullable(),

    email: 
    z.string()
    .email("Invalid Email")
    .nullable(),

    phone_number: 
    z.string()
    .min(11, "This field needs 11 numbers")
    .max(11, "This field needs 11 numbers")
    .nullable(),

    password: 
    z.string()
    .min(8, "Minimum of 8 caracters")
    .nullable(),
})

export type IUpdatedClientData = Partial<IRegisterData>
import z from "zod";

export const schema = z.object({
  firstName: z
    .string()
    .min(2, { message: "FirstName must be at least 2 characters." }),
  lastName: z
    .string()
    .min(2, { message: "LastName must be at least 2 characters." }),
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Invalid email address." }),
  message: z
    .string()
    .min(1, { message: "Message must be at least 2 characters." }),
  queryType: z.string().min(1, { message: "Please select a query type" }),
  checkbox: z.boolean().refine((val) => val === true, {
    message: "To submit this form, please consent to being contacted",
  }),
});

export type FormDataType = z.infer<typeof schema>;

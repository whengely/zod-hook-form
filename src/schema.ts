import { z } from 'zod'

const personSchema = z.object({
  type: z.literal('Person'),
  firstName: z.string().nonempty(),
  lastName: z.string().nonempty(),
})

const organizationSchema = z.object({
  type: z.literal('Organization'),
  organizationName: z.string().nonempty()
})

export const formSchema = z.union([personSchema, organizationSchema])
export type FormSchema = z.infer<typeof formSchema>

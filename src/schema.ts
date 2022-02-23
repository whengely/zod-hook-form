import { z } from 'zod'

const personSchema = z.object({
  type: z.literal('Person'),
  firstName: z.string().nonempty(),
  lastName: z.string().nonempty(),
})
type PersonSchema = z.infer<typeof personSchema>

const organizationSchema = z.object({
  type: z.literal('Organization'),
  organizationName: z.string().nonempty()
})
type OrganizationSchema = z.infer<typeof organizationSchema>

export const formSchema = z.union([personSchema, organizationSchema])
export type FormSchema = z.infer<typeof formSchema>

export const person: PersonSchema = { 
  type: 'Person',
  firstName: 'first',
  lastName: 'last',
}

export const org: OrganizationSchema = {
  type: 'Organization',
  organizationName: 'org name'
}

export const eitherPerson: FormSchema = { 
  type: 'Person',
  firstName: 'first',
  lastName: 'last',
  // errors organizationName: 'blah',
}

export const eitherOrg: FormSchema = { 
  type: 'Organization',
  // errors firstName: 'first',
  organizationName: 'blah',
}

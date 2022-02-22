import { useForm } from "react-hook-form";
import { FormSchema, formSchema } from "./schema";
import { zodResolver } from '@hookform/resolvers/zod'

const App = () => {
  const { handleSubmit, watch, register, formState: { errors } } = useForm<FormSchema>({
    resolver: zodResolver(formSchema)
  })

  const type = watch('type')

  const onSubmit = (data: FormSchema) => {
    alert(`data: ${JSON.stringify(data)}`)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div>
          <label htmlFor="type">Type</label>
          <input type="radio" {...register('type')} value="Person" /> Person
          <input type="radio" {...register('type')} value="Organization" /> Organization
        </div>
        {type === 'Person' && (
          <div>
            <label htmlFor="firstName">First Name: </label>
            <input {...register('firstName')} />
            <label htmlFor="lastName">Last Name: </label>
            <input {...register('lastName')} />
          </div>
        )}
        {type === 'Organization' && (
          <div>
            <label htmlFor="organizationName">Organization Name: </label>
            <input {...register('organizationName')} />
          </div>
        )}
      </div>
      <div>First Name error: {type === 'Person' && errors.firstName}</div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default App;

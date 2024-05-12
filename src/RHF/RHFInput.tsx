import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form'

import { Input } from '@/shadcn/ui/input'
import { Label } from '@/shadcn/ui/label'

import RHFErrorMessage from './RHFErrorMessage'

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name'>

interface Props<T extends FieldValues> extends InputProps {
  label?: string
  name: Path<T>
}

export default function RHFInput<T extends FieldValues>({
  label,
  name,
  ...rest
}: Props<T>) {
  const { control } = useFormContext<T>()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <div className="grid w-full gap-1.5">
            {label && <Label htmlFor={name}>{label}</Label>}
            <Input id={name} {...field} {...rest} />
            <RHFErrorMessage error={fieldState.error} />
          </div>
        )
      }}
    />
  )
}

import { Fragment } from 'react/jsx-runtime'

import { data } from '@/constants/data'
import { Center, Section } from '@/layouts'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shadcn/ui/accordion'
import { Separator } from '@/shadcn/ui/separator'

import Profile from './Profile'

export default function Account() {
  const { groomFamily, brideFamily } = data.wedding
  const families = [groomFamily, brideFamily]

  return (
    <Section title="Account">
      <Center.Column className="w-full gap-4">
        <Accordion type="single" collapsible className="w-full">
          {families.map((family) => (
            <Fragment key={family.type}>
              <AccordionItem value={family.type}>
                <AccordionTrigger>
                  <div className="text-lg font-bold">{family.type}</div>
                </AccordionTrigger>

                <AccordionContent>
                  <Profile data={family.person} />
                  {family.parents.map((parent) => (
                    <Profile key={parent.name} data={parent} />
                  ))}
                </AccordionContent>
              </AccordionItem>
              <Separator />
            </Fragment>
          ))}
        </Accordion>
      </Center.Column>
    </Section>
  )
}

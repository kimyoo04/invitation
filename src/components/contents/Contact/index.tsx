import { Fragment } from 'react/jsx-runtime'

import { Center, Section } from '@/components/layouts'
import { data } from '@/constants/data'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shadcn/ui/accordion'

import Profile from './Profile'

export default function Contact() {
  const { groomFamily, brideFamily } = data.wedding
  const families = [groomFamily, brideFamily]

  return (
    <Section title="Contact">
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
            </Fragment>
          ))}
        </Accordion>
      </Center.Column>
    </Section>
  )
}

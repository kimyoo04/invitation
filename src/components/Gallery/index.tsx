import { data } from '@/constants/data'
import Section from '@/layouts/Section'
import Center from '@/ui/Center'
import ImageComponent from '@/ui/ImageComponent'

import ViewMoreButton from './ViewMoreButton'

export default function Gallery() {
  return (
    <Section>
      <Center.Column className="w-full gap-8">
        <div className="grid grid-cols-2 gap-4">
          {data.wedding.images.gallery.map((imageName) => (
            <ImageComponent
              key={imageName}
              src={`/images/gallery/${imageName}.jpg`}
              alt={imageName}
            />
          ))}
        </div>

        <ViewMoreButton />
      </Center.Column>
    </Section>
  )
}

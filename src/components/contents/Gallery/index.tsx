import { Center, Section } from '@/components/layouts'
import { ImageComponent } from '@/components/ui'
import { data } from '@/constants/data'

import ViewMoreButton from './ViewMoreButton'

export default function Gallery() {
  return (
    <Section title="Gallery">
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

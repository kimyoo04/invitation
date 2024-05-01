import { data } from '@/constants/data'
import Section from '@/layouts/Section'
import Center from '@/ui/Center'

import ImageWrapper from './ImageWrapper'
import ViewMoreButton from './ViewMoreButton'

export default function Gallery() {
  return (
    <Section>
      <Center.Column className="w-full gap-8">
        <div className="grid grid-cols-2 gap-4">
          {data.wedding.galleryImages.map((imageName) => (
            <ImageWrapper
              key={imageName}
              path={`/public/images/gallery/${imageName}.jpg`}
              alt={imageName}
            />
          ))}
        </div>

        <ViewMoreButton />
      </Center.Column>
    </Section>
  )
}

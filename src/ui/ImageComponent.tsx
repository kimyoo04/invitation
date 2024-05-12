import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'

import { Dialog, DialogContent, DialogTrigger } from '@/shadcn/ui/dialog'

interface Props {
  src: string
  alt: string
}

export default function ImageComponent({ src, alt }: Props) {
  const image = (
    <div className="h-full w-full ">
      <img
        src={src}
        alt={alt}
        className="rounded-md object-cover"
        onError={() => alert('이미지를 불러오는 데 실패했습니다.')}
      />
    </div>
  )

  return (
    <>
      <Dialog>
        <DialogTrigger>{image}</DialogTrigger>

        <DialogContent className="overflow-hidden p-0">
          <TransformWrapper>
            <TransformComponent>{image}</TransformComponent>
          </TransformWrapper>
        </DialogContent>
      </Dialog>
    </>
  )
}

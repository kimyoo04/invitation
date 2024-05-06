import Modal from 'react-modal'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'

import { useState } from 'react'

interface Props {
  src: string
  alt: string
}

export default function ImageComponent({ src, alt }: Props) {
  const [loading, setLoading] = useState(true)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => setModalIsOpen(true)
  const closeModal = () => setModalIsOpen(false)

  return (
    <div className="relative h-full w-full">
      {loading ? <div>loading..</div> : null}

      <img
        src={src}
        alt={alt}
        className="h-full w-full rounded-md object-cover"
        onLoad={() => setLoading(false)}
        onError={() => alert('이미지를 불러오는 데 실패했습니다.')}
        onClick={openModal}
      />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        portalClassName={alt}
        appElement={document.getElementById('root') as HTMLElement}
        contentLabel="이미지 확대 보기"
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 md:p-16"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <TransformWrapper>
          <TransformComponent>
            <img src={src} alt={alt} className="max-h-full max-w-full " />
          </TransformComponent>
        </TransformWrapper>

        <button
          onClick={closeModal}
          className="absolute right-4 top-4 text-2xl text-white"
        >
          &times;
        </button>
      </Modal>
    </div>
  )
}

import Image from 'next/image'

type Props = {
  id: string
  alt: string
  ratio?: string
  src?: string
  className?: string
}

export default function ImageSlot({ id, alt, ratio = '16 / 9', src, className }: Props) {
  return (
    <div
      className={`img-slot${src ? ' img-slot--filled' : ''}${className ? ` ${className}` : ''}`}
      data-slot-id={id}
      style={{ aspectRatio: ratio }}
    >
      {src ? (
        <Image src={src} alt={alt} fill style={{ objectFit: 'cover' }} sizes="100vw" />
      ) : (
        <div className="img-slot__placeholder" aria-hidden>
          <span className="img-slot__icon">▣</span>
          <span className="img-slot__id">{id}</span>
          <span className="img-slot__hint">写真を入れる場所</span>
          <span className="img-slot__alt">{alt}</span>
        </div>
      )}
    </div>
  )
}

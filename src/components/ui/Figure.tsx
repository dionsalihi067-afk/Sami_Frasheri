import Image from "next/image";
import { IMAGE_SIZE } from "@/data/images";
import { cn } from "@/lib/utils";

export function Figure({
  image,
  sizes,
  className,
  imgClassName,
  caption,
  priority,
}: {
  image: { src: string; alt: string };
  sizes: string;
  className?: string;
  imgClassName?: string;
  caption?: string;
  priority?: boolean;
}) {
  return (
    <figure className={className}>
      <div className={cn("relative overflow-hidden rounded-[1.25rem] bg-sand sm:rounded-[1.5rem]", imgClassName)}>
        <Image
          src={image.src}
          alt={image.alt}
          width={IMAGE_SIZE.width}
          height={IMAGE_SIZE.height}
          sizes={sizes}
          priority={priority}
          className="h-full w-full object-cover"
        />
      </div>
      {caption && <figcaption className="mt-3 text-xs text-muted">{caption}</figcaption>}
    </figure>
  );
}

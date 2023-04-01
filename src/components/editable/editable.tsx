import { storyblokEditable } from "@storyblok/react"
import { FC, PropsWithChildren } from "react";
import { Blok } from "storyblok-react";

export type EditableProps = PropsWithChildren & {
  blok: Blok<any>
}

export const Editable: FC<EditableProps> = ({ blok, children }: EditableProps) => (
  <div {...storyblokEditable(blok)}>
    {children}
  </div>
)

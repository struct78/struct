import { FC } from "react"
import { Blok } from "storyblok-react"
import { Editable } from "./editable/editable"

export const withBlok = (Component: FC<Blok<any>>) => ({ blok }: Blok<any>) => {
  const { _uid, ...rest } = blok
console.log(blok)
  return (
    <Editable blok={blok} key={_uid}>
      <Component {...rest} />
    </Editable>
  )
}

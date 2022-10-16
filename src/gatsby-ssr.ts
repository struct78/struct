import { RenderBodyArgs } from "gatsby"

export const onRenderBody = ({ setHtmlAttributes }: RenderBodyArgs) => {
  setHtmlAttributes({ lang: "en" })
}

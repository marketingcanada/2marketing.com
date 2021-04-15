import React, { useEffect, useState } from 'react'

const Heading = props => {
  const [textComponent, setTextComponent] = useState("h2")

  useEffect(() => {
    const settings = [props]
   //console.log(settings);

    settings.forEach(setting => {
      if (setting.header_size) {
        if (setting.header_size === "h1") {
          setTextComponent("h1")
        }
        if (setting.header_size === "h2") {
          setTextComponent("h2")
        }
        if (setting.header_size === "h3") {
          setTextComponent("h3")
        }
        if (setting.header_size === "h4") {
          setTextComponent("h4")
        }
        if (setting.header_size === "h5") {
          setTextComponent("h5")
        }
        if (setting.header_size === "h6") {
          setTextComponent("h6")
        }
        if (setting.header_size === "p") {
          setTextComponent("p")
        }
        if (setting.header_size === "span") {
          setTextComponent("span")
        }
      }
    })
  },[props])

  const CustomTag = `${textComponent}`;

  return <CustomTag className={props._css_classes ? props._css_classes : ''}>{props.title}</CustomTag>
}
export default Heading
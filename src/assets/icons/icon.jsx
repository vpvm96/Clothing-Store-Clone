import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"

function Icon({ name }) {
  return <FontAwesomeIcon icon={doFetchFontAwesomeIcon.call(this, name)} />
}

function doFetchFontAwesomeIcon(name) {
  switch (name) {
    case "newProduct":
      return faPenToSquare
    default:
      throw new Error()
  }
}

export default Icon

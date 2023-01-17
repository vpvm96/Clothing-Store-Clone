import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare, faBagShopping } from "@fortawesome/free-solid-svg-icons"

function Icon({ name }) {
  return <FontAwesomeIcon icon={doFetchFontAwesomeIcon.call(this, name)} />
}

function doFetchFontAwesomeIcon(name) {
  switch (name) {
    case "newProduct":
      return faPenToSquare
    case "shoppingBag":
      return faBagShopping
    default:
      throw new Error()
  }
}

export default Icon

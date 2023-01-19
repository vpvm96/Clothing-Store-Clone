import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPenToSquare,
  faBagShopping,
  faCartShopping,
  faPlus,
  faMinus,
  faTrash,
  faEquals,
} from "@fortawesome/free-solid-svg-icons"

function Icon({ name }) {
  return <FontAwesomeIcon icon={doFetchFontAwesomeIcon.call(this, name)} />
}

function doFetchFontAwesomeIcon(name) {
  switch (name) {
    case "newProduct":
      return faPenToSquare
    case "shoppingBag":
      return faBagShopping
    case "shoppingCart":
      return faCartShopping
    case "plus":
      return faPlus
    case "minus":
      return faMinus
    case "trash":
      return faTrash
    case "equals":
      return faEquals
    default:
      throw new Error()
  }
}

export default Icon

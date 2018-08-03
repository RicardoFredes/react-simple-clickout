const outsideClickOptions = {
  active: false
}

export function addOutsideClickEvent(node, onClickOut) {
  if(outsideClickOptions.active){
    outsideClickOptions.onClickOut()
    removeOutsideClickEvent()
  }
  outsideClickOptions.node = node
  outsideClickOptions.onClickOut = onClickOut
  setTimeout(() => {
    outsideClickOptions.active = true
    document.addEventListener('click', handleOutsideClick, false)
  }, 0)

}

export function removeOutsideClickEvent() {
  outsideClickOptions.active = false
  document.removeEventListener('click', handleOutsideClick, false)
}

function handleOutsideClick({ target }) {
  const out = !outsideClickOptions.node.contains(target)
  if (out) {
    removeOutsideClickEvent()
    outsideClickOptions.onClickOut()
  }
}

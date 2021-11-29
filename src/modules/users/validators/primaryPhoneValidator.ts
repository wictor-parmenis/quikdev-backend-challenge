export const primaryPhoneValidator = (phone: string) => {
  let valid = true

  if (phone.slice(4, 5) !== ' ') {
    valid = false
  } else if (phone.slice(0, 1) !== '(' && phone.slice(3, 4) !== ')') {
    valid = false
  } else if (phone.length === 15 && phone.slice(10, 11) !== '-') {
    valid = false
  } else if (phone.length === 14 && phone.slice(9, 10) !== '-') {
    valid = false
  }
  return valid
}

const Label = () => {
  const element = document.createElement('label')

  element.setAttribute('for', 'fibonacci-number')
  
  element.innerText =
      'Type a sequence number to take a Fibonacci number from a specific order:'

  return element
}

export default Label

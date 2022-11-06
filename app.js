function getPassword() {
  let characters =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let passwordLength = 16
  let password = ""

  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * characters.length)

    password += characters.substring(randomNumber, randomNumber + 1)
  }
  document.getElementById("result").value = password
}

function copy() {
  // Get the text field
  var copyText = document.getElementById("result")

  // Select the text field
  copyText.select()
  copyText.setSelectionRange(0, 99999) // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value)
}

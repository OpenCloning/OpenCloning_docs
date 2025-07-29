
// A simple script that displays a random did you know message at the footer

const allMessages = [
    'You can write scripts to automate cloning, see <a href="https://github.com/manulera/OpenCloning_backend/blob/master/examples/scripting/README.md">the docs</a>.',
]

const randomMessage = allMessages[Math.floor(Math.random() * allMessages.length)]

// Set the initial message

const footer = document.getElementsByClassName('md-footer-meta__inner')[0]

const message = document.createElement('p')
message.innerHTML = '<strong>Did you know?</strong> 🤔 ' + randomMessage

footer.appendChild(message)

// The template is a bit limited in what it allows you to edit, so this
// is a simple workaround to replace the icon by a button with text

const editIcon = document.querySelector('a[title="Edit this page"]')
const editMessage = document.createElement('span')
editMessage.textContent = 'Found a mistake? Fix it in on GitHub!'
editIcon.insertBefore(editMessage, editIcon.firstChild)
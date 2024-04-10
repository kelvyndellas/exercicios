let intervalId;

function startScrolling() {
    const inputField = document.getElementById('messageInput');
    const message = inputField.value;
    let index = 0;

    intervalId = setInterval(() => {
        const firstChar = message.substring(0, 1);
        const restOfMessage = message.substring(1);
        const scrolledMessage = restOfMessage + firstChar;
        inputField.value = scrolledMessage;
        message = scrolledMessage;
    }, 200);
}

function stopScrolling() {
    clearInterval(intervalId);
}

document.getElementById('startButton').addEventListener('click', startScrolling);
document.getElementById('stopButton').addEventListener('click', stopScrolling);

2
function invertText() {
  const inputText = document.getElementById('inputTextArea').value;
  const words = inputText.split(' ');
  const invertedWords = words.reverse().join(' ');

  document.getElementById('outputTextArea').value = invertedWords;
}

document.getElementById('invertButton').addEventListener('click', invertText);


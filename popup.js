const markdownLinkText = document.getElementById('js-markdown-link-text')
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const tab = tabs[0]
  if (tab) {
    markdownLinkText.value = `[${tab.title}](${tab.url})`
    markdownLinkText.select()
  }
})

const copyButton = document.getElementById('js-copy-button')
copyButton.addEventListener('click', () => {
  navigator.clipboard.writeText(markdownLinkText.value)
    .then(() => {
      const prevTextContent = copyButton.textContent
      copyButton.textContent = 'COPY DONE!!'
      copyButton.disabled = true
      setTimeout(() => {
        copyButton.textContent = prevTextContent
        copyButton.disabled = false
        window.close()
      }, 1200)
    })
    .catch((err) => {
      console.error('Failed to copy text: ', err)
    })
})

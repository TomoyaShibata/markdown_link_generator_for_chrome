const markdownText = document.getElementById('js-markdown-text')
const scrapboxText = document.getElementById('js-scrapbox-text')
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const tab = tabs[0]
  if (tab) {
    markdownText.value = `[${tab.title}](${tab.url})`
    scrapboxText.value = `[${tab.title} ${tab.url}]`
  }
})

const copyMarkdownButton = document.getElementById('js-copy-markdown-button')
copyMarkdownButton.addEventListener('click', () => {
  navigator.clipboard.writeText(markdownText.value)
    .then(() => {
      const prevTextContent = copyMarkdownButton.textContent
      copyMarkdownButton.textContent = 'DONE!'
      copyMarkdownButton.disabled = true
      setTimeout(() => {
        copyMarkdownButton.textContent = prevTextContent
        copyMarkdownButton.disabled = false
        window.close()
      }, 1200)
    })
    .catch((err) => {
      console.error('Failed to copy text: ', err)
    })
})

const copyScrapboxButton = document.getElementById('js-copy-scrapbox-button')
copyScrapboxButton.addEventListener('click', () => {
  navigator.clipboard.writeText(scrapboxText.value)
    .then(() => {
      const prevTextContent = copyScrapboxButton.textContent
      copyScrapboxButton.textContent = 'DONE!'
      copyScrapboxButton.disabled = true
      setTimeout(() => {
        copyScrapboxButton.textContent = prevTextContent
        copyScrapboxButton.disabled = false
        window.close()
      }, 1200)
    })
    .catch((err) => {
      console.error('Failed to copy text: ', err)
    })
})

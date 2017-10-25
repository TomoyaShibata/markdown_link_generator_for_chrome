mdc.autoInit()
mdc.ripple.MDCRipple.attachTo(document.querySelector('.mdc-button'))

const markdownLinkText = document.getElementById('js-markdown-link-text')

chrome.tabs.getSelected(null, (tab) => markdownLinkText.value = `[${tab.title}](${tab.url})` )

const copyButton = document.getElementById('js-copy-button')

copyButton.addEventListener('click', () => {
  markdownLinkText.select()
  document.execCommand('copy')
  window.getSelection().removeAllRanges()

  new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 100)
  }).then(() => {
    copyButton.disabled = true
    copyButton.innerText = 'COPY DONE!'
  })

  new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 1200)
  }).then(() => window.close())
})

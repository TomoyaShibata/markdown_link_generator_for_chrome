mdc.autoInit()
mdc.ripple.MDCRipple.attachTo(document.querySelector('.mdc-button'))
//mdc.textfield.MDCTextfield.attachTo(document.querySelector('.mdc-textfield'))

chrome.tabs.getSelected(null, (tab) => {
  const title = tab.title
  const url = tab.url

  document.getElementById('js-markdown-link-text').value = `[${title}](${url})`
})

document.getElementById('js-copy-button').addEventListener('click', () => {
  const markdownLinkText = document.getElementById('js-markdown-link-text')
  markdownLinkText.select()
  document.execCommand('copy')
  window.close()
})

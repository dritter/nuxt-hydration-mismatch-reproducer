import { defineNitroPlugin } from 'nitropack/runtime/plugin'


export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html, { event }) => {
    html.head.push(`
<script>
  customElements.define('my-component', class extends HTMLElement {
    connectedCallback(){
      // Using a big enough timeout seems to work...
      // setTimeout(() => {
        this.insertAdjacentHTML('afterbegin', '<div style="background-color: red;height:100px;">This is injected via a Custom Component.</div>')
      // }, 0)
      console.log('foo', 'connectedCallback')
    }
    disconnectedCallback() {
      console.log('foo', 'disconnectedCallback')
    }
  })
</script>`);
  })
})
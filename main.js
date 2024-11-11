import './style.css'
// import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="video-container">
      <iframe class="video"
      src="https://www.youtube.com/embed/videoseries?si=CGfLz7pGdBv6sEi9&amp;list=PLZm7JLb1oQvKZ04Hn_hmB2H7Vm_8sIpg5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
`


document.querySelector('head').html = `
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-NF8BWJ4213"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-NF8BWJ4213');
</script>

`

setupCounter(document.querySelector('#counter'))

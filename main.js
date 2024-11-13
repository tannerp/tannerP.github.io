import './style.css'
// import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="video-container">
      <iframe class="video" src="https://www.youtube.com/embed/videoseries?si=cJXEBr3DQelkgms-&amp;list=PLZm7JLb1oQvLaFPVSaki9FWkkO03c-yfs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
`


document.querySelector('head').html = `
<!-- Google tag (gtag.js) -->
<script async src="https://youtube.com/playlist?list=PLZm7JLb1oQvLaFPVSaki9FWkkO03c-yfs&si=2NCM6b8AvZMCXobZ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-NF8BWJ4213');
</script>

`

setupCounter(document.querySelector('#counter'))

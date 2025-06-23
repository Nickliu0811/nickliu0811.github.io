// scripts/youtube-loop.js
hexo.extend.tag.register('youtube_loop', function(args) {
  const id = args[0];
  if (!id) return '';

  return `
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/${id}?autoplay=1&loop=1&mute=1&playlist=${id}"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen>
  </iframe>
</div>
  `;
});
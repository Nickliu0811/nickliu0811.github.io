// scripts/youtube-loop.js
// hexo.extend.tag.register('youtube_loop', function(args) {
//   const id = args[0];
//   if (!id) return '';

//   return `
// <div class="video-container">
//   <iframe
//     src="https://www.youtube.com/embed/${id}?autoplay=1&loop=1&mute=1&playlist=${id}"
//     frameborder="0"
//     allow="autoplay; encrypted-media"
//     allowfullscreen>
//   </iframe>
// </div>
//   `;
// });

hexo.extend.tag.register('youtube_loop', function(args) {
  const id = args[0];
  if (!id) return '';

  // 預設參數
  let autoplay = '1';
  let loop = '1';
  let mute = '1';

  // 處理其他參數
  args.slice(1).forEach(arg => {
    const [key, value] = arg.split('=');
    if (key === 'autoplay' && value === 'false') autoplay = '0';
    if (key === 'loop' && value === 'false') loop = '0';
    if (key === 'mute' && value === 'false') mute = '0';
  });

  // 如果 loop 啟用，要加 playlist 參數才能生效
  const playlistParam = loop === '1' ? `&playlist=${id}` : '';

  return `
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/${id}?autoplay=${autoplay}&loop=${loop}&mute=${mute}${playlistParam}"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen>
  </iframe>
</div>
  `;
});

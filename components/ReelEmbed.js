export default function ReelEmbed({ url }) {
  const src = `https://www.facebook.com/plugins/video.php?height=605&href=${encodeURIComponent(url)}&show_text=false&width=340&t=0`;
  return (
    <div className="mx-auto w-full max-w-[340px]">
      <div className="aspect-[9/16] overflow-hidden rounded-xl border border-white/10 bg-panel shadow-xl shadow-black/40">
        <iframe src={src} width="340" height="605" style={{ border: 'none', overflow: 'hidden', width: '100%', height: '100%' }}
          loading="lazy" allow="autoplay; encrypted-media; picture-in-picture; web-share" allowFullScreen title="JM Autochain reel" />
      </div>
      <a href={url} target="_blank" rel="noreferrer" className="mt-2 block text-center text-sm text-white/60 hover:text-ice">Watch on Facebook</a>
    </div>
  );
}

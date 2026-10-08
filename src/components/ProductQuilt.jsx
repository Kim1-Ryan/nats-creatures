import { useEffect, useRef, useState } from 'react';
import products from '../products.json';
import './ProductQuilt.css';
const imageUrl = (file) => import.meta.env.BASE_URL + file;

export default function ProductQuilt({ category }) {
  const items = category === 'all' ? products : products.filter(item => item.category === category);
  const emptySquareCount = Math.max(0, (category === 'all' ? 49 : 25) - items.length);
  const [selected, setSelected] = useState(null);
  const [photo, setPhoto] = useState(0);
  const dialog = useRef(null);
  const opener = useRef(null);
  const touchStart = useRef(null);
  const changePhoto = (direction) => setPhoto(current => (current + direction + selected.images.length) % selected.images.length);

  useEffect(() => {
    if (!selected) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.current.showModal();
    return () => { document.body.style.overflow = previousOverflow; };
  }, [selected]);

  function open(item, event) {
    opener.current = event.currentTarget;
    setPhoto(0);
    setSelected(item);
  }
  function close() {
    dialog.current?.close();
    setSelected(null);
    opener.current?.focus();
  }

  return <>
    <div className="quilt-container product-quilt" aria-label="Product photo gallery">
      {items.map((item, index) => <button
        type="button" className={`patch product-patch color-${index % 2 === 0 ? 'a' : 'b'}`}
        key={item.id} onClick={event => open(item, event)}
        aria-label={`View ${item.title}${item.images.length > 1 ? `, ${item.images.length} photos` : ''}`}>
        <img src={imageUrl(item.images[0])} alt={item.title} style={{ objectPosition: item.thumbnailPosition || 'center' }} loading="lazy" decoding="async" />
        {item.images.length > 1 && <span className="photo-count" aria-hidden="true">▣ {item.images.length} photos</span>}
        <span className="view-photo" aria-hidden="true">View photo</span>
      </button>)}
      {Array.from({ length: emptySquareCount }, (_, index) => <div
        key={`empty-${index}`} aria-hidden="true"
        className={`patch product-patch empty-patch color-${(items.length + index) % 2 === 0 ? 'a' : 'b'}`}
      />)}
    </div>
    {selected && <dialog ref={dialog} className="product-viewer" aria-labelledby="viewer-title"
      onCancel={event => { event.preventDefault(); close(); }}
      onClick={event => { if (event.target === event.currentTarget) close(); }}
      onKeyDown={event => {
        if (event.key === 'ArrowRight') { event.preventDefault(); changePhoto(1); }
        if (event.key === 'ArrowLeft') { event.preventDefault(); changePhoto(-1); }
      }}>
      <div className="viewer-content">
        <header className="viewer-header">
          <h2 id="viewer-title">{selected.title}</h2>
          <button type="button" className="viewer-close" onClick={close} aria-label="Close photo viewer" autoFocus>×</button>
        </header>
        <div className="viewer-stage"
          onTouchStart={event => { touchStart.current = event.touches[0].clientX; }}
          onTouchEnd={event => {
            if (touchStart.current === null) return;
            const distance = event.changedTouches[0].clientX - touchStart.current;
            if (Math.abs(distance) > 45) changePhoto(distance < 0 ? 1 : -1);
            touchStart.current = null;
          }}>
          <img className="viewer-image" src={imageUrl(selected.images[photo])} alt={`${selected.title}, photo ${photo + 1} of ${selected.images.length}`} />
          {selected.images.length > 1 && <>
            <button type="button" className="viewer-arrow previous" aria-label="Previous photo" onClick={() => changePhoto(-1)}>‹</button>
            <button type="button" className="viewer-arrow next" aria-label="Next photo" onClick={() => changePhoto(1)}>›</button>
          </>}
        </div>
        <p className="viewer-counter" aria-live="polite">{photo + 1} / {selected.images.length}</p>
        {selected.images.length > 1 && <div className="viewer-thumbnails" aria-label="Choose a photo">
          {selected.images.map((image, index) => <button type="button" key={image} aria-label={`Show photo ${index + 1}`}
            aria-pressed={index === photo} onClick={() => setPhoto(index)}>
            <img src={imageUrl(image)} alt="" />
          </button>)}
        </div>}
      </div>
    </dialog>}
  </>;
}

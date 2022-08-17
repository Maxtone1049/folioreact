export function Compo({ stext, text, pics, pic }) {
  return (
    <div className='fige'>
      <img className='fig_img' src={pic} alt='' />
      <div className='in_imge'>
        <p className='p'>{text}</p>
        <p className='smallp'>{stext}</p>
        <img src={pics} alt='' />
      </div>
    </div>
    
  );
}

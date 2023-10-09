import imagem from '../../img/bannerMid.png';

export default function BannerMid() {
    return (
        <>
            <div style={{ backgroundColor: '#10477F', height: '6px', margin: '0' }}></div>
            <img src={imagem} style={{ margin: '0', maxWidth: '100%', display: 'block' }} alt="Banner"></img>
            <div style={{ backgroundColor: '#10477F', height: '6px', margin: '0' }}></div>
        </>
    )
}

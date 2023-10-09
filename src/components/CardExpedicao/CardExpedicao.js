export default function CardExpedicao({image, titulo}){
    return(
        <>
        <div style={{display: 'block', textAlign: 'center', padding:'1%', cursor: 'pointer'}}>
            <img src={image} alt={titulo} style={{border:'1px solid #10477F' }}></img>
            <p style={{fontSize:'20', color:'#10477F', fontWeight: '500'}}>{titulo}</p>
        </div>
        </>
    )
}
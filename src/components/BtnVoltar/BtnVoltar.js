export default function BtnVoltar(){
    const handleVoltar = () => {
        window.history.back();
      };
    return(
        <div style={{backgroundColor:'#F6F1E4', display:'flex', textAlign:'left', margin: '0', paddingLeft:'5%'}}>
        <button  onClick={handleVoltar} style={{padding: '0.5rem 1rem', border:'none', borderRadius:'10px',backgroundColor:'#10477F', color:'white', fontSize:'18px', margin:'2% 0 1% 0', cursor:'pointer'}}>Voltar</button>
        </div>
    )
}
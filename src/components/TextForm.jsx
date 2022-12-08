import React,{useState} from 'react'

export default function TextForm({tital,mode,show}) {
    const [text,Settext]=useState("")
   
     
    const handleOnchange=(event)=>{

        
      Settext(event.target.value);

    }
    const handlechange=()=>{
        let newtext=text.toUpperCase();
        Settext(newtext);
        show('converted to uppercase ','danger')
       
    }
    const handlelochange=()=>{
        let newtext=text.toLowerCase();
        Settext(newtext);
        show('converted to uppercase ','success')
      
       
    }
    const count=(text)=>{
      if(text.length===0){
        return 0;
      }
      let ans=1;

      for (let i = 0; i < text.length; i++) {
        if(i+1<text.length&&text[i]===' '&&text[i+1]!=' '){
          ans+=1;
        }
        
      }
      return ans;
      

    }
  return (
    <>
      <div className="container" style={{color:mode==='white'?'gray':'dark'}}>
   
            <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">{tital}</label>
            <textarea  value={text} onChange={handleOnchange} className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
            <button  type="button" onClick={handlechange} className="btn btn-outline-secondary my-2 mx-3">Convert</button>
            <button  type="button" onClick={handlelochange} className="btn btn-outline-secondary my-2">Convert</button>
            </div>

            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>charters={count(text)} words ={text.length} </p>
                <h3>Preview</h3>
                <p>{text}</p>

            </div>
       </div>
    

</>
  )
}

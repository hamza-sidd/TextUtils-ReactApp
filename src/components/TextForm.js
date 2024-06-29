import React, {useState} from 'react'


export default function TextForm(props) {
 
  const [text, setText] = useState('enter your text');
  
  const handleOnChange=()=>{
    
    // eslint-disable-next-line no-restricted-globals
    setText(event.target.value);
  }

  const handleUpClick=()=>{
    
    let newText=text.toUpperCase();
    setText(newText)
    //props.showAlert('converted to uppercase!','success')
  }
  const handleLowClick=()=>{
    let newText=text.toLowerCase();
    setText(newText)
  }
  const handleClearClick=()=>{
    let newText=' ';
    setText(newText)
  }
  return (
    <> 
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}} >
<h1>{props.heading}</h1>
<div className="input-group">
  
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white' ,color:props.mode==='dark'?'white':'black' }} aria-label="With textarea" rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleUpClick}>convert to uppercase</button>

<button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleLowClick}>convert to lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleClearClick}>clear text</button>
    </div>
    <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"write something in Text Box above"}</p>
    </div>
    </>
  )
}

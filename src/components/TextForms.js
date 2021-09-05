import React ,{useState}from 'react'
import PropTypes from 'prop-types'


export default function TextForms(props) {
    let handleUpperCaseClick = () =>{
        console.log("uppercase btn was clicked")
        console.log(text.toUpperCase())
        setText(text.toUpperCase())
       
    }
    let textBoxChange = (event)=>{
      setText(event.target.value);

    }
    const [text,setText] = useState("Enter Text here");
    return (
        <div>
          <div className="container mt-3">
            <h1 className="mb-3">{props.textBoxHeading}</h1>
            <div className="mb-3">
              <label htmlFor="myTextBox" className="form-label">Enter your Text Here</label>
              <textarea className="form-control" value={text} onChange={textBoxChange} id="myTextBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpperCaseClick}>Convert to uppercase</button>
         </div>
        </div>
    )
}

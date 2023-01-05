import React,{useState,useRef,useEffect} from 'react';
import './UploadImage.css';
import {uploadImageUrl} from '../../../Shared/CommonStrings';
const UploadImage = (props) =>{
    const uploadFileEl = useRef(null);
    const [image,setImage] = useState(null);
    
    //TO UPLOAD MULTIPLE IMAGES
    //const [files, setFiles] = useState([]);
    useEffect(()=>{
        if(props.value){
            setImage(uploadImageUrl+props.value)
        }
    },[])
    const onChangeImage = (e) =>{
        e.preventDefault();
        if(!e.target.files[0]) return;

        const file = e.target.files[0];
        setImage(file);
        props.onChange(file);

    }
    const onClickClose = (e) =>{
        e.preventDefault();
        setImage(null);
        props.onChange(null);
    }
    const imgSrc =
        typeof (image) === 'string' 
        ? image 
        : image !== null
            ?
            URL.createObjectURL(image)
            :null
    return(
        
        <div style={{ height:200,width:150, display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            {/* <div style={{position:'relative',height:37,marginLeft:-60}}>
            </div> */}
            <button onClick={(e) => { e.preventDefault(); console.log('image clicked');uploadFileEl.current.click() }}  className="uploadBtn">Upload</button>
            <input ref={uploadFileEl}  style={{height:35,width:70,display:'none'}} type="file" onChange={(e)=>{onChangeImage(e)}} />
            <img 
                onClick={(e) => { e.preventDefault(); console.log('image clicked'); uploadFileEl.current.click() }} 
                style={{ height: 150, width: 150, marginTop: 5,boxShadow:'1px 1px 6px rgba(0,0,0,.5)' }} 
                src={imgSrc} 
            />
            <button style={{border:'none',outline:'none',background:'none',textDecoration:'underline',fontSize:14 }} onClick={(e) => { onClickClose(e) }}>close</button>

            {/* {
                files.map(file=>{
                    return <img style={{height:150,width:150,marginTop:5}} src={URL.createObjectURL(file)}/>
                })
            } */}
        </div>
    )

}

export default UploadImage;
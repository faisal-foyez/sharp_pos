import React,{useState,useRef,useEffect} from 'react';
import './UploadImages.css';
import {iconsUrl,uploadImageUrl} from '../../../Shared/CommonStrings'
const UploadImage = (props) =>{
    const uploadFileEl = useRef(null);
    //TO UPLOAD MULTIPLE IMAGES
    const [files, setFiles] = useState([]);
    const [isUploaderTop,setIsUploaderTop] = useState(false);
    useEffect(()=>{
        if(props.value.length){
            //const images = props.value.map(image => "http://localhost:3000/" + image)
            setFiles(props.value);
        }
    },[])
    const onChangeImage = (e) =>{
        if(!e.target.files[0]) return;

        const imageFiles = e.target.files;
        const imageFilesArray = []
        for (let file of imageFiles){
            imageFilesArray.push(file);
        }

        const updatedFiles = [...files,...imageFilesArray];

        //TO UPLOAD MULTIPLE IMAGES
        setFiles(updatedFiles)
        props.onChange(updatedFiles);

    }
    const onClickClose = (i) =>{
        let updatedFiles = [...files];  
        updatedFiles.splice(i,1);
        setFiles(updatedFiles);
        props.onChange(updatedFiles);
    }
    
    return(
        <>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <input type="file" ref={uploadFileEl} multiple style={{ display: 'none' }} onChange={(e) => { onChangeImage(e) }} />
                <button onClick={(e) => {e.preventDefault(); uploadFileEl.current.click() }} style={{ marginBottom: 5, border: 'none', outline: 'none', background: 'none', backgroundColor: '#a1a1a1', height: 40, width: 70, color: 'white', fontSize: 14, fontWeight: 700, borderRadius: 5 }}>Browse</button>
                <div style={{ position: 'relative',height:'150px',width:'100%', display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    {/* <div style={{position:'relative',height:37,marginLeft:-60}}>
                    </div> */}
                    {/* <button onClick={(e) => { e.preventDefault(); console.log('image clicked');uploadFileEl.current.click() }}  className="uploadBtn">Upload</button> */}
                    {
                        files.length===0?<span style={{fontSize:20,fontWeight:700,color:'rgba(0,0,0,.5)'}}>Drop Images Here</span>:null
                    }
                    <input
                        onClick={(e) => { e.preventDefault(); setIsUploaderTop(false) }}
                        onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
                        style={{ zIndex: isUploaderTop ? 100000 : null, position: 'absolute', height: '100%', width: '100%', opacity: 0 }}
                        type="file"
                        multiple
                        onChange={(e) => { onChangeImage(e) }} 
                        onDrop={() => { setIsUploaderTop(false)}}/>
                    <div 
                        onDragEnter={(e) => {setIsUploaderTop(true); }}
                        //onClick={(e) => { uploadFileEl.current.click(); }}
                        style={{zIndex:!isUploaderTop?100000:null,overflowY:'scroll', position:'absolute', height:'100%',width:'100%',boxShadow:'2px 2px 5px rgba(0,0,0,.5)',display:'flex',flexFlow:'row wrap'}}>
                    
                        {
                            files.map((file,i)=>{
                                const imgSrc =
                                    typeof (file) === 'string'
                                        ? uploadImageUrl+file
                                        : file !== null
                                            ?
                                            URL.createObjectURL(file)
                                            : null
                                return (
                                    <div style={{position:'relative'}}>
                                        <img
                                            onClick={(e)=>{e.stopPropagation();}}
                                            style={{ height: 50, width: 50, boxShadow: '1px 1px 6px rgba(0,0,0,.5)',margin:'10px 10px' }}
                                            src={imgSrc}
                                        />
                                        <img onClick={(e) => { e.stopPropagation(); e.preventDefault(); onClickClose(i);}} src={iconsUrl+"close.svg"} style={{height:17,width:17,position:'absolute',top:6,right:10}}/>

                                    </div>
                                )
                            })
                        }
                        
                    </div>
                    {/* <button style={{border:'none',outline:'none',background:'none',textDecoration:'underline',fontSize:14 }} onClick={(e) => { onClickClose(e) }}>close</button> */}

                    {/* {
                        files.map(file=>{
                            return <img style={{height:150,width:150,marginTop:5}} src={URL.createObjectURL(file)}/>
                        })
                    } */}
                </div>
            </div>
        </>
        )

}

export default UploadImage;
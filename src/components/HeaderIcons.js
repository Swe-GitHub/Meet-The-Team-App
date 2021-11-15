import React,{useState} from 'react';
import thumbnail from '../images/thumbnail.JPG';
import list from '../images/list.JPG';
import sort from '../images/sort.JPG';
import search from '../images/search.JPG';
import '../styles/Header-Icons.css';



export default function HeaderIcons(props){

    const [text, setText] = useState('');
    function handleChange(event) {
       
        if ( event.type=="keydown"){
            if(event.key == 'Enter' || event.key == ' ')
            {
                
                if(props.type==="list"){
                    props.onChange("thumbnail");
                }
                else{
                    props.onChange("list");
                }
                event.preventDefault();
                
            }
            else{
                return;
            }

        }        
        else if( event.type=="click"){
            
            props.onChange(event.target.id);
            
        }
        
    }
    function sortName(event){
        if ( event.type=="keydown"){
            if(event.key == 'Enter' || event.key == ' ')
            {
                event.preventDefault();
                props.onSort(!props.ascending);
                
            }
            else{
                return;
            }

        } 
        else if( event.type=="click"){
            
            props.onSort(!props.ascending);
        }
   
    }
    

    function searchName(){
        //fetch url containing the query for selected text
    }
  return(
    <div className="icon-panel">
    <a href="#" role="button" className="sort-link" onClick={sortName}  onKeyDown={sortName}>
          <img className="sort" src={sort} alt="sort"></img>
      </a>
      <a href="#" className="search-link" role="button" onClick={searchName}>
          <img className="search" src={search} alt="search"></img>
      </a>
      <input type="text" onChange={(e)=>setText(e.target.value)} value={text}/>
      <a href="#"role="button" onClick={handleChange} onKeyDown={handleChange}>
          {(props.type==="list")?
          <img className="img-thumbnail" id="thumbnail" src={thumbnail} alt="thumbnail"></img>:
          <img className="img-list" id="list" src={list} alt="list"></img>}
          
          
      </a>
      
    </div>
  );
}
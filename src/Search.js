import React, {useState} from 'react'
import "./Search.css"
import SearchIcon from '@material-ui/icons/Search';
import MicNoneTwoToneIcon from '@material-ui/icons/MicNoneTwoTone';
import { Button } from '@material-ui/core';
import {useHistory} from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();

    const [input, setInput]=useState("");
    const history=useHistory();

    const search = (e) =>{
        e.preventDefault();

        console.log('you hit the search button >> ',input)
    
        dispatch({
          type: actionTypes.SET_SEARCH_TERM,
          term: input,
        });

       history.push('/search')
        
    
      };

  return (
    <form className='search'>
 <div className='search_input'>
    <SearchIcon className='search_inputIcon' />
    
    <input value={input} placeholder="Search Google or type a URL" aria-live="polite" onChange={e => setInput(e.target.value)}/>
    <MicNoneTwoToneIcon/>
</div>

{!hideButtons ? (
        <div className="search_buttons">
          <Button type="submit" onClick={search} variant="outlined">
          Let me help u
          </Button>
          <Button variant="outlined">Wanna know intersting</Button>
        </div>
      ) : (
        <div className="search_buttons">
          <Button
            className="search_buttonsHidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Let me help u
          </Button>
          <Button className="search_buttonsHidden" variant="outlined">
          Wanna know intersting
          </Button>
        </div>
         )}
    </form>
  )
}

export default Search
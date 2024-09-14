import React from 'react'
import {Link} from 'react-router-dom'
import Search from './Search'
import "./SearchPage.css"
import Response from "./response";
import { useStateValue } from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";

import SearchIcon from '@material-ui/icons/Search';
import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';
import LocalOfferTwoToneIcon from '@material-ui/icons/LocalOfferTwoTone';
import ImageTwoToneIcon from '@material-ui/icons/ImageTwoTone';
import BookTwoToneIcon from '@material-ui/icons/BookTwoTone';
import RoomTwoToneIcon from '@material-ui/icons/RoomTwoTone';
import MoreVertTwoToneIcon from '@material-ui/icons/MoreVertTwoTone';


function SearchPage() {
    const [{ term /* = "tesla" */ }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term); 

    console.log(data);

  return (
    <div className='searchPage'>
        <div className='searchPage_header'>
            <Link to="/">
                <img src ="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt='check ur connection'/>
            </Link>

            <div className='searchPage_headerBody'>
                <Search hideButtons/>
              
              <div className='searchPage_options'>
              <div className='searchPage_optionsLeft'>
                <div className='searchPage_option'>
                    <SearchIcon/>
                   <Link to="/all">All</Link>
                </div>
                
                <div className='searchPage_option'>
                    <DescriptionTwoToneIcon/>
                   <Link to="/all">News</Link>
                </div>

                <div className='searchPage_option'>
                    <LocalOfferTwoToneIcon/>
                   <Link to="/all">Shopping</Link>
                </div>

                <div className='searchPage_option'>
                    <ImageTwoToneIcon/>
                   <Link to="/all">Images</Link>
                </div>

                <div className='searchPage_option'>
                    <BookTwoToneIcon/>
                   <Link to="/all">Books</Link>
                </div>

                <div className='searchPage_option'>
                    <RoomTwoToneIcon/>
                   <Link to="/all">Location</Link>
                </div>

                <div className='searchPage_option'>
                    <MoreVertTwoToneIcon/>
                   <Link to="/all">More</Link>
                </div>
                </div>

                <div className='searchPage_optionsRight'>
                    <div className='searchPage_option'>
                        <Link to="/settings">Settings</Link>
                    </div>
                    <div className='searchPage_option'>
                        <Link to="/tools">Tools</Link>
                    </div>
                </div>
                
                </div>
                </div>
            </div>

            {term && (
        <div className="searchPage_results">
          <p className="searchPage_resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map(item=>(
            <div className='searchPage_result'>
                <a classname='searchPage_resultLink' href={item.link}>
                    {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src &&(
                        <img className="searchPage_resultImage"
                        src={
                          item.pagemap?.cse_image?.length > 0 &&
                          item.pagemap?.cse_image[0]?.src
                        }
                        alt=""
                      />

                    )}

                    {item.displayLink}
                </a>
                
                <a className='searchpage_resultTitle' href={item.link}>
                    <h2>
                        {item.title}
                    </h2>
                </a>
                <p className="searchPage_resultSnippet">{item.snippet}</p>
                </div>
          ))}
          </div>
          )}

       </div>
        
  )
}

export default SearchPage
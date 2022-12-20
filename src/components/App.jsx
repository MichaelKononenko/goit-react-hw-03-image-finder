import { Component } from "react";
import { Button } from "./button/Button";
import { GlobalStyle } from "./GlobalStyle.styled";
import { ImageGallery } from "./imageGallery/ImageGallery";
import { ImageGalleryItem } from "./imageGalleryItem/ImageGalleryItem";
import { Loader } from "./loader/Loader";
import { Modal } from "./modal/Modal";
import { Searchbar } from "./searchbar/Searchbar";
import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';

// API key 30834606-0dc24151179eb34ac466f7732 

// url https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
export class App extends Component{

    API_KEY = '30834606-0dc24151179eb34ac466f7732';

    state = {
        toSearch: "",
        page: 1,
        data: [],
    }

    componentDidUpdate(){
        console.log(this.state.toSearch);
        console.log(this.state.data);
    }

    // async componentDidUpdate() {
        async findPhoto(){
        const response = await axios.get(`?q=${this.state.toSearch}&page=${this.state.page}&key=${this.API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
        this.setState({ data: response.data.hits });
      }
      
    onSubmit = event =>{
        event.preventDefault();
        const inputText = event.currentTarget.lastChild.value;
        if (this.state.toSearch === inputText) return;
        this.setState({toSearch: inputText});
        this.findPhoto();
    }

    render(){
        return(
        <div className="app">
            <Searchbar onSubmit={this.onSubmit}/>
            <ImageGallery/>
            <Loader/>
            <Button/>
            <div className="overlay" style={{display: "none"}}>
                <Modal/>
            </div>
        </div>
        )    
    }

};

import { Component } from "react";
import { Button } from "./button/Button";
import { GlobalStyle } from "./GlobalStyle.styled";
import { ImageGallery } from "./imageGallery/ImageGallery";
import { Loader } from "./loader/Loader";
import { Searchbar } from "./searchbar/Searchbar";
import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';
export class App extends Component{

    API_KEY = '30834606-0dc24151179eb34ac466f7732';

    state = {
        toSearch: "",
        page: 1,
        data: [],
        isLoading: false,
        showLoadMode: false,
    }


    async componentDidUpdate(_, prevState) {
        if(prevState.toSearch === this.state.toSearch && prevState.page === this.state.page) return;

        if(prevState.toSearch !== this.state.toSearch) this.setState({data: [], page: 1});
        this.setState({showLoadMode: false, isLoading: true});
        const response = await axios.get(`?q=${this.state.toSearch}&page=${this.state.page}&key=${this.API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
        this.setState({ data: [...this.state.data, ...response.data.hits], isLoading: false, showLoadMode: true});
      }
      
    onSubmit = event =>{
        event.preventDefault();
        const inputText = event.currentTarget.lastChild.value;
        if (this.state.toSearch === inputText) return;
        this.setState({toSearch: inputText});
    }
    
    loadMore = () => {
        this.setState({page: this.state.page + 1})
    }

    render(){
        const {isLoading, showLoadMode} = this.state;
        return(
        <div className="app">
        <GlobalStyle/>
            <Searchbar onSubmit={this.onSubmit}/>
            <ImageGallery images={this.state.data}/>
            {showLoadMode && <Button loadMore={this.loadMore}/> }
            {isLoading && <Loader/>}
        </div>
        )    
    }

};

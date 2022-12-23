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
        noMorePhoto: false,
        totalHits: 0,
    }


    async componentDidUpdate(_, prevState) {        
        if(prevState.toSearch === this.state.toSearch && prevState.page === this.state.page) return;

        try{
        this.setState({showLoadMore: false, isLoading: true});
        const response = await axios.get(`?q=${this.state.toSearch}&page=${this.state.page}&key=${this.API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
        console.log(response.data);
        this.setState({ data: [...this.state.data, ...response.data.hits], isLoading: false, showLoadMore: true, totalHits: response.data.total});

        response.data.hits.length < 12 ? this.setState({noMorePhoto: true}) : this.setState({noMorePhoto: false});
        }catch{
            this.setState({noMorePhoto:true, isLoading: false, showLoadMore: false});
        }
      }
      
    onSubmit = event =>{
        event.preventDefault();
        const inputText = event.currentTarget.lastChild.value;
        if (this.state.toSearch === inputText) return;
        if(this.state.toSearch !== inputText)  this.setState({data: [], page: 1});
        this.setState({toSearch: inputText});
        event.currentTarget.reset();
    }
    
    loadMore = () => {
        this.setState({page: this.state.page + 1})
    }

    render(){
        const {isLoading, data, noMorePhoto, totalHits} = this.state;
        return(
        <div className="app">
        <GlobalStyle/>
            <Searchbar onSubmit={this.onSubmit}/>
            <ImageGallery images={this.state.data}/>
            {totalHits > data.length && <Button loadMore={this.loadMore}/>}
            {isLoading && <Loader/>}
            {noMorePhoto && <span  style={{margin: "0 auto"}}>Oops no more photo found</span>}
        </div>
        )    
    }

};

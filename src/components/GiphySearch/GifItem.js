import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardContent } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import './GifItem.css';

// import CardActions from '@material-ui/core/CardActions';



class GifItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            category_id: '',
          img_path: '',
           
        }
    }
    
    
    componentDidMount() {
        this.getGiphy();
    };

      // Renders the entire app on the DOM
    getGiphy = () => {
          this.props.dispatch({ type: 'FETCH_GIPHY'});
    };

    favoriteBtn = () => {
        this.props.dispatch({type:'POST_GIPHY', payload: this.state})
        
    };
       
    //disable the favorite button until a category is selected
    disableBtn = () => {
        if (this.state.category === '') {
            return <Button variant="contained" color="primary" disabled>Favorite</Button>
         } else {
            return <Button className="nextBtn"
            onClick={this.favoriteBtn} variant="contained" color="primary">Favorite</Button>
        };
    }

    categoryChange = (event) => {
        this.setState({
            category_id: event.target.value,
            img_path: this.props.gif.images.downsized.url
            
        })
    }

    render() {
        return (
            <div className="container">
            <Card className="gifCard">
                <CardContent>
                    <img className="gifDispaly" src={this.props.gif.images.downsized.url} />
                </CardContent> 
                <CardActions>
                <select onChange={this.categoryChange} className="category">
                                <option />
                                <option value="1">Funny</option>
                                <option value="2">Vega</option>
                                <option value="3">Cartoon</option>
                                <option value="4">NSFW</option>
                                <option value="5">Meme</option>
                            </select>
                    {this.disableBtn()}
                    {/* <Button onClick={this.favoriteBtn} variant="contained" color="primary">Favorite</Button> */}
                </CardActions>
            </Card>
            </div>
        );
    }
}

export default connect()(GifItem);


import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            search: ''
        }
    }


    componentDidMount() {
        this.getGiphy();
      }
      // Renders the entire app on the DOM
      getGiphy = () => {
          this.props.dispatch({ type: 'FETCH_GIPHY'});
      }
    //      should be unnecessary
    //     axios.get('/').then((result) => {
    //       let action = {type: 'FETCH_GIPHY', payload: result.data.data};
    //       this.props.dispatch(action);
    //       console.log(action);
    //     }).catch((error) => {
    //       console.log('GET Error',error);
    //     })
    //   }
    handleNameChange = event => {
        console.log('Search')
        this.setState({
                search: event.target.value,
        });
    }

    // giphyFavorite = () => {

    // }

      render() {
        return (
     
        <div className="container">  
            <Card className="giphyDisplay" >
                <CardContent>
                    <div>

                        {/* {this.props.reduxState.displayList.map((gif)=> {
                                return <PlantRow key={gif.id} gif={gif} /> */}
                      
                    </div>
                </CardContent>
                <CardActions>
                    {/* <Button onClick={giphyFavorite}>Favorite</Button> */}
                </CardActions>
            </Card>     
        </div>
        );
      }
    }
const mapStoreToProps = reduxStore => ({
        reduxStore,
    });
  
export default connect(mapStoreToProps)(Search);
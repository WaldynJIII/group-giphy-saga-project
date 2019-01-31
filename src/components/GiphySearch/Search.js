import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Search extends Component {
    componentDidMount() {
        this.getGiphy();
      }
      // Renders the entire app on the DOM
      getGiphy = () => {
        axios.get('/').then((result) => {
          let action = {type: 'GET_GIPHY', payload: result.data.data};
          this.props.dispatch(action);
        }).catch((error) => {
          console.log('GET Error',error);
        })
      }
      
      render() {
        return (
     
        <div className="container">  add
            <Card className="giphyDisplay" >
                <CardContent >
                    <div>

                        {/* this will display 1 image at a time needs to be map() */}
                        {this.props.random.images && 
                        <img src={this.props.random.images.downsized.url} />}
                    </div>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>     
        </div>
        );
      }
    }
    
    const mapReduxStoreToProps = (reduxStore) => ({
      random: reduxStore.random
    });
    
export default connect(mapStateToProps)(Search);
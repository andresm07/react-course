import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    renderDish(dish) {
        if(dish != null) {
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        } else {
            return(
                <div></div>
            );
        }
    }

    renderComments(comments) {
        if(comments != null) {
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(function(comment) {
                        var date = new Date(comment.date);
                        return(
                            <ul className="list-unstyled" key={comment.id}>
                                <li>{comment.comment} <br></br>-- {comment.author} , {date.toISOString().substring(0, 10)}</li>
                            </ul>
                        );
                    })}
                </div>
            );
        } else {
            return(
                <div></div>
            );
        }
    }

    render() {
        console.log(this.props.dish);
        return(
            <div className="container">
                <div className="row">
                    {this.renderDish(this.props.dish)}
                    {this.renderComments(this.props.dish!= null?this.props.dish.comments:null)}
                </div>
            </div>
        );
    }
}

export default DishDetail;
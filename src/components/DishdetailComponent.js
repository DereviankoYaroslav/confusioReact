import { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';



class DishDetail extends Component{

    componentDidUpdate(){
        console.log('update');
    }

    renderComments(dish){
        const comments = dish.comments.map((comment) => {
            return (
                <ul key={comment.id} className = "list-unstyled">
                    <li>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </li>
                </ul>
            );
        });

        return(
            <div>
                <h4>Comments</h4>
                {comments}
            </div>
        );
    }

    render() {

        if (this.props.selectedDish != null){
            const details = this.props.selectedDish;
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={details.image} alt={details.name} />
                            <CardBody>
                                <CardTitle tag="h5">{details.name}</CardTitle>
                                <CardText>{details.description}</CardText>
                            </CardBody>
                        </Card> 
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            {this.renderComments(details)}
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}

export default DishDetail;
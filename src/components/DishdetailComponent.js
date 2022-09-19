import { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';



class DishDetail extends Component{

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    renderComments(dish){
        const comments = dish.comments.map((comment) => {
            return (
                <div key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {comment.date.slice(0, 10)}</p>
                </div>
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
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}

export default DishDetail;
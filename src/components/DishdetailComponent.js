import { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';



class DishDetail extends Component{

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        /* const details = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card> 
              </div>
            );
        }); */


        console.log(this.props.selectedDish);
        const details = this.props.selectedDish;
        return (
            <div key={details.id}>
            <Card>
                <CardImg width="100%" src={details.image} alt={details.name} />
                <CardBody>
                    <CardTitle>{details.name}</CardTitle>
                    <CardText>{details.description}</CardText>
                </CardBody>
            </Card> 
            </div>
        );
    }
}

export default DishDetail;
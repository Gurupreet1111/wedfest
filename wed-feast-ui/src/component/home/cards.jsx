import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import segments from '../segments.json';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import flowers from "../../assets/images/flowers.jpg";
import tulip from "../../assets/images/yellowTulip.png";
import Button from 'react-bootstrap/Button';

const Cards = () => {
  let arr=[1,2,5,6,9,10,13,14,17,18,21,22,25,26];
  let cnt=1;
  let segArr=segments.segments.map((item, i)=>{
        if(i%3==0){
            cnt++;
        }
        item.row=cnt;
        return item
  });

  return (
    <div className="container">
      <CardGroup>
        {
          <Row xs={1} md={3} className="g-4">
            {segArr.map((item, i) => (
              <Col>
                {item.row % 2 ==0?
                  <Card style={{ display: "flex", flexDirection: "row",minHeight:"200px",maxHeight:"200px"}}>
                    <Card.Img style={{flex:1,maxWidth:"50%"}} variant="top" src={process.env.PUBLIC_URL + '/' +item.img} />
                    <Card.Body  style={{flex:1,maxWidth:"50%",padding: "0.2rem 1rem"}}>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>
                       <ListGroup className="list-group-flush">
                         {item.description.map((obj,i)=>{
                           if(i<=2){
                            return <ListGroup.Item>
                                    <Card.Link href={`/filtersegment/${item.id}/${obj.id}`}>{obj.name}</Card.Link>
                                    </ListGroup.Item>
                           }
                         })}
                          </ListGroup>
                      </Card.Text>
                       <Card.Link href="#">more...</Card.Link>
                    </Card.Body>
                 
                  </Card> :
                  <Card style={{ display: "flex", flexDirection: "row",minHeight:"200px",maxHeight:"200px" }}>
                    <Card.Body  style={{flex:1,maxWidth:"50%",padding: "0.2rem 1rem"}}>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>
                      <ListGroup className="list-group-flush">
                      {item.description.map((obj,i)=>{
                              if(i<=2){
                             // return <li>{obj.name}</li>
                             return <ListGroup.Item>
                                    <Card.Link href={`/filtersegment/${item.id}/${obj.id}`}>{obj.name}</Card.Link>
                                    </ListGroup.Item>
                           }
                         })}
                      </ListGroup>
                      {/* {item.description.map((obj,i)=>{
                              if(i<=3){
                              return <li>{obj.name}</li>
                           }
                         })} */}
                      </Card.Text>
                       <Card.Link href="#">more...</Card.Link>
                    </Card.Body>
                    <Card.Img  style={{flex:1,maxWidth:"50%"}} variant="top"  src={process.env.PUBLIC_URL + '/' +item.img}  />

                  </Card>
                }
              
              </Col>
              
            ))}
          </Row>
        }
      </CardGroup>
    </div>
  )
}

export default Cards;
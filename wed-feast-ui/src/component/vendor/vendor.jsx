import React, { Component,useState } from 'react';
import Form from 'react-bootstrap/Form';
import Catalog from './catalog/catalog';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Vendor = () => {
    const [showCatalog,setShowCatalog] = useState(false);
    const onClickCatalog = () => {
        setShowCatalog(!showCatalog);
    }
    return (

        <div style={{ margin: "5%" }}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>WhatsApp Number</Form.Label>
                    <Form.Control type="email" placeholder="Enter WhatsApp Number" />
                    {/* <Form.Text className="text-muted">
            We'll never share your Whatsapp number with anyone else.
          </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Business Name</Form.Label>
                    <Form.Control type="input" placeholder="Enter  Firstname Lastname" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Business Category</Form.Label>
                    <Form.Control type="input" placeholder="Enter  Business Category" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Alternate contact no</Form.Label>
                    <Form.Control type="input" placeholder="Enter alternate contact no" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Text className="text-muted">
                        Add Address / Location
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="input" placeholder="Enter city" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Street Address</Form.Label>
                    <Form.Control type="input" placeholder="Enter  street Address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Pincode</Form.Label>
                    <Form.Control type="input" placeholder="Enter pincode" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>State</Form.Label>
                    <Form.Control type="input" placeholder="Enter State" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Add the area you serve</Form.Label>
                    <Form.Control type="input" placeholder="Enter add the area you serve" />
                </Form.Group>

                <Button
                    onClick={onClickCatalog}
                >
                    Add New Catalog <i class="fa fa-plus-circle" aria-hidden="true"></i>
                </Button>
                {showCatalog == true ? 
                <Catalog 
                    show={showCatalog}
                    close={onClickCatalog}
                    /> : null}
                {/* <Button variant="primary" type="submit">
          Submit
        </Button> */}
            </Form>
        </div>
    )
}
export default Vendor;

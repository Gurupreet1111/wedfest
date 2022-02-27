import React, { Component, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import img3 from "../../../assets/images/3.png";

import Dropzone from 'react-dropzone-uploader';
import 'react-dropzone-uploader/dist/styles.css';

const Catalog = (props) => {
    const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }

    // Return the current status of files being uploaded
    const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }

    // Return array of uploaded files after submit button is clicked
    const handleSubmit = (files, allFiles) => {
        console.log(files.map(f => f.meta))
        allFiles.forEach(f => f.remove())
    }

    return (
        <>
            <Modal
                size="lg"
                show={props.show}
                onHide={() => {
                    props.close();
                }}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Add New Catalog
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Add Title</Form.Label>
                                <Form.Control type="email" placeholder="" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Add Description</Form.Label>
                                <Form.Control type="email" placeholder="" />
                            </Form.Group>
{/* 
                            <Button
                                //onClick={onClickCatalog}
                            >
                                Add Images <i class="fa fa-plus-circle" aria-hidden="true"></i>
                            </Button> */}
                        </Form>

                    </>
                    <Dropzone
                        getUploadParams={getUploadParams}
                        onChangeStatus={handleChangeStatus}
                        onSubmit={handleSubmit}
                        accept="image/*,audio/*,video/*"
                    />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Catalog;
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Modal, Form, InputGroup } from "react-bootstrap";
import { connect } from "react-redux";

import { postArticle } from "../../actions/articles";

class PostArticle extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  state = {
    show: false,
    title: "",
    body: ""
  };

  onChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  handleClose() {
    this.setState({ show: false, title: "", body: "" });
  }

  handleShow() {
    this.setState({
      show: true
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const postArticle = {
      title: this.state.title,
      body: this.state.body
    };
    this.props.postArticle(postArticle);
    this.handleClose();
  };

  render() {
    return (
      <div>
        <div variant="primary" onClick={this.handleShow}>
          POST AN ARTICLE
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Post an Article</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control
                    type="text"
                    name="title"
                    onChange={this.onChange}
                    value={this.state.title}
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group>
                <Form.Label>Text</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control
                    as="textarea"
                    type="text"
                    name="body"
                    onChange={this.onChange}
                    value={this.state.body}
                  />
                </InputGroup>
              </Form.Group>

              <div
                style={{
                  textAlign: "right"
                }}
              >
                <Button
                  variant="primary"
                  style={{
                    backgroundColor: "#da9446",
                    border: "none",
                    marginLeft: "20px"
                  }}
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

PostArticle.propTypes = {
  postArticle: PropTypes.func.isRequired
};

export default connect(
  null,
  { postArticle }
)(PostArticle);

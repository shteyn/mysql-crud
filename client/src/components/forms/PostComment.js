import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Modal, Form, InputGroup } from "react-bootstrap";
import { connect } from "react-redux";

import { postComment } from "../../actions/comments";

class PostComment extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  state = {
    show: false,
    body: ""
  };

  onChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  handleClose() {
    this.setState({ show: false, body: "" });
  }

  handleShow() {
    this.setState({
      show: true
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const newComment = {
      article_id: this.props.articleId,
      body: this.state.body
    };
    this.props.postComment(newComment);
    this.handleClose();
  };

  render() {
    return (
      <div>
        <div variant="primary" onClick={this.handleShow}>
          Pots a comment
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Your comment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
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
                  Save Changes
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

PostComment.propTypes = {
  postComment: PropTypes.func.isRequired
};

export default connect(
  null,
  { postComment }
)(PostComment);

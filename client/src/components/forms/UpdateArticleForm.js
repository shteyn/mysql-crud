import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Modal, Form, InputGroup } from "react-bootstrap";
import { connect } from "react-redux";

import { updateArticle } from "../../actions/articles";

class UpdateArticleForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.titleRef = React.createRef();
    this.bodyRef = React.createRef();
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

  static defaultProps = {
    initialValue: 0
  };

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({
      show: true
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const updatedArticle = {
      id: this.props.article.id,
      title: this.titleRef.current.value,
      body: this.bodyRef.current.value
    };
    this.props.updateArticle(updatedArticle);
    this.handleClose();
  };

  render() {
    return (
      <div>
        <div variant="primary" onClick={this.handleShow}>
          Update Article
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Article</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label>Tilte</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control
                    ref={this.titleRef}
                    type="text"
                    name="title"
                    onChange={this.onChange}
                    defaultValue={this.props.article.title}
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group>
                <Form.Label>Text</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control
                    ref={this.bodyRef}
                    as="textarea"
                    type="text"
                    name="body"
                    onChange={this.onChange}
                    defaultValue={this.props.article.body}
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

UpdateArticleForm.propTypes = {
  updateArticle: PropTypes.func.isRequired
};

export default connect(
  null,
  { updateArticle }
)(UpdateArticleForm);

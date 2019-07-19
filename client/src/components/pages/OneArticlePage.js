import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { getAllComments } from "../../actions/comments";
import { getOneArticle } from "../../actions/articles";

import UpdateArticleForm from "../forms/UpdateArticleForm";
import PostComment from "../forms/PostComment";

class OneArticlePage extends Component {
  componentDidMount() {
    this.props.getOneArticle(this.props.match.params.id).then(() => {
      this.props.getAllComments();
    });
  }

  render() {
    let { oneArticle, allComments } = this.props;
    return (
      <div>
        <Link to="/">Back to Articles</Link>
        <Card>
          <Card.Title className="m-4">{oneArticle.title}</Card.Title>
          <Card.Body>
            <Card.Text>{oneArticle.body}</Card.Text>
            <Button className="mr-2" size="sm" variant="dark">
              <UpdateArticleForm article={oneArticle} />
            </Button>
            <Button
              className="m-2"
              size="sm"
              variant="warning"
              style={{ backgroundColor: "none" }}
            >
              <PostComment articleId={oneArticle.id} />
            </Button>
          </Card.Body>
          <Card.Footer className="text-muted">
            {allComments.map(oneComment => {
              if (oneComment.article_id === oneArticle.id) {
                return (
                  <div key={oneComment.id}>Comment: "{oneComment.body} "</div>
                );
              }
            })}
          </Card.Footer>
        </Card>
      </div>
    );
  }
}

OneArticlePage.propTypes = {
  oneArticle: PropTypes.object.isRequired,
  getOneArticle: PropTypes.func.isRequired,
  getAllComments: PropTypes.func.isRequired,
  allComments: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    oneArticle: state.oneArticle.oneArticle,
    allComments: state.comments.allComments
  };
}

export default connect(
  mapStateToProps,
  { getOneArticle, getAllComments }
)(OneArticlePage);

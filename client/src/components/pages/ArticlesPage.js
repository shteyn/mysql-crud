import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { getAllArticles, deleteArticle } from "../../actions/articles";

import PostArticle from "../forms/PostArticle";

class ArticlesPage extends Component {
  componentDidMount() {
    this.props.getAllArticles();
  }

  deleteArticle = id => this.props.deleteArticle(id);

  render() {
    let { allArticles } = this.props;
    return (
      <div>
        <div
          style={{
            margin: "50px",
            textAlign: "center"
          }}
        >
          <Button size="sm" variant="info">
            <PostArticle />
          </Button>
        </div>

        {allArticles.map((oneArticle, key) => {
          return (
            <Card key={key} className="m-4">
              <Link to={`/${oneArticle.id}`}>
                <Card.Title className="m-4">{oneArticle.title}</Card.Title>
              </Link>
              <Card.Body>
                <Card.Text>{oneArticle.body}</Card.Text>
                <Button
                  className="m-2"
                  size="sm"
                  variant="danger"
                  onClick={id => this.deleteArticle(oneArticle.id)}
                >
                  Delete Article
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}

ArticlesPage.propTypes = {
  allArticles: PropTypes.array.isRequired,
  getAllArticles: PropTypes.func.isRequired,
  deleteArticle: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    allArticles: state.articles.allArticles
  };
}

export default connect(
  mapStateToProps,
  { getAllArticles, deleteArticle }
)(ArticlesPage);

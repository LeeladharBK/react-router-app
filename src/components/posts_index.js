import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import _ from "lodash";
// Link is used to navigate similar  to an anchor tag
import { Link } from "react-router-dom";

class PostsIndex extends Component {
  // React lifecycle method - will be called automatically by react
  componentDidMount() {
    this.props.fetchPosts();
  }

  // helper funtions to render Posts
  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>

        <h3>Posts Index</h3>
        <ul className="list-group">{this.renderPosts()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostsIndex);

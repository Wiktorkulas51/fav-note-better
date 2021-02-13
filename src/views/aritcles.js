import React from "react";
import GridTemplate from "../templates/GridTemplate";
import { connect } from "react-redux";
import Card from "../components/molecules/Cards";
import { PropTypes } from "prop-types";

const Articles = ({ articles }) => (
  <GridTemplate pageContext="articles">
    <>
      {articles.map(({ title, content, articleUrl, created, id }) => (
        <Card
          cardType="articles"
          id={id}
          title={title}
          content={content}
          articleUrl={articleUrl}
          created={created}
          key={id}
        />
      ))}
    </>
  </GridTemplate>
);

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
      articleUrl: PropTypes.string.isRequired,
    }),
  ),
};

Articles.defaultProps = {
  articles: [],
};

const mapStateToProps = ({ articles }) => ({ articles });

export default connect(mapStateToProps)(Articles);

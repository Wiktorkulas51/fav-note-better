import React from "react";
import GridTemplate from "../templates/GridTemplate";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import Card from "../components/molecules/Cards";

const Twitters = ({ twitters }) => (
  <GridTemplate pageType="twitters">
    <>
      {twitters.map(({ title, content, twitterName, created, id }) => (
        <Card
          cardType="twitters"
          id={id}
          title={title}
          content={content}
          twitterName={twitterName}
          created={created}
          key={title}
        />
      ))}
    </>
  </GridTemplate>
);

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      twitterName: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Twitters.defaultProps = {
  twitters: [],
};

console.log(Card);

const mapStateToProps = ({ twitters }) => ({ twitters });

export default connect(mapStateToProps)(Twitters);

import React, { Component } from "react";
import GridTemplate from "../templates/GridTemplate";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import Card from "../components/molecules/Cards";
import { fetchItems } from "../actions";

class Twitters extends Component {
  componentDidMount() {
    const { fetchTwitters } = this.props;
    fetchTwitters();
  }
  render() {
    const { twitters } = this.props;

    return (
      <GridTemplate pageContext="twitters">
        <>
          {twitters.map(({ title, content, twitterName, created, _id: id }) => (
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
  }
}

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      twitterName: PropTypes.string.isRequired,
    }),
  ),
};

Twitters.defaultProps = {
  twitters: [],
};

const mapStateToProps = ({ twitters }) => ({ twitters });

const mapDispatchToProps = (dispatch) => ({
  fetchTwitters: () => dispatch(fetchItems("twitters")),
});

export default connect(mapStateToProps, mapDispatchToProps)(Twitters);

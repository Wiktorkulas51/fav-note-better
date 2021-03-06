import React from "react";
import GridTemplate from "../templates/GridTemplate";
import Card from "../components/molecules/Cards";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

const Notes = ({ notes }) => (
  <GridTemplate pageContext="notes">
    <>
      {notes.map(({ title, content, created, id }) => (
        <Card
          cardType="notes"
          id={id}
          title={title}
          content={content}
          created={created}
          key={title}
        />
      ))}
    </>
  </GridTemplate>
);

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Notes.defaultProps = {
  notes: [],
};

const mapStateToProps = ({ notes }) => ({ notes });

export default connect(mapStateToProps)(Notes);

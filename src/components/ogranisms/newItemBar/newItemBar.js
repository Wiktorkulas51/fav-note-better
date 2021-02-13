import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Inpute from "../../atoms/Inpute/Inpute";
import Button from "../../atoms/button/Button";
import withContext from "../../../hoc/withContext";
import Heading from "../../atoms/Heading/Heading";
import { theme } from "../../../theme/mainTheme";
import { connect } from "react-redux";
import { addItem as addItemAction } from "../../../actions/index";
import { Formik, Form } from "formik";

const StyledTextArea = styled(Inpute)`
  margin: 30px 0px 100px;
  border-radius: 20px;
  height: 30vh;
`;

const StyledWrapper = styled.div`
  border-left: 10px solid ${({ activecolor }) => theme[activecolor]};
  z-index: 99999;
  position: fixed;
  display: flex;
  padding: 100px 50px;
  flex-direction: column;
  right: 0;
  top: 0;
  height: 100vh;
  width: 680px;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: translate(${({ isVisible }) => (isVisible ? "0" : "100%")});
  transition: transform 0.3s ease-in-out;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled(Inpute)`
  margin-top: 30px;
`;

const NewItemBar = ({ pageContext, isVisible, addItem, handleClose }) => (
  <StyledWrapper isVisible={isVisible} activecolor={pageContext}>
    <Heading Big>Create new {pageContext}</Heading>
    <Formik
      initialValues={{ title: "", content: "", articleUrl: "", twitterName: "", created: "" }}
      onSubmit={(values) => {
        addItem(pageContext, values);
        handleClose();
      }}
    >
      {({ values, handleChange, handleBlur }) => (
        <StyledForm>
          <StyledInput
            type="text"
            name="title"
            placeholder="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          {pageContext === "twitters" && (
            <StyledInput
              placeholder="twitter name eg. hello_roman"
              type="text"
              name="twitterName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.twitterName}
            />
          )}
          {pageContext === "articles" && (
            <StyledInput
              placeholder="link"
              type="text"
              name="articleUrl"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.articleUrl}
            />
          )}
          <StyledTextArea
            name="content"
            as="textarea"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.content}
          />
          <Button type="submit" activecolor={pageContext}>
            Add Note
          </Button>
        </StyledForm>
      )}
    </Formik>
  </StyledWrapper>
);

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(["notes", "twitters", "articles"]),
  isVisible: PropTypes.bool,
  addItem: PropTypes.func.isRequired,
};

NewItemBar.defaultProps = {
  pageContext: "notes",
  isVisible: false,
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (itemType, item) => dispatch(addItemAction(itemType, item)),
});

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));

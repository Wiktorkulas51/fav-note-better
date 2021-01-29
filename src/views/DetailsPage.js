import React, { Component } from "react";
import DetailsTemplate from "../templates/DetailsTemplate";
import { routes } from "../routes/index";

class DetailsPage extends Component {
  state = {
    pageType: "notes",
  };

  componentDidMount() {
    switch (this.props.match.path) {
      case routes.twitter:
        this.setState({ pageType: "twitters" });
        break;
      case routes.article:
        this.setState({ pageType: "articles" });
        break;
      case routes.note:
        this.setState({ pageType: "notes" });
        break;
      default:
        console.log("Something went wrong with matching paths");
        break;
    }
  }

  render() {
    const dummyArticle = {
      id: 1,
      title: "Wake me up when Vue ends",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
      twitterName: "hello_roman",
      articleUrl: "https://youtube.com/helloroman",
      created: "1 day",
    };

    const { pageType } = this.state;

    return (
      <DetailsTemplate
        pageType={pageType}
        title={dummyArticle.title}
        created={dummyArticle.created}
        content={dummyArticle.content}
        articleUrl={dummyArticle.articleUrl}
        twitterName={dummyArticle.twitterName}
      />
    );
  }
}

export default DetailsPage;

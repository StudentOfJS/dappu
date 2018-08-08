import styled from "../../theme";

const VerticalTimeline = styled.div`
  width: 95%;
  max-width: 1170px;
  margin: 2em auto;
  position: relative;
  padding: 2em 0;
  &:after {
    /* clearfix */
    content: "";
    display: table;
    clear: both;
  }
  &:before {
    /* this is the vertical line */
    content: "";
    position: absolute;
    top: 0;
    left: 18px;
    height: 100%;
    width: 4px;
    background: white;
  }

  @media only screen and (min-width: 1170px) {
    margin-top: 3em;
    margin-bottom: 3em;
    width: 90%;
    &:before {
      left: 50%;
      margin-left: -2px;
    }
  }
`;

export default VerticalTimeline;

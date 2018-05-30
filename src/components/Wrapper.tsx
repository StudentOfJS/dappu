import styled from "../theme"

export default styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-areas: 
    "nav"
    "hero"
    "about"
    "team"
    "sidebar"
    "footer";
  @media (min-width: 700px) {
    grid-template-columns: 1fr 3fr;
    grid-template-areas: 
      "nav     nav"
      "hero    hero"
      "sidebar about"
      "sidebar team"
      "footer  foooter"
    }
    @media (min-width: 500px) {
      grid-template-columns: 1fr 4fr 1fr;
      grid-template-areas: 
        "nav    hero    hero"
        "nav    about   about"
        "nav    team    team"
        "nav    footer  footer"
    }
`
import styled from "styled-components"

export const StyledPortfolio = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`

export const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  h3 {
    margin: 1rem 0;
  }

  a {
    margin-bottom: 1rem;
  }
`

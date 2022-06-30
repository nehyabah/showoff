import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 4rem 0rem;

  h3 {
    left: 50%;
    color: #2e4057;
    text-align: center;
    font-weight: 500;
    font-size: 2rem;
    margin-bottom: 0.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 3rem;
    position: absolute;
    left: 0;
    width: 100%;
    /* height:20% ; */
    /* object-fit:cover ; */
  }

  p {
    /* position: relative; */
    left: 50%;
    color: #247ba0;
    text-align: center;
    font-weight: 500;
    font-size: 1rem;
    margin-bottom: 0.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

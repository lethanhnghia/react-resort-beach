import styled from "styled-components";

export const FiterSection = styled.section`
  width: 100%;
  padding: 4rem 0;
`;

export const FilterHead = styled.h1`
  text-align: center;
  padding: 2rem 0;
`;

export const FilterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1.3fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

export const Filter = styled.div`
  margin: 0 auto;
`;

export const SelectTitle = styled.label`
  display: block;
`;

export const Select = styled.select``;

export const SelectItem = styled.option``;

export const PriceContainer = styled.div`
  margin: 0 auto;
`;

export const PriceLabel = styled.label`
  display: block;
`;

export const PriceRange = styled.input``;

export const SizeContainer = styled.div`
  margin: 0 auto;
`;

export const SizeItemContainer = styled.div``;

export const SizeLabel = styled.label``;

export const SizeInputItem = styled.input`
  width: 100px;
`;

export const StickBoxContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const StickBoxItem = styled.div`
  display: flex;
  align-items: center;
`;

export const StickBoxTitle = styled.label`
  margin-left: 10px;
`;

export const Box = styled.input`
  width: 10px;
  height: 10px;
`;

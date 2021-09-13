import React from "react";

import { useContext } from "react";
import { MyContext } from "./context";
import {
  Box,
  Filter,
  Select,
  SizeLabel,
  PriceLabel,
  SelectItem,
  FilterHead,
  PriceRange,
  SelectTitle,
  FiterSection,
  StickBoxItem,
  StickBoxTitle,
  SizeContainer,
  SizeInputItem,
  PriceContainer,
  FilterContainer,
  SizeItemContainer,
  StickBoxContainer,
} from "./RoomFilterElement";

const itemSort = (objects, item) => {
  const list = [...new Set(objects.map((object) => object[item]))];
  if (item === "type") list.push("all");
  return list;
};

const RoomFilter = () => {
  const { rooms, filter, handleFilterRoom } = useContext(MyContext);

  const {
    pets,
    type,
    price,
    minSize,
    maxSize,
    minPrice,
    maxPrice,
    capacity,
    breakfast,
  } = filter;

  const typeList = itemSort(rooms, "type");

  const capacityList = itemSort(rooms, "capacity");

  return (
    <FiterSection>
      <FilterHead>SearchRoom</FilterHead>
      <FilterContainer>
        {/* type */}
        <Filter>
          <SelectTitle htmlFor="type">Room Type</SelectTitle>
          <Select
            id="type"
            name="type"
            value={type}
            onChange={(e) => handleFilterRoom(e.currentTarget)}
          >
            {typeList.map((t, index) => (
              <SelectItem value={t} key={index}>
                {t}
              </SelectItem>
            ))}
          </Select>
        </Filter>

        {/* Capacity */}
        <Filter>
          <SelectTitle htmlFor="capacity">Guests</SelectTitle>
          <Select
            id="capacity"
            name="capacity"
            value={capacity}
            onChange={(e) => handleFilterRoom(e.currentTarget)}
          >
            {capacityList.map((t, index) => (
              <SelectItem value={t} key={index}>
                {t}
              </SelectItem>
            ))}
          </Select>
        </Filter>

        {/* price range */}
        <PriceContainer>
          <PriceLabel htmlFor="price">{`Room price $${price}`}</PriceLabel>
          <PriceRange
            id="price"
            name="price"
            type="range"
            value={price}
            min={minPrice}
            max={maxPrice}
            onChange={(e) => handleFilterRoom(e.currentTarget)}
          ></PriceRange>
        </PriceContainer>

        {/* size range */}
        <SizeContainer>
          <SizeLabel htmlFor="size">Room Size</SizeLabel>
          <SizeItemContainer id="size">
            <SizeInputItem
              name="minSize"
              value={minSize || ""}
              onChange={(e) => handleFilterRoom(e.currentTarget)}
            ></SizeInputItem>
            <SizeInputItem
              type="number"
              name="maxSize"
              value={maxSize || ""}
              onChange={(e) => handleFilterRoom(e.currentTarget)}
            ></SizeInputItem>
          </SizeItemContainer>
        </SizeContainer>
        {/* stick box */}
        <StickBoxContainer>
          <StickBoxItem>
            <Box
              id="breakfast"
              type="checkbox"
              name="breakfast"
              value={breakfast}
              onClick={(e) => handleFilterRoom(e.currentTarget)}
            />
            <StickBoxTitle htmlFor="breakfast">Breakfast</StickBoxTitle>
          </StickBoxItem>
          <StickBoxItem>
            <Box
              id="pets"
              name="pets"
              value={pets}
              type="checkbox"
              onClick={(e) => handleFilterRoom(e.currentTarget)}
            />
            <StickBoxTitle htmlFor="pets">Pets</StickBoxTitle>
          </StickBoxItem>
        </StickBoxContainer>
      </FilterContainer>
    </FiterSection>
  );
};

export default RoomFilter;

import React from "react";

import { useState, useEffect } from "react";
import { Client } from "../Contentful.js";

export const MyContext = React.createContext();

const Provider = (props) => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [singleRoom, setSingleRoom] = useState({});
  const [filterRoom, setFilterRoom] = useState([]);
  const [featureRooms, setFeatureRooms] = useState([]);
  const [filter, setFilter] = useState({
    price: 0,
    minSize: 0,
    maxSize: 0,
    type: "all",
    minPrice: 0,
    maxPrice: 0,
    capacity: 0,
    pets: false,
    breakfast: false,
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async function () {
    try {
      let response = await Client.getEntries({
        content_type: "beachResortRoom",
      });

      const allRooms = formatData(response.items);
      const minSize = Math.min(...allRooms.map((room) => room.size));
      const maxSize = Math.max(...allRooms.map((room) => room.size));
      const minPrice = Math.min(...allRooms.map((room) => room.price));
      const maxPrice = Math.max(...allRooms.map((room) => room.price));
      const capacity = Math.min(...allRooms.map((room) => room.capacity));

      setRooms(allRooms);

      const newFilter = { ...filter };
      newFilter.minSize = minSize;
      newFilter.maxSize = maxSize;
      newFilter.minPrice = minPrice;
      newFilter.maxPrice = maxPrice;
      newFilter.capacity = capacity;
      setFilter(newFilter);

      const NewfeatureRooms = allRooms.filter((room) => room.featured === true);
      setFeatureRooms(NewfeatureRooms);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    // update filterRoom whenever update filter.
    const {
      pets,
      type,
      price,
      minSize,
      maxSize,
      capacity,
      minPrice,
      breakfast,
    } = filter;
    let newRooms = [...rooms];

    if (type !== "all") {
      newRooms = newRooms.filter((r) => r.type === type);
    }
    if (capacity !== 1) {
      newRooms = newRooms.filter((r) => r.capacity === capacity);
    }
    if (price > minPrice) {
      newRooms = newRooms.filter((r) => r.price >= price);
    }
    if (breakfast === true) {
      newRooms = newRooms.filter((r) => r.breakfast === true);
    }
    if (pets === true) {
      newRooms = newRooms.filter((r) => r.pets === true);
    }

    newRooms = newRooms.filter((r) => r.size >= minSize && r.size <= maxSize);
    setFilterRoom(newRooms);
  }, [
    filter.type,
    filter.capacity,
    filter.price,
    filter.minSize,
    filter.maxSize,
    filter.breakfast,
    filter.pets,
  ]);

  const formatData = (items) => {
    return items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((ima) => ima.fields.file.url);
      return { ...item.fields, id, images };
    });
  };

  const getRoom = (slug) => {
    const totalRoom = [...rooms];
    const singleRoom = totalRoom.find((room) => room.slug === slug);
    setSingleRoom(singleRoom);
  };

  const handleFilterRoom = ({ name, value }) => {
    // handle function just update state
    let valueFormat;

    if (name === "breakfast" || name === "pets") {
      valueFormat = !(value === "true");
    } else {
      valueFormat = name === "type" ? value : parseInt(value);
    }

    const newFilter = { ...filter };
    newFilter[name] = valueFormat;
    setFilter(newFilter);
  };

  return (
    <MyContext.Provider
      value={{
        rooms,
        filter,
        getRoom,
        loading,
        singleRoom,
        filterRoom,
        featureRooms,
        handleFilterRoom,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default Provider;

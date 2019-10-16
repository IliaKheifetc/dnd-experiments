import React from 'react';
import { useDrop } from 'react-dnd'
import styled from "styled-components";

import { ItemTypes } from "./constants/index";

const Container = ({ className, moveCardInside }) => {
  const [{initialOffset}, drop] = useDrop({
    accept: ItemTypes.card,
    drop: () => {
      console.log("called drop");
      moveCardInside(true);
    },
    collect: (monitor) => ({
      initialOffset: monitor.getInitialClientOffset()
    })
  })

  console.log("initialOffset", initialOffset)

  return (<div className={className} ref={drop}>

  </div>)
}

export default styled(Container)`
  width: 1000px;
  height: 1000px;
  margin-top: 300px;

  border: 2px solid yellow;
`
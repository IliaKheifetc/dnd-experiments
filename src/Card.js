import React from "react";
import styled from "styled-components";
import { ItemTypes } from "./constants/index.js";
import { useDrag } from "react-dnd";

const Card = ({ className, isInsideContainer }) => {
  const [{ clientOffset, isDragging }, drag] = useDrag({
    item: { type: ItemTypes.card },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
      clientOffset: monitor.getClientOffset()
    })
  })

  console.log("isInsideContainer", isInsideContainer)
  console.log("clientOffset", clientOffset)

  console.log("isDragging", isDragging);
  //console.log("isDragging", isDragging);

  return (<div className={className} ref={drag}>

  </div>)
}

export default styled(Card)`
  position: absolute;
  top: ${p => p.isInsideContainer ? "400px": "10px"};

  width: 250px;
  height: 150px;

  border: 2px solid green;
  cursor: move;
`

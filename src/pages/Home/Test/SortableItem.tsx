import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const Item = styled.div`
  padding: 8px;
  box-sizing: border-box;

  &:hover {
    background-color: var(--inkColor);
    cursor: grab;
  }
`;

function SortableItem({ index, data, id }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: id,
  });

  const itemStyle = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Item key={index} style={itemStyle} ref={setNodeRef} {...attributes} {...listeners}>
      {/* {data.value} */}
    </Item>
  );
}

export default SortableItem;

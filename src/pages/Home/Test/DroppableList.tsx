import React, { useLayoutEffect, useState, Children } from 'react';
import {
  DndContext,
  closestCenter,
  MouseSensor,
  useSensor,
  useSensors,
  TouchSensor,
  DragOverlay,
} from '@dnd-kit/core';

import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import styled from 'styled-components';
import DropItem from './DropItem';

const Item = styled.div`
  padding: 12px;
  box-sizing: border-box;
  background-color: #fff;
`;

interface ItemProps {
  index: number;
  id: string;
  [props: string]: any;
}

function SortableItem({ index, data, id, ...props }: ItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({
      id: id,
    });

  const itemStyle = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: 'grab',
    opacity: isDragging ? 0.3 : 1,
  };

  return (
    <DropItem
      key={index}
      style={itemStyle}
      ref={setNodeRef}
      data={data}
      {...props}
      {...attributes}
      {...listeners}
    />
  );
}

function DroppableList({ list }) {
  const [orderList, setOrderList] = useState<any>([]);
  const [activeItem, setActiveItem] = useState<any>(null);

  useLayoutEffect(() => {
    // list 복사해서 orderList에 할당
    if (list) {
      const copyList = list.slice();
      setOrderList(copyList);
    }
  }, [list]);

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        delay: 0,
        tolerance: 5,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 0,
        tolerance: 5,
      },
    })
  );
  return (
    <div>
      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={orderList} strategy={verticalListSortingStrategy}>
          {orderList.map((item, index) => (
            <SortableItem key={index} id={item.id} index={index} data={item} />
          ))}
        </SortableContext>
        <DragOverlay
          adjustScale={true}
          dropAnimation={{
            duration: 500,
            easing: 'cubic-bezier(0.18, 0.67, 0.6, 1.22)',
          }}
        >
          {activeItem ? <Item>{activeItem.value}</Item> : null}
        </DragOverlay>
      </DndContext>
    </div>
  );

  function handleDragStart(event) {
    const activeIndex = event.active.data.current.sortable.index;
    setActiveItem(orderList[activeIndex]);
  }

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setOrderList((items) => {
        const oldIndex = active.data.current.sortable.index;
        const newIndex = over.data.current.sortable.index;
        const reorderList = arrayMove(items, oldIndex, newIndex);

        return reorderList;
      });
    }
  }
}

export default DroppableList;

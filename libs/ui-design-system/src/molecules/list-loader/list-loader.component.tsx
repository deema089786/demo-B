import { useMemo } from 'react';
import { Skeleton, Stack } from '@mui/material';

const DEFAULT_ITEM_COUNT = 3;
const DEFAULT_ITEM_HEIGHT_PX = 50;
const DEFAULT_SPACING = 1;

export type ListLoaderProps = {
  itemCount?: number;
  itemHeightPx?: number;
  spacing?: number;
};
export const ListLoader: React.FC<ListLoaderProps> = (props) => {
  const {
    itemCount = DEFAULT_ITEM_COUNT,
    itemHeightPx = DEFAULT_ITEM_HEIGHT_PX,
    spacing = DEFAULT_SPACING,
  } = props;
  const items = useMemo(() => new Array(itemCount).fill(null), []);

  return (
    <Stack spacing={spacing}>
      {items.map((item, index) => (
        <Skeleton variant="rounded" height={itemHeightPx} key={index} />
      ))}
    </Stack>
  );
};

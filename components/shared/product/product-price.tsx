import React from 'react';
import { cn } from '@/lib/utils';

const ProductPrice = ({
  value,
  className,
}: {
  value: string;
  className?: string;
}) => {
  const stringValue = Number(value).toFixed(2); // TODO I think this doesn't need
  // Get the int/float
  const [intValue, floatValue] = stringValue.split('.');
  return (
    <p className={cn('text-2xl', className)}>
      <span className="text-xs align-super">$</span>
      {intValue}
      <span className="text-xs align-super">.{floatValue}</span>
    </p>
  );
};

export default ProductPrice;

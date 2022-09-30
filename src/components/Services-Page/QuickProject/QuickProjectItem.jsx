import React from 'react';

import Heading from 'components/shared/Heading';
import Text from 'components/shared/Text';

export default function QuickProjectItem({img, heading, text}) {
  return (
    <div className="quick-project-item">
      <img src={img} alt="" />
      <Heading variant="26" className="pb-2">
        {heading}
      </Heading>
      <Text variant="18">{text}</Text>
    </div>
  );
}

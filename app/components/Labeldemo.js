'use client'

import React from 'react';
import * as Label from '@radix-ui/react-label';
import '../globals.css';

function LabelDemo() {
  return (
    <div
      style={{ display: 'flex', padding: '0 20px', flexWrap: 'wrap', gap: 15, alignItems: 'center' }}
    >
      <Label.Root className="LabelRoot" htmlFor="firstName">
        First nameasdsad
      </Label.Root>
      <input className="Input" type="text" id="firstName" defaultValue="Pedro Duarte" />
    </div>
  );
}

export default LabelDemo;

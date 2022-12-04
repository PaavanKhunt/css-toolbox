import React, { useState } from 'react';
import {
  Box,
  Button,
  ColorInput,
  CopyButton,
  MantineProvider,
} from '@mantine/core';
import { convertHexToRGBA, invertColor } from './app/core/contrast';
import { IconClipboard, IconClipboardCheck } from '@tabler/icons';

function App() {
  const [value, onChange] = useState('#f5a');
  // let csb = 0;
  // csb = Contrast('#f5a5f2');

  // const colorcontrast = (lum: number): string => {
  //   if (lum > 0.5) {
  //     return '#000000';
  //   } else {
  //     return '#ffffff';
  //   }
  // };
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Box
        className="App"
        sx={{
          backgroundColor: invertColor(value),
          color: value,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          fontSize: '4rem',
          fontWeight: 800,
        }}
      >
        <Box
          sx={{
            marginInline: '0.5rem',
          }}
        >
          Hello World
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <ColorChanger label="Hex Color" color={value} onChange={onChange} />
        <ColorChanger
          label="Rgba Color"
          color={convertHexToRGBA(value)}
          onChange={onChange}
        />
        <ColorChanger label="Inverted Hex color" color={invertColor(value)} />
        <ColorChanger
          label="Inverted Rgba color"
          color={convertHexToRGBA(invertColor(value))}
        />
      </Box>
    </MantineProvider>
  );
}

interface ColorChangerProps {
  label: string;
  color: string;
  onChange?: (color: string) => void;
}

const ColorChanger = (props: ColorChangerProps) => {
  const { label, color, onChange } = props;
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-end',
        gap: '0.5rem',
        marginInline: '0.5rem',
        minWidth: '10rem',
      }}
    >
      <ColorInput
        label={label}
        value={color}
        onChange={onChange}
        format="hex"
      />
      <CopyButton value={color}>
        {({ copied, copy }) => (
          <Button color={copied ? 'teal' : 'blue'} onClick={copy}>
            {copied ? <IconClipboardCheck /> : <IconClipboard />}
          </Button>
        )}
      </CopyButton>
    </Box>
  );
};

export default App;

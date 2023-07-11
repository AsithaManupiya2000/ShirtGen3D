import React,{useRef} from 'react';
import { useFrame } from '@react-three/fiber';
import {easing} from 'maath';
import { useSnapshot } from 'valtio';

import state from '../store';

const CameraRig = ({childern}) => {
    const group = useRef();
    const snap = useSnapshot(state);
  return (
    <group ref={group}>
        {childern}
    </group>
  );
};

export default CameraRig;
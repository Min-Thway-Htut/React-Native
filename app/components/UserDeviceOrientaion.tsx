import React from 'react';
import { useDeviceOrientation } from '@react-native-community/hooks';

const OrientationComponent: React.FC = () => {
  const orientation = useDeviceOrientation();

  return (
    <div>
      <p>Is orientation portrait: {orientation.portrait ? 'Yes' : 'No'}</p>
      <p>Is orientation landscape: {orientation.landscape ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default OrientationComponent;

export const config = {
  headers: {
    disks: [
      { key: 'model', value: 'Model' },
      { key: 'diskCount', value: 'Disk count' },
      { key: 'reqHP', value: 'Required HP' },
      { key: 'diskDiameter', value: 'Disk Diameter' },
      { key: 'axisSize', value: 'Axis Size' },
      { key: 'workWidth', value: 'Working Width' },
      { key: 'transportWidth', value: 'Transporting Width' },
      { key: 'diskWorkingDepth', value: 'Disk Working Width' },
      { key: 'transportSpeed', value: 'Transport Speed' },
      { key: 'workSpeed', value: 'Work Speed' },
      { key: 'productivity', value: 'Productivity' },
      { key: 'weightWoRotors', value: 'Weight' },
    ],
    ploughs: [
      { key: 'model', value: 'Model' },
      { key: 'workBodyCount', value: 'Body count' },
      { key: 'reqHP', value: 'Required HP' },
      { key: 'mainBeam', value: 'Main Beam Size' },
      { key: 'bodiesDistance', value: 'Body Distance' },
      { key: 'widthWork', value: 'Width Work' },
      { key: 'clearance', value: 'Clearance' },
      { key: 'depthWork', value: 'Depth Work' },
      { key: 'transportSpeed', value: 'Transport Speed' },
      { key: 'workSpeed', value: 'Work Speed' },
      { key: 'productivity', value: 'Productivity' },
      { key: 'weight', value: 'Weight' },
    ],
    cultivators: [
      { key: 'model', value: 'Model' },
      { key: 'workBodyCount', value: 'Body count' },
      { key: 'reqHP', value: 'Required HP' },
      { key: 'bodySpacing', value: 'Body spacing' },
      { key: 'rowCount', value: 'Row count' },
      { key: 'widthWork', value: 'Working Width' },
      { key: 'transportWidth', value: 'Transporting Width' },
      { key: 'bodyProtection', value: 'Protection' },
      { key: 'depthWork', value: 'Working Depth' },
      { key: 'transportSpeed', value: 'Transport Speed' },
      { key: 'workSpeed', value: 'Work Speed' },
      { key: 'productivity', value: 'Productivity' },
      { key: 'weight', value: 'Weight' },
    ],
  },
  toastr: {
    timeOut: 4000,
    positionClass: 'toast-top-right',
    maxOpened: 3,
    newestOnTop: true,
  },
};

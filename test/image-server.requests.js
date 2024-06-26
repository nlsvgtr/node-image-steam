module.exports = [
  {
    steps: '',
    label: 'clear cache',
    options: { method: 'DELETE', statusCode: 204 },
  },
  { steps: 'rs=w:640', label: 'resize max to 640 width' },
  {
    steps: '',
    label: 'use original',
    qs: { useOriginal: 'true' },
    options: { disableFormat: true },
  },
  {
    steps: '$colors',
    label: 'get color palette',
    options: { disableFormat: true },
  },
  {
    steps: 'rs=w:640/$badCommand',
    label: 'command not found',
    options: { statusCode: 400, security: false },
  },
  {
    steps: '$colors=mn:false',
    label: 'get color palette with mean disabled',
    options: { disableFormat: true },
  },
  { steps: 'rs=w:640', label: 'cache on', qs: { cache: 'true' } },
  { steps: 'rs=w:640', label: 'download', qs: { download: 'true' } },
  {
    steps: 'gis=s400',
    label:
      'use google image service param to indicate that the length on the longer side is 400',
    options: { method: 'GET', statusCode: 200 },
  },
  {
    steps: 'gis=w400',
    label: 'use google image service param to indicate that the width is 400',
    options: { method: 'GET', statusCode: 200 },
  },
  {
    steps: 'gis=h400',
    label: 'use google image service param to indicate that the height is 400',
    options: { method: 'GET', statusCode: 200 },
  },
  {
    steps: 'gis=s0',
    label: 'use google image service param to indicate to return default image',
    options: { method: 'GET', statusCode: 200, disableFormat: true },
    qs: { cache: 'true' },
  },
  {
    steps: 'gis',
    label: 'Return default image if only gis is specified',
    options: { method: 'GET', statusCode: 200, disableFormat: true },
    qs: { cache: 'true' },
  },
  {
    steps: 'rs=w:640/cr=t:-10,l:-10,w:-20,h:-20',
    label: 'top/left/width/height -10px',
  },
  {
    steps: 'rs=w:640/cr=t:-10%25,l:-10%25,w:-20%25,h:-20%25',
    label: 'top/left/width/height -10%',
  },
  {
    steps: 'rs=w:640',
    imageName: 'steam-engine.jpg',
    label: 'resize max to 640 width on alternate image',
  },
  { steps: '', imageName: 'roast.png', label: 'test HQ settings' },
  {
    steps: 'rs=w:320/exd=l:10%25,t:10%25,r:10%25,b:10%25,bg:hex(aaaaaa)',
    label: 'extend 10% around all edges with hex',
  },
  {
    steps: 'rs=w:320/exd=l:50,t:50,r:50,b:50,bg:rgba(80;60;120;0.5)',
    label: 'extend 10% around all edges with rgba',
  },
  // github does not (yet) support these special characters, so opting to skip this for now -- verified locally
  // { steps: 'rs=w:640', imageName: 'file !"$%25&\'()*+,-.jpg', label: 'Verify filename encoding is supported' },
  { steps: 'rs=w:640/fx-sp=r:5', label: 'resize & apply sharpening' },
  {
    steps: 'rs=w:128,h:128,m/cr=w:128,h:128/fx-gs',
    label: 'create thumbnail and apply greyscale',
  },
  { steps: 'gm=g:1', label: 'apply min gamma' },
  { steps: 'gm=g:3', label: 'apply max gamma' },
  {
    steps: 'cr=l:5%25,t:10%25,w:90%25,h:80%25',
    label: 'crop using percentages',
  },
  { steps: 'cr=l:50,t:50,w:-100,h:-100', label: 'crop with offsets' },
  {
    steps: 'cr=l:50,t:50',
    label: 'crop left and top using default width/height',
  },
  {
    steps: 'cr=w:50%25,h:50%25,a:tl',
    label: 'crop to 50% anchored from top/left',
  },
  {
    steps: 'cr=w:50%25,h:50%25,a:br',
    label: 'crop to 50% anchored from bottom/right',
  },
  {
    steps: 'cr=w:50%25,h:50%25,ay:500,ax:300',
    label: 'crop to 50% with pixel anchor positioning',
  },
  { steps: 'qt=q:20', label: 'apply low quality' },
  {
    steps: 'cp=c:1/fm=f:png',
    label: 'output png and use compression',
    contentType: 'image/png',
  },
  {
    steps: 'cp=c:2/pg/fm=f:png',
    label: 'output png with compression and progressive rendering',
    contentType: 'image/png',
  },
  { steps: 'fm=f:webp', label: 'use webp format', contentType: 'image/webp' },
  { steps: 'rt=d:90', label: 'rotate 90 degrees' },
  { steps: 'rt=d:180', label: 'rotate 180 degrees' },
  { steps: 'rt=d:270', label: 'rotate 270 degrees' },
  { steps: 'rt=d:360', label: 'rotate 360 degrees' },
  { steps: 'fl=x', label: 'flip on x axis' },
  { steps: 'fl=y', label: 'flip on y axis' },
  { steps: 'fl=x,y', label: 'flip on x & y axis' },
  { steps: 'md=e:false', label: 'metadata disabled' },
  { steps: 'md=e:true', label: 'metadata enabled' },
  { steps: '', label: 'metadata default to enabled' },
  {
    steps: 'rs=w:640/ip=i:nearest',
    label: 'resize using nearest interpolation',
  },
  {
    steps: 'rs=w:640/ip=i:bilinear',
    label: 'resize using bilinear interpolation',
  },
  { steps: 'rs=w:640/ip', label: 'resize using default interpolation' },
  {
    steps: 'rs=w:640/ip=i:bicubic',
    label: 'resize using bicubic interpolation',
  },
  {
    steps: 'rs=w:640',
    imageName: 'steam-engine11.png',
    label: 'resize transparent image and retain alpha channel',
  },
  // { steps: 'fx-nm', label: 'normalize' },
  { steps: 'fx-bl', label: 'default blur' },
  { steps: '', imageName: 'Portrait_1.jpg', label: 'Verify Orientation 1' },
  {
    steps: 'rt=d:90',
    imageName: 'Portrait_1.jpg',
    label: 'Verify Orientation 1 @ 90 degrees',
  },
  {
    steps: 'rt=d:180',
    imageName: 'Portrait_1.jpg',
    label: 'Verify Orientation 1 @ 180 degrees',
  },
  {
    steps: 'rt=d:270',
    imageName: 'Portrait_1.jpg',
    label: 'Verify Orientation 1 @ 270 degrees',
  },
  { steps: '', imageName: 'Portrait_2.jpg', label: 'Verify Orientation 2' },
  {
    steps: 'rt=d:90',
    imageName: 'Portrait_2.jpg',
    label: 'Verify Orientation 2 @ 90 degrees',
  },
  {
    steps: 'rt=d:180',
    imageName: 'Portrait_2.jpg',
    label: 'Verify Orientation 2 @ 180 degrees',
  },
  {
    steps: 'rt=d:270',
    imageName: 'Portrait_2.jpg',
    label: 'Verify Orientation 2 @ 270 degrees',
  },
  { steps: '', imageName: 'Portrait_3.jpg', label: 'Verify Orientation 3' },
  {
    steps: 'rt=d:90',
    imageName: 'Portrait_3.jpg',
    label: 'Verify Orientation 3 @ 90 degrees',
  },
  {
    steps: 'rt=d:180',
    imageName: 'Portrait_3.jpg',
    label: 'Verify Orientation 3 @ 180 degrees',
  },
  {
    steps: 'rt=d:270',
    imageName: 'Portrait_3.jpg',
    label: 'Verify Orientation 3 @ 270 degrees',
  },
  { steps: '', imageName: 'Portrait_4.jpg', label: 'Verify Orientation 4' },
  {
    steps: 'rt=d:90',
    imageName: 'Portrait_4.jpg',
    label: 'Verify Orientation 4 @ 90 degrees',
  },
  {
    steps: 'rt=d:180',
    imageName: 'Portrait_4.jpg',
    label: 'Verify Orientation 4 @ 180 degrees',
  },
  {
    steps: 'rt=d:270',
    imageName: 'Portrait_4.jpg',
    label: 'Verify Orientation 4 @ 270 degrees',
  },
  { steps: '', imageName: 'Portrait_5.jpg', label: 'Verify Orientation 5' },
  {
    steps: 'rt=d:90',
    imageName: 'Portrait_5.jpg',
    label: 'Verify Orientation 5 @ 90 degrees',
  },
  {
    steps: 'rt=d:180',
    imageName: 'Portrait_5.jpg',
    label: 'Verify Orientation 5 @ 180 degrees',
  },
  {
    steps: 'rt=d:270',
    imageName: 'Portrait_5.jpg',
    label: 'Verify Orientation 5 @ 270 degrees',
  },
  { steps: '', imageName: 'Portrait_6.jpg', label: 'Verify Orientation 6' },
  {
    steps: 'rt=d:90',
    imageName: 'Portrait_6.jpg',
    label: 'Verify Orientation 6 @ 90 degrees',
  },
  {
    steps: 'rt=d:180',
    imageName: 'Portrait_6.jpg',
    label: 'Verify Orientation 6 @ 180 degrees',
  },
  {
    steps: 'rt=d:270',
    imageName: 'Portrait_6.jpg',
    label: 'Verify Orientation 6 @ 270 degrees',
  },
  { steps: '', imageName: 'Portrait_7.jpg', label: 'Verify Orientation 7' },
  {
    steps: 'rt=d:90',
    imageName: 'Portrait_7.jpg',
    label: 'Verify Orientation 7 @ 90 degrees',
  },
  {
    steps: 'rt=d:180',
    imageName: 'Portrait_7.jpg',
    label: 'Verify Orientation 7 @ 180 degrees',
  },
  {
    steps: 'rt=d:270',
    imageName: 'Portrait_7.jpg',
    label: 'Verify Orientation 7 @ 270 degrees',
  },
  { steps: '', imageName: 'Portrait_8.jpg', label: 'Verify Orientation 8' },
  {
    steps: 'rt=d:90',
    imageName: 'Portrait_8.jpg',
    label: 'Verify Orientation 8 @ 90 degrees',
  },
  {
    steps: 'rt=d:180',
    imageName: 'Portrait_8.jpg',
    label: 'Verify Orientation 8 @ 180 degrees',
  },
  {
    steps: 'rt=d:270',
    imageName: 'Portrait_8.jpg',
    label: 'Verify Orientation 8 @ 270 degrees',
  },
  {
    steps: 'rs=w:320',
    imageName: 'Portrait_2.jpg',
    label: 'Verify Orientation 2 resized',
  },
  {
    steps: 'rs=w:320',
    imageName: 'Portrait_3.jpg',
    label: 'Verify Orientation 3 resized',
  },
  {
    steps: 'rs=w:320',
    imageName: 'Portrait_4.jpg',
    label: 'Verify Orientation 4 resized',
  },
  {
    steps: 'rs=w:320',
    imageName: 'Portrait_5.jpg',
    label: 'Verify Orientation 5 resized',
  },
  {
    steps: 'rs=w:320',
    imageName: 'Portrait_6.jpg',
    label: 'Verify Orientation 6 resized',
  },
  {
    steps: 'rs=w:320',
    imageName: 'Portrait_7.jpg',
    label: 'Verify Orientation 7 resized',
  },
  {
    steps: 'rs=w:320',
    imageName: 'Portrait_8.jpg',
    label: 'Verify Orientation 8 resized',
  },
];

if (process.env.TRAVIS === undefined) {
  // not supported by travis CI
  module.exports = module.exports.concat([
    {
      steps: 'fm=f:avif',
      label: 'use avif format',
      contentType: 'image/avif',
    },
    { steps: 'fx-bl=s:5', label: 'sigma 5 blur' },
  ]);
}

const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);

// module.exports = mergeConfig(getDefaultConfig(__dirname), config);

// const {getDefaultConfig} = require('metro-config');

// module.exports = (async () => {
//   const {
//     resolver: {sourceExts, assetExts},
//   } = await getDefaultConfig();
//   return {
//     resolver: {
//       assetExts: assetExts.filter(ext => ext !== 'svg'),
//       sourceExts: [...sourceExts, 'svg'],
//     },
//     watchFolders: [
//       // 필요 없는 폴더를 제외하거나 추가
//     ],
//     maxWorkers: 2, // 필요한 경우 작업자 수 줄이기
//   };
// })();

// metro.config.js
// const {getDefaultConfig} = require('metro-config');

// module.exports = (async () => {
//   const config = await getDefaultConfig(__dirname);
//   const {resolver} = config;

//   // svg 설정
//   resolver.assetExts = resolver.assetExts.filter(ext => ext !== 'svg');
//   resolver.sourceExts = [...resolver.sourceExts, 'svg'];

//   // otf 폰트 확장자 추가
//   resolver.assetExts.push('otf');

//   // svg 트랜스포머
//   config.transformer = {
//     babelTransformerPath: require.resolve('react-native-svg-transformer'),
//     // Expo 전용 assetPlugins는 제거
//     // assetPlugins: ['expo-asset/tools/hashAssetFiles'],
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: false,
//       },
//     }),
//   };

//   return config;
// })();

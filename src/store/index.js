import { configureStore } from '@reduxjs/toolkit'

// you do not need `import app from './slices/app'`
const slicesFiles = require.context('./slices', true, /\.js$/)
const sliceReducers = slicesFiles.keys().reduce((slices, slicePath) => {
  // set './app.js' => 'app'
  const moduleName = slicePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = slicesFiles(slicePath)
  slices[moduleName] = value.default
  return slices
}, {})

const store = configureStore({
  reducer: sliceReducers
})

export default store
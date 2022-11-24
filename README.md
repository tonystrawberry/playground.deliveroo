<p align="center">
  <a>
    <img src="https://cdn-icons-png.flaticon.com/512/4213/4213886.png" width="60" />
  </a>
</p>
<h1 align="center">
  Deliveroo mobile interface
</h1>

- 🎯 React Native tutorial from https://www.youtube.com/watch?v=taPz40VmyzQ
- 🚀 This Deliveroo clone application is a multi-platform application built using React Native
- 🎨 Styling done with <a href="https://www.nativewind.dev/">NativeWind</a> (TailwindCSS)
- 🌃 Media & Content (images & menus & restaurants data) are fetched from a CMS called <a href="https://www.sanity.io/" target="_blank">Sanity</a>
- 📱 Using ExpoGo for live rendering on the mobile phone

# 📚 Libraries used
- `nativewind` for the styling
- `react-currency-formatter` for formatting the prices
- `react-native-animatable` for animating the introduction of the components of the loading screen
- `react-native-maps` for displaying the maps and the pin of the selected restaurant
- `react-native-heroicons` for using the different cute icons of <a href="https://heroicons.com/" target="_blank">Heroicons</a>
- `react-native-progress` for showing the progress bar and spinner
- `@reduxjs/toolkit` for the global state management and persisting data across the different screens

# 🗂 Folder structure
- `assets` for the images
- `components` for the reusable components
- `sanity` for the local CMS environment allowing to modify restaurants and dishes data from localhost
  - `sanity.js` will create a client allowing the React components to fetch data from `Sanity` 
- `screens` for the different application pages (one screen component per page)
- `slices` for the different reducers of the Redux state (basket & restaurant)
  - `store.js` will use these reducers and make them available to the React components
- `App.js` is the entrypoint of the application
- `babel.config.js` for converting ES code into a backwards compatible version of JavaScript
- `tailwind.config.js` for specifying which files can use TailwindCSS styling

# 📔 Sanity (Content Management System) Dashboard
https://www.sanity.io/manage/personal/project/lb05ygys

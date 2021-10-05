const {
  addDecoratorsLegacy,
  override,
  fixBabelImports
} = require("customize-cra")

// const rewiredMap = () => (config) => {
//   config.devtool =
//     config.mode === "development" ? "cheap-module-source-map" : false
//   return config
// }
process.env.GENERATE_SOURCEMAP = "false"
module.exports = override(
  // rewiredMap(),
  addDecoratorsLegacy(),
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css"
  })
)

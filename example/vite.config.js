const { default: viteReact } = require("@vitejs/plugin-react");
import react from '@vitejs/plugin-react-swc'
const path = require("path");
/**@type {import('vite').UserConfig} */
module.exports = {
	Plugin: [viteReact(),react()],
	server: {
		open: true,
		port: 8088,
	},
	resolve: {
		alias: {
			"diver-widget": path.resolve(__dirname, "../src"),
		},
	},
};
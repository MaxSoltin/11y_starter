module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('src/css')
	eleventyConfig.addPassthroughCopy('src/js')
	eleventyConfig.addPassthroughCopy('src/fonts')
	eleventyConfig.addPassthroughCopy('src/img')
	eleventyConfig.addPassthroughCopy('src/content/images/**/*.(jpg|png|webp|svg)')

	const markdownIt = require('markdown-it')

	let options = {
		html: true,
		linkify: true,
	}

	eleventyConfig.setLibrary('md', markdownIt(options))

	return {
		dir: {
			input: 'src',
			output: 'dist',
			includes: 'includes',
			layouts: 'layouts',
		},
		markdownTemplateEngine: 'njk',
		passthroughFileCopy: true,
		templateFormats: ['njk', 'md'],
	}
}

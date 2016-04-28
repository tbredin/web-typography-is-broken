module.exports = {
  paths: {
    public: 'dist',
    routes: {
      '/bower_components': 'bower_components'
    },
    styles: {
      src: 'app/styles/**/*.scss',
      dest: 'dist/styles',
      assets: 'app/images/',
      includes: [
        'node_modules/susy/sass',
        'bower_components/megatype',
        'bower_components/Scut/dist' // it's uppercase
      ]
    },
    templates: {
      dir: 'app/templates/',
      src: 'app/templates/**/*',
      src_pages: 'app/templates/pages/**/*.+(html|nunjucks)',
      src_partials: 'app/templates/partials/**/*.+(html|nunjucks)'
    },
    scripts: {
      src: 'app/scripts/**/*.js',
      dest: 'dist/scripts',
      entry: 'app/scripts/main.js',
      dest_file: 'main.js',
      includes: [
        './bower_components/jquery/dist/jquery.min.js',
        './bower_components/fullpage.js/jquery.fullPage.js'
      ]
    },
    images: {
      src: [
        'app/images/**/*.svg',
        'app/images/**/*.gif',
        'app/images/**/*.png',
        'app/images/**/*.ico',
        'app/images/**/*.jpg'
      ],
      dest: 'dist/images'
    },
    fonts: {
      src: './app/webfonts/**/*',
      dest: 'dist/webfonts'
    },
    icons: {
      src: './app/svg-icons/*.svg',
      dest: './app/templates/Includes'
    }
  },
  debug: true,
  userdb: null,
  minify: false
};
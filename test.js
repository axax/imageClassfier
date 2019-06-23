const ImageClassfier = require('./index.js')

ImageClassfier.handler({options: {url: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg'}}, {}, (arg1, result) => {
    console.log(result)
})

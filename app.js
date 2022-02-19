const form = $('#form')
const giphyResults = $('#giphy-results')
const removeButton = $('#remove-button')

form.on('submit', getInputs)
removeButton.on('click', removeResults)

async function getInputs (e) {
	e.preventDefault()
	const formInput = document.querySelector('#form-input')
	const res = await axios.get('http://api.giphy.com/v1/gifs/search?', {
		params : {q: formInput.value, api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'}
	})
	return getGIF(randomGif(res))
}

function randomGif (res) {
	const numResults = res.data.data.length
	const random = Math.floor(Math.random() * numResults)
	const url = res.data.data[random].images.original.url
	return url
}

function getGIF (url) {
	const newGif = document.createElement('img')
	newGif.src = url
	return giphyResults.append(newGif)
}

function removeResults () {
	return giphyResults.empty()
}

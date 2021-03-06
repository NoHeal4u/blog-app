import axios from 'axios'

export default class Posts {

	constructor () {

		axios.defaults.baseURL = 'http://localhost:3000/api/'

	}

	getAll() {

		return axios.get('posts')
	}

	get(id) {
			
		return axios.get(`posts/${id}`)
	}

	add(post) {

		return axios.post('posts', post)
	}

	delete (id) {
		return axios.delete(`posts/${id}`)
	}

	edit(id, post){

		return axios.put(`posts/${id}` , post)
	}
}


export const posts = new Posts()
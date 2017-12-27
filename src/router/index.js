import Vue from 'vue'
import Router from 'vue-router'

import Welcome from '@/pages/welcome'
import Home from '@/pages/Home'
import FirstPage from '@/view/firstpage'
import BookVedio from '@/view/bookvedio'
import BroadCast from '@/view/broadcast'
import Team from '@/view/team'
import Mine from '@/view/mine'
import Movie from '@/components/movie/movie'
import Music from '@/components/music/music'
import Read from '@/components/read/read'
import Tv from '@/components/tv/tv'
import City from '@/components/city/city'
import MovieDetail from '@/pages/MovieDetail'
import ReadDetail from '@/pages/ReadDetail'
import TvDetail from '@/pages/TvDetail'
import CityDetail from '@/pages/CityDetail'
import MusicDetail from '@/pages/MusicDetail'

import Rank from '@/pages/rank'
Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path:'/',
  		component: Welcome
  	},
    {
      path: '/home',
			redirect: '/home/firstpage',
      component: Home,
      children: [
      	{
      		path: 'firstpage',
		      name: 'Firstpage',
		      component: FirstPage
      	},
      	{
      		path: 'bookvedio',
      		redirect: '/home/bookvedio/movie',
					component: BookVedio,
		      children: [
		      	{
		      		path: 'movie',
		      		component: Movie
		      	},
		      	{
		      		path: 'read',
		      		component: Read
		      	},
		      	{
		      		path: 'tv',
		      		component: Tv
		      	},
		      	{
		      		path: 'city',
		      		component: City
		      	},
		      	{
		      		path: 'music',
		      		component: Music
		      	}
		      ]
      	},
      	{
      		path: 'broadcast',
		      name: 'BroadCast',
		      component: BroadCast
      	},
      	{
      		path: 'team',
		      name: 'Team',
		      component: Team
      	},
      	{
      		path: 'mine',
		      name: 'Mine',
		      component: Mine
      	}
      
      ]
    },
    {
    	path: '/moviedetail/:id?',
    	name:'movieDetail',
    	component: MovieDetail
    },
    {
    	path: '/rank/:id?',
    	name:'rank',
    	component: Rank
    	
    },
    {
    	path: '/readdetail/:id?',
    	name:'read',
    	component: ReadDetail
    },
    {
    	path: '/tvdetail/:id?',
    	name:'tv',
    	component: TvDetail
    },
    {
    	path: '/citydetail/:id?',
    	name:'city',
    	component: CityDetail
    },
    {
    	path: '/musicdetail/:id?',
    	name:'music',
    	component: MusicDetail
    }
    
  ]
})

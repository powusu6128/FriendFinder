var friendsList = [
	{
		name: 'Jonathan',
		photo: 'http://static.businessinsider.sg/sites/2/2017/10/59ef5b0c909924d2008b6aeb.jpg',
		scores: [2,2,2,2,2,2,2,2,2,2]
	},
	{
		name: 'Esi',
		photo: 'https://lh3.googleusercontent.com/m4s7KYt2KLH3muyPAB9vKduibK_vZPkWQCXxFDjMCkSvfzupr9m9ZDbyDFfS56BG9xDYI9foCyALxCvopTg5PDZR1QsATO_wap3vGaPynJ9Rc_mPi2reuIbdlA',
		scores: [5,5,5,5,5,5,5,5,5,5]
	},
	{
		name: 'Steve Job',
		photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Steve_Jobs_Headshot_2010-CROP.jpg/1200px-Steve_Jobs_Headshot_2010-CROP.jpg',
		scores: [1,1,1,1,1,1,1,1,1,1]
	},
	{
		name: 'Bill Gate',
		photo: 'https://pbs.twimg.com/profile_images/929933611754708992/ioSgz49P_400x400.jpg',
		scores: [5,4,3,2,1,5,4,3,2,1]
	},
	{
		name: 'Jeff',
		photo: 'http://www.slate.com/content/dam/slate/articles/technology/technology/2017/07/170727_TECH_JeffBezos-RichestMan.jpg.CROP.promo-xlarge2.jpg',
		scores: [1,2,3,4,5,1,2,3,4,5]
	},
	{
		name: 'Miyamoto',
		photo: 'https://vignette.wikia.nocookie.net/nintendo/images/e/e6/Shigeru_Miyamoto.jpg/revision/latest?cb=20170517154724&path-prefix=en',
		scores: [1,3,5,2,4,4,2,4,3,1]
    }
    ,
	{
		name: 'Robertson',
		photo: 'https://images.sk-static.com/images/media/profile_images/artists/3821916/huge_avatar',
		scores: [1,3,5,2,4,4,2,4,3,1]
    }
    ,
	{
		name: 'Neo',
		photo: 'https://i0.wp.com/deepaknair.com/supercool/wp-content/uploads/2012/12/neomatrixbullets.jpg?resize=460%2C311',
		scores: [1,3,5,2,4,4,2,4,3,1]
    }
    ,
	{
		name: 'Sprock',
		photo: 'https://uproxx.files.wordpress.com/2015/08/instagram-spock.png',
		scores: [1,3,5,2,4,4,2,4,3,1]
	},
	{
		name: 'Manpassman',
		photo: 'https://images.sk-static.com/images/media/profile_images/artists/3821916/huge_avatar',
		scores: [1,3,5,2,4,4,2,4,3,1]
    }
]

const compatibility = (arr1, arr2) => {
  return arr1.map((e,i) => Math.abs(e - arr2[i]))
  .reduce((sum, val) => sum += val)
}

const findMatch = newSet => {
	const comps = friendsList.map(e => compatibility(newSet, e.scores))
	return friendsList[comps.indexOf(Math.min(...comps))]
}

const addToList = newFriend => friendsList.push(newFriend);

module.exports = {
	list: friendsList, findMatch, addToList
}
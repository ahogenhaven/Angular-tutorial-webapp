eventsApp.factory('eventData', function () {
	return {
		event: {
			name: 'Angular webapp',
			date: '13597810105626',
			time: '10:30 am',
			location: {
				address:'Google Headquarters',
				city:'Mountain View',
				province: 'CA'
			},
			imageUrl: 'img/AngularJS-large.png',
			
			sessions: [
			{
				name: 'D Masterclass',
				creatorname: 'bobo',
				duration: 1,
				level: 'introductory',
				abstract: 'youll learn some pretty damn hard stuff from bobo',
				upVoteCount: 0
			},
			{
				name: 'B Masterclass',
				creatorname: 'bobo',
				duration: 2,
				level: 'intermediate',
				abstract: 'youll learn some pretty damn hard stuff from bobo',
				upVoteCount: 0
			},		
			{
				name: 'A Masterclass',
				creatorname: 'bobo',
				duration: 3,
				level: 'advanced',
				abstract: 'youll learn some pretty damn hard stuff from bobo',
				upVoteCount: 0,
			},
			{
				name: 'C Masterclass',
				creatorname: 'bobo',
				duration: 4,
				level: 'pretty damn hard yo',
				abstract: 'youll learn some pretty damn hard stuff from mr. b',
				upVoteCount: 0,
			}
			]
		}
	}
});
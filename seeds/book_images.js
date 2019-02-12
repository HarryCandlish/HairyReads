
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('book_images').del()
    .then(function () {
      // Inserts seed entries
      return knex('book_images').insert([
        {id: 1,  name:'Where the Crawdads Sing', image:'/images/WhereTheCrawdadsSing.jpg'},
        {id: 2,  name:'An Anonymous Girl', image:'/images/AnAnonymousGirl.jpg'},
        {id: 3,  name:'The Reckoning', image:'/images/TheReckoning.jpg'},
        {id: 4,  name:'Liar Liar', image:'/images/LiarLiar.jpg'},
        {id: 5,  name:'Crucible', image:'/images/Crucible.jpg'},
        {id: 6,  name:'Fire and Blood', image:'/images/FireAndBlood.jpg'},
        {id: 7,  name:'Circe', image:'/images/Circe.jpg'},
        {id: 8,  name:'Turning Point', image:'/images/TurningPoint.jpg'},
        {id: 9,  name:'The Only Woman in the Room', image:'/images/TheOnlyWomanInTheRoom.jpg'},
        {id: 10, name:'Devotions', image:'/images/Devotions.jpg'},
        {id: 11, name:'The New Iberia Blues', image:'/images/TheNewIberiaBlues.jpg'},
        {id: 12, name:'Nine Perfect Strangers', image:'/images/NinePerfectStrangers.jpg'},
        {id: 13, name:'Every Breath', image:'/images/EveryBreath.jpg'},
        {id: 14, name:'Judgment', image:'/images/Judgment.jpg'},
        {id: 15, name:'Out of the Dark', image:'/images/OutOfTheDark.jpg'}
      ]);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tweets').truncate()
  await knex('tweets').insert([
    {tweet:"Merhabalar Tweeter ilk denememi yaziyorum.",created_at:"2023-07-11 09:00:00",user_id:1},
    {tweet:"Benimde ilk tweetim. Bugun hava çok sıcak.",created_at:"2023-07-11 09:01:00",user_id:2},
    {tweet:'OOO! dayı hayırlı olsun.Hangi dilleri kullandin',created_at:"2023-07-11 09:02:00",user_id:3},
    {tweet:'Bugun Esra Ezmecinin yeni kitabini bitirdim. Güzel bir kitap, bir solukta bitirdim. Herkese tavsiye ederim.',created_at:"2023-07-11 09:03:00",user_id:2},
    {tweet:"Denme 2 deneme 2, bu tweet sayfasında 2. tweetim, buglar varmı diye bakacam tabi",created_at:"2023-07-11 09:04:00",user_id:1},
    {tweet:"Bugün front end dersimi girdim, CSS dle flex boxları öğreniyoruz. Güzel bir kütüphae olmuş. İşleri daha pratik hale getiriyor.",created_at:"2023-07-11 09:05:00",user_id:3},
  ]);
};

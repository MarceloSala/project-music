import { Song } from '@apoloplay/definitions';
import { Types } from 'mongoose';

export const SongMock: Song = {
  _id: new Types.ObjectId(),
  image:
    'https://i.pinimg.com/originals/b4/58/ea/b458eaa8cf4a847e6c175f899502dbb8.png',
  name: 'Poker Face',
  publish_year: 2008,
  artist: {
    _id: new Types.ObjectId(),
    name: 'Stefani Joanne Angelina Germanotta',
    alias: 'Lady Gaga',
    nationality: 'Estadounidense',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lady-gaga-cumpleanos-1585388285.jpg?crop=0.715xw:1.00xh;0.143xw,0&resize=640:*',
  },
};


export const SongArray: Song[] = [{
    _id: new Types.ObjectId(),
    image:'https://cherry-brightspot.s3.amazonaws.com/media/2010/06/08/shakira.jpg',
    name: 'Waka Waka (This Time for Africa) ',
    publish_year: 2010,
    artist: {
      _id: new Types.ObjectId(),
      name: 'Shakira Isabel Mebarak Ripoll',
      alias: 'Shakira',
      nationality: 'Colombiana',
      image: 'https://depor.com/resizer/HQgjD5K6SDwjYkurI7FLcucvR00=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/H42EXSOSQVCQ7HWEAIFVJNKH2Y.jpg',
    },
  }, {
    _id: new Types.ObjectId(),
    image: 'https://static1-sevilla.abc.es/media/201210/02/James-Bond-Adele-Skyfall--644x662.jpg',
    name: 'Skyfall',
    publish_year: 2012,
    artist: {
      _id: new Types.ObjectId(),
      name: 'Adele Laurie Blue Adkins',
      alias: 'Adele',
      nationality: 'Britanica',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Adele_2016.jpg/640px-Adele_2016.jpg',
    },
  }, {
    _id: new Types.ObjectId(),
    image:'https://m.media-amazon.com/images/I/61IBydKs9GL.jpg',
    name: 'Gangnam Style',
    publish_year: 2012,
    artist: {
      _id: new Types.ObjectId(),
      name: 'Park Jae-sang',
      alias: 'PSY',
      nationality: 'Surcoreano',
      image: 'https://6.vikiplatform.com/image/14390feaf0cf496cae501a5bc06298b2.jpg?x=b&a=0x0&s=460x268&e=t&f=t&cb=1',
    },
  }

]

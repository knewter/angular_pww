'use strict';

angular.module('angularPwwApp')
  .controller('MainCtrl', function ($scope) {
    $scope.videos = [
      {
        "embed": "<iframe src=\"http://www.youtube.com/v/zWLJZw9Ws-g&feature=youtube_gdata_player\" width=\"960\" height=\"540\" frameborder=\"0\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>",
        "url": "http://www.youtube.com/v/zWLJZw9Ws-g&feature=youtube_gdata_player",
        "duration": 151,
        "description": "I was a staff writer on the Onion's show \"SportsDome\" which aired on Comedy Central in 2011.  This is one of the stories we did--full credit to David Iscoe (twitter.com/realhumanbeing) for the idea and script. It could have been produced by the CNN team covering the Steubenville rape verdict.",
        "title": "Athlete Overcomes Rape (Onion SportsDome)"
      },
      {
        "embed": "<iframe src=\"http://www.youtube.com/v/TDiIOTjyHzU&feature=youtube_gdata_player\" width=\"960\" height=\"540\" frameborder=\"0\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>",
        "url": "http://www.youtube.com/v/TDiIOTjyHzU&feature=youtube_gdata_player",
        "duration": 40,
        "description": "Fully automated paper plane folding machine, even got its own compressor.\nThe video speed is about three times faster the normal.\nIt is 150cm long and 40cm wide.\n\nYou can see V1.0 here: http://youtu.be/nxywiTLe3oM \n\nPicture of my SR 3D Builder drawing: \nhttp://imageshack.us/photo/my-images/534/3dbild.png/\n\nMaterial V2.0:\n2x NXT \n5x NXT Servo motors\n4x NXT Color sensors\n3x NXT Touch sensors\n1x Touch sensor multiplexor\n1x NXT accelerometer sensor\n1x NXT Infared Link sensor\n5x Normal Power function motors\n5x XL Powerfunction motors\n4x IR recievers\n5x Batteriboxes\nabout 6000-7000 lego pieces",
        "title": "Lego paper plane folding machine V2.0"
      },
      {
        "embed": "<iframe src=\"http://www.youtube.com/v/qhR41a8N7Ek&feature=youtube_gdata_player\" width=\"960\" height=\"540\" frameborder=\"0\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>",
        "url": "http://www.youtube.com/v/qhR41a8N7Ek&feature=youtube_gdata_player",
        "duration": 264,
        "description": "http://www.mlfilms.com/productions/aaron_shearer - BACH & friends - A New two-hour Documentary with Joshua Bell, Bobby McFerrin, Béla Fleck, Philip Glass, Chris Thile, Hilary Hahn, Edgar Meyer, Simone Dinnerstein, Emerson String Quartet, Manuel Barrueco, Swingle Singers, Glenn Gould  http://www.mlfilms.com/productions/bach_project/purchase",
        "title": "Aaron Shearer: A Life With The Guitar HD Lesson - Michael Lawrence Films"
      }
    ];
  });
